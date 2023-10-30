const express = require("express");
const Task = require("../models/taskModule");
const { createTask, getTasks, getTask, del, update } = require("../controllers/taskController");

const router = express.Router()


//create a task

router.post("/api/tasks", createTask);

router.get("/api/tasks", getTasks);
router.get("/api/tasks/:id", getTask)
router.delete("/api/tasks/:id", del)
router.put("/api/tasks/:id", update)






module.exports = router