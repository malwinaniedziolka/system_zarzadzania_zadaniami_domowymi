const Tasks = require("../models/TasksModel");

const { MENU_LINKS } = require("../constants/navigation");
const { STATUS_CODE } = require("../constants/statusCode");

exports.getAddTaskView = (req, res) => {
  res.render("add-task.ejs", {
    headTitle: "Add Task",
    path: "/add",
    activeLinkPath: "/add",
    menuLinks: MENU_LINKS,
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

exports.getUpcomingTasksView = (req, res) => {
  const tasks = Tasks.getAllUpcoming();
  const sortParam = req.query.sort;

  if (sortParam === 'new') {
    tasks.sort((a, b) => new Date(b.deadline) - new Date(a.deadline));
  } else if (sortParam === 'old') {
    tasks.sort((a, b) => new Date(a.deadline) - new Date(b.deadline));
  }

  res.render("upcoming-tasks.ejs", {
    headTitle: "Upcoming Tasks",
    path: "/upcoming",
    activeLinkPath: "/upcoming",
    menuLinks: MENU_LINKS,
    tasks,
  });
}

exports.getPastDueTasksView = (req, res) => {
  const tasks = Tasks.getAllPastDue();
  const sortParam = req.query.sort;

  if (sortParam === 'new') {
    tasks.sort((a, b) => new Date(b.deadline) - new Date(a.deadline));
  } else if (sortParam === 'old') {
    tasks.sort((a, b) => new Date(a.deadline) - new Date(b.deadline));
  }

  res.render("past-due-tasks.ejs", {
    headTitle: "Upcoming Tasks",
    path: "/pastdue",
    activeLinkPath: "/pastdue",
    menuLinks: MENU_LINKS,
    tasks,
  });
}

exports.getCompletedTasksView = (req, res) => {
  const tasks = Tasks.getAllCompleted();
  const sortParam = req.query.sort;

  if (sortParam === 'new') {
    tasks.sort((a, b) => new Date(b.deadline) - new Date(a.deadline));
  } else if (sortParam === 'old') {
    tasks.sort((a, b) => new Date(a.deadline) - new Date(b.deadline));
  }

  res.render("completed-tasks.ejs", {
    headTitle: "Completed Tasks",
    path: "/completed",
    activeLinkPath: "/completed",
    menuLinks: MENU_LINKS,
    tasks,
  });
}

exports.deleteTask = (req, res) => {
  const { id } = req.params;
  Tasks.deleteById(id);

  res.status(STATUS_CODE.OK).json({ success: true });
}