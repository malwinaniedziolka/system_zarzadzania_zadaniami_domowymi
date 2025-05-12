//const cartController = require("./cartController");
//tu jakis inny kontroler potrzebny nwm

exports.getHomeView = (request, response) => {
  response.render("home.ejs", {
    headTitle: "Home - Tasks",
    //path: "/",
    //activeLinkPath: "/",
  });
};