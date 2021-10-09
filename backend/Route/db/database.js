const mongoose = require("mongoose");

//return is very important here!
const connectDb = (url) => {
  return mongoose.connect(url).then(() => console.log("Connected To DB"));
};

module.exports = connectDb;
