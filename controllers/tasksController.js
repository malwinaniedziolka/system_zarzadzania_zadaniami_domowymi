const Tasks = require("../models/TasksModel");

const { STATUS_CODE } = require("../constants/statusCode");

exports.getAddTaskView = (req, res) => {
  res.render("add-task.ejs", {
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

exports.markTaskAsDone = (req, res) => {
  const { name } = req.body;
  Tasks.markAsDone(name);
  res.redirect("/");
}

exports.deleteTask = (req, res) => { //usuwa wszystkie rzeczy o tym imieniu czyli np 2 matmy
  const { id } = req.params;
  Tasks.deleteById(id);

  res.status(STATUS_CODE.OK).json({ success: true });
}