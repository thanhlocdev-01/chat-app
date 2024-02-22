const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

const authRoutes = require("./routes/auth.routes.js");
const connectMongoDB = require("./db/connectMongoDB.js");

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();
app.use(bodyParser.json());

app.use("/api/auth", authRoutes);

// app.get("/", (req, res) => {
//   res.send("hello world!");
// });

app.listen(PORT, () => {
  connectMongoDB();
  console.log(`Server is running ${PORT}`);
});
