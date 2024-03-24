const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URl);
    console.log(`Mongodb connected ${conn.connection.host}`.bgYellow.white);
  } catch (error) {
    console.log(`Error with mongodb server ${error}`.bgRed.white);
  }
};

module.exports = connectDB;
