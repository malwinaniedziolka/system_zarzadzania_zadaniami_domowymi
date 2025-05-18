const Tasks = require("../models/TasksModel");

const { MENU_LINKS } = require("../constants/navigation");
const { STATUS_CODE } = require("../constants/statusCode");

exports.getTasksView = (request, response) => {
  const tasks = Tasks.getAll();

  response.render("home.ejs", {
    headTitle: "Home - All Tasks",
    path: "/",
    activeLinkPath: "/",
    tasks,
    menuLinks: MENU_LINKS,
  });
};