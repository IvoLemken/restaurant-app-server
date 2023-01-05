const { Router } = require("express");
const Reservation = require("../models/").reservation;

const router = new Router();

//forDate
router.get("/forDate", async (req, res) => {
    const { reservationDate } = req.body;

    if (!reservationDate) {
        return res
          .status(400)
          .send({ message: "Please provide a date" });
    }

    const reservations = await Reservation.findAll({ 
        attributes : ["date",'tableId'],
        where : {date: reservationDate}
    });

    return res.status(200).send({"reservedTables": reservations})
});

module.exports = router;