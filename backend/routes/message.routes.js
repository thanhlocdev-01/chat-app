const express = require("express");
const {
  sendMessage,
  getMessages,
} = require("../controllers/message.controller");
const middlewareRoute = require("../middleware/middlewareRoute");

const router = express.Router();

router.get("/:id", middlewareRoute, getMessages);
router.post("/send/:id", middlewareRoute, sendMessage);

module.exports = router;
