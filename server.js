const express = require("express");
const bodyParser = require("body-parser");

const getFileFromAbsolutePath = require("./utils/getFileFromAbsolutePath");
const { PORT } = require("./config");
//dalsze importy

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static(getFileFromAbsolutePath("public")));
app.use(bodyParser.json()); //nwm czy to potrzebuje
app.use(bodyParser.urlencoded({ extended: false })); //parsowanie danych z formularzy

//app.use dalsze

app.listen(PORT);