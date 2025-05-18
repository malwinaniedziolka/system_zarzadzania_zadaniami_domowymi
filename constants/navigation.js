const HOME_LINK = {
  label: "All Tasks",
  path: "/",
};

const MENU_LINKS = [
  HOME_LINK,
  { label: "Add Task", path: "/add" },
  { label: "Upcoming Tasks", path: "/upcoming" },
  { label: "Completed Tasks", path: "/completed" },
  { label: "Past due Tasks", path: "/pastdue" },
];

module.exports = {
  MENU_LINKS,
};
