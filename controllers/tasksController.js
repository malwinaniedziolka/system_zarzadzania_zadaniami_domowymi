const Tasks = require("../models/TasksModel");

const { STATUS_CODE } = require("../constants/statusCode");

exports.getAddTaskView = (request, response) => {
  response.render("add-task.ejs", {
    headTitle: "Add Task",
    path: "/add",
    activeLinkPath: "/add",
  });
};

exports.addNewTask  = (req, res) => {
    const { name, description, deadline } = req.body;
    const newTask = new Tasks(name, description, deadline);
    Tasks.add(newTask);
    res.redirect('/');
}