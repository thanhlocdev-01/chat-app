const mongoose = require("mongoose");

const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("Connect MongoDB");
  } catch (error) {
    console.log(" Error connecting MongoDB", error.massages);
  }
};

module.exports = connectMongoDB;
