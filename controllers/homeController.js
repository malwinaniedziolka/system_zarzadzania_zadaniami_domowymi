const Tasks = require("../models/TasksModel");

const { MENU_LINKS } = require("../constants/navigation");
const { STATUS_CODE } = require("../constants/statusCode");

exports.getTasksView = (request, response) => {
  const tasks = Tasks.getAll();

  tasks.forEach(task => {
    const deadline = new Date(task.deadline);
    task.isLate = !task.done && deadline < new Date();
  });

  response.render("home.ejs", {
    headTitle: "Home - All Tasks",
    path: "/",
    activeLinkPath: "/",
    tasks,
    menuLinks: MENU_LINKS,
  });
};