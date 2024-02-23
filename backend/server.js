const express = require("express");
const dotenv = require("dotenv");

const connectMongoDB = require("./db/connectMongoDB.js");

const authRoutes = require("./routes/auth.routes");
const messageRoutes = require("./routes/message.routes");
const cookieParser = require("cookie-parser");

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);

// app.get("/", (req, res) => {
//   res.send("hello world!");
// });

app.listen(PORT, () => {
  connectMongoDB();
  console.log(`Server is running ${PORT}`);
});
