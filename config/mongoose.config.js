const mongoose = require("mongoose");

module.exports = async function connectDB() {
  try {
    const connection = await mongoose.connect(process.env.MONGODB_URI);

    console.log("connected to db ->" + connection.connections[0].name);
  } catch (error) {
    console.log(error);
  }
};
