const express = require("express");
const sendMessage = require("../controllers/message.controller");
const middlewareRoute = require("../../middleware/middlewareRoute");

const router = express.Router();

router.post("/send/:id", middlewareRoute, sendMessage);

module.exports = router;
