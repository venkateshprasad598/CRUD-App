const mongoose = require("mongoose");

const todayTask = new mongoose.Schema({
  name: String,
});
// Todo is a Collection in which todayTask model kind og objects or documents will be created
module.exports = mongoose.model("Todo", todayTask);
