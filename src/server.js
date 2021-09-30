"use strict";

// 3RD PARTY DEPENDENCIES
const express = require("express");

const notFoundHandler = require("./error-handlers/404.js");
const errorHandler = require("./error-handlers/500.js");
const logger = require('./middleware/logger');
const validator = require('./middleware/validator.js')

const app = express();

//Global Middleware
app.use(logger)
app.use(express.json());

// ROUTES

// Get

app.get("/person", validator, (req, res) => {
 let outputObj = {
    name: req.query.name,
 }
 res.status(200).json(outputObj);
});

app.use("*", logger);
app.use("*", notFoundHandler);
app.use(errorHandler);

module.exports = {
  server: app,
  start: port => {
    if (!port) 
      { throw new Error("Missing Port"); }
      app.listen(port, () => console.log(`Listening on ${port}`));
    }
  }




