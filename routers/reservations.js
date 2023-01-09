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
router.get("/all", authMiddleware, async (req, res) => {
    if (!req.user.dataValues["isAdmin"]) {
        return res.status(403).send({
            message:
              "You do not have sufficient priviliges to access this content"
          });
    }
    
    const reservations = await Reservation.findAll({ 
        attributes : ["id","date",'tableId'],
        where: {"date": {[Op.gte]: new Date()}},
        include : [{ model: User, attributes: ["name","email","phone"] }],
        order: [["date", "ASC"],["tableId", "ASC"]]
    });

    return res.status(200).send({"reservedTables": reservations})
  });

//create
router.post("/create", authMiddleware, async (req, res) => {
    const { date, tableId } = req.body;
    
    if (!date || !tableId) {
        return res
          .status(400)
          .send({ message: "Please provide a date and a tableId" });
    }

    await Reservation.create({
        date: date,
        tableId: tableId,
        userId: req.user.dataValues["id"]
    },)
    
    return res.status(201).send({ message: "Reservation was created" })
});

//cancel
router.post("/cancel", authMiddleware, async (req, res) => {
    if (!req.user.dataValues["isAdmin"]) {
        return res.status(403).send({
            message:
              "You do not have sufficient priviliges to perform this action"
          });
    }

    const { id } = req.body;
    
    if (!id) {
        return res
          .status(400)
          .send({ message: "Please provide an id" });
    }

    await Reservation.destroy({
        where: { id: id }
    },)
    
    return res.status(200).send({ message: "Reservation was deleted" })
});

module.exports = router;