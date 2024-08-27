const express = require("express"); 
const TaskController = require("../controllers/Task")


const router = express.Router();


router
.route("/")
.post(TaskController.createTask)
.get(TaskController.getAllTasks)


router
.route("/:id")
.patch(TaskController.updateTask)
.delete(TaskController.deleteTask)


module.exports = router
