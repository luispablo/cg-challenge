
const buildAPIRouter = require("./apiRouter");
const express = require("express");
const path = require("path");

const buildApp = function buildApp () {
  
  const apiRouter = buildAPIRouter();
  const app = express();

  app.use(express.json());
  app.use("/api", apiRouter);

  app.use(express.static("public"));
  app.get("*", (req, res) => res.sendFile(path.resolve(__dirname, "../public", "index.html")));

  return app;
};

module.exports = buildApp;
