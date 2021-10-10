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
    console.log(err)
  }
};

const getSingleTask = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findOne({ _id: id });
    console.log(todo);

    if (!todo) {
      return res.status(404).json("No Task Found");
    }
    res.status(200).json({ todo });
  } catch (err) {
    res.status(404).json({ message: err });
  }
};

const editTask = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findOneAndUpdate({ _id: id }, req.body);
    if (!todo) {
      res.status(500).json("Enter Correct ID");
    }
    res.json(200).json({ todo });
  } catch (err) {
    res.status(404).json({ message: err });
  }
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
module.exports = { getTask, postTask, editTask, deleteTask, getSingleTask };
