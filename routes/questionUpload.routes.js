const express = require("express");

const routes = express.Router();

const questionController = require("../controllers/questionUpload.controller");

routes.post("/uploadQuestion", questionController.addQuestion);

module.exports = routes;
