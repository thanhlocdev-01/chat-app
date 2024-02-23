const jwt = require("jsonwebtoken");

const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });
  res.cookie("jwt", token, {
    maxAge: 25 * 24 * 60 * 60 * 1000, //MS
    httpOnly: true, //preven XSS attacks cross-site scriptting attacks
    sameSite: "strict", // CSRF attacks cross-site request forgery atttacks
    secure: process.env.NODE_ENV !== "development",
  });
};

module.exports = generateTokenAndSetCookie;
