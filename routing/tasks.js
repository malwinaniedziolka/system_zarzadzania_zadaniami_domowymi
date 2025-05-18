const express = require("express");

const homeController = require("../controllers/homeController");
const tasksController = require("../controllers/tasksController");

const router = express.Router();

router.get("/", homeController.getTasksView);
router.get("/add", tasksController.getAddTaskView);
router.post("/add", tasksController.addNewTask);
router.post("/done", tasksController.markTaskAsDone);
router.delete("/delete/:id", tasksController.deleteTask);

module.exports = router;