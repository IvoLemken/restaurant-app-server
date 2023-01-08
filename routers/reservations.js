const { Router } = require("express");
const { Op } = require("sequelize");
const Reservation = require("../models/").reservation;
const User = require("../models/").user;
const authMiddleware = require("../auth/middleware");

const router = new Router();

//forDate
router.post("/forDate", async (req, res) => {
    const { reservationDate } = req.body;

    if (!reservationDate) {
        return res
          .status(400)
          .send({ message: "Please provide a date" });
    }

    if ((new Date(reservationDate) == "Invalid Date") || isNaN(Date.parse(reservationDate))){
        return res
          .status(400)
          .send({ message: `${reservationDate} is not a valid date` });
    }

    const reservations = await Reservation.findAll({ 
        attributes : ["date",'tableId'],
        where : {date: reservationDate}
    });

    return res.status(200).send({"reservedTables": reservations})
});

//all
router.get("/all", async (req, res) => {
// router.get("/all", authMiddleware, async (req, res) => {
    // if (!req.user.isAdmin) {
    //     return res.status(403).send({
    //         message:
    //           "You do not have sufficient priviliges to access this content"
    //       });
    // }
    
    const reservations = await Reservation.findAll({ 
        attributes : ["id","date",'tableId'],
        where: {"date": {[Op.gte]: new Date()}},
        include : [{ model: User, attributes: ["name","email","phone"] }],
        order: [["date", "ASC"],["tableId", "ASC"]]
    });

    return res.status(200).send({"reservedTables": reservations})
  });

module.exports = router;