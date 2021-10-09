const express = require("express");
const router = express.Router();
const { getTask, postTask, editTask, deleteTask } = require("./operations");

router.get("/", getTask);
router.post("/", postTask);
router.patch("/:id", editTask);
router.delete("/:id", deleteTask);
module.exports = router;
