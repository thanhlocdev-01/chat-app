const express = require("express");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");

const connectMongoDB = require("./db/connectMongoDB.js");
const authRoutes = require("./routes/auth.routes");
const messageRoutes = require("./routes/message.routes");
const userRoutes = require("./routes/user.routes");
const { app, server } = require("./socket/socket.js");

const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

server.listen(PORT, () => {
  connectMongoDB();
  console.log(`Server is running ${PORT}`);
});
