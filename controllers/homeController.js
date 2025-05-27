const Tasks = require("../models/TasksModel");

const { MENU_LINKS } = require("../constants/navigation");

exports.getTasksView = (req, res) => {
  const tasks = Tasks.getAll();
  const sortParam = req.query.sort;

  tasks.forEach(task => {
    const deadline = new Date(task.deadline);
    task.isLate = !task.done && deadline < new Date();
  });

  if (sortParam === 'new') {
    tasks.sort((a, b) => new Date(b.deadline) - new Date(a.deadline));
  } else if (sortParam === 'old') {
    tasks.sort((a, b) => new Date(a.deadline) - new Date(b.deadline));
  }

  res.render("home.ejs", {
    headTitle: "Home - All Tasks",
    path: "/",
    activeLinkPath: "/",
    tasks,
    menuLinks: MENU_LINKS,
  });
};