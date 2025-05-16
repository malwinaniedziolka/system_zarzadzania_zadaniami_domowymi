const Tasks = require("../models/TasksModel");

const { STATUS_CODE } = require("../constants/statusCode");

exports.getTasksView = (request, response) => {
  const tasks = Tasks.getAll();

  response.render("home.ejs", {
    headTitle: "Home - Tasks",
    path: "/",
    activeLinkPath: "/",
    tasks,
  });
};