const express = require("express");

const homeController = require("../controllers/homeController");
const tasksController = require("../controllers/tasksController");

const router = express.Router();

router.get("/", homeController.getTasksView);
router.get("/add", tasksController.getAddTaskView);
router.post("/add", tasksController.addNewTask);
router.post("/done/:id", tasksController.markTaskAsDone);
router.get("/upcoming", tasksController.getUpcomingTasksView);
router.get("/pastdue", tasksController.getPastDueTasksView);
router.get("/completed", tasksController.getCompletedTasksView);
router.delete("/delete/:id", tasksController.deleteTask);

module.exports = router;