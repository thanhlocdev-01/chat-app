const express = require("express");
const middlewareRoute = require("../../middleware/middlewareRoute");
const getUserForSidebar = require("../controllers/user.controller");

const router = express.Router();

router.get("/", middlewareRoute, getUserForSidebar);

module.exports = router;
