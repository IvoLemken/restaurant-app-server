const { Router } = require("express");
const Tables = require("../models/").table;

const router = new Router();

// get all
router.get("/", async (req, res) => {
    const tables = await Tables.findAll({
        attributes: ["id", "seats"]
    });

    return res.status(200).send({"tables": tables})
});

module.exports = router;