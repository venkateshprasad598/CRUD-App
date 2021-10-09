const Todo = require("./db/Schema");

const getTask = async (req, res) => {
  try {
    const todo = await Todo.find({});
    res.status(201).json({ todo });
  } catch (err) {
    res.status(404).json({ message: err });
  }
};

const postTask = async (req, res) => {
  try {
    const todo = await Todo.create(req.body);
    res.status(201).json({ todo });
  } catch (err) {
    res.status(404).json({ message: err });
  }
};
const editTask = (req, res) => {
  res.status(200).json("Home");
};
const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await Todo.findOneAndDelete({ _id: id });
    res.status(201).json({ deleteTodo });
  } catch (err) {
    res.status(404).json({ message: err });
  }
};
module.exports = { getTask, postTask, editTask, deleteTask };
