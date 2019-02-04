const express = require("express");
const nunjuks = require("nunjucks");

const app = express();

nunjuks.configure("views", {
  autoescape: true,
  express: app,
  watch: true
});

const logMiddleware = (req, res, next) => {
  console.log(
    `Host ${req.headers.host} | URL: ${req.url} | MEHTOD: ${req.method}`
  );

  req.appName = "GoNode!";
  return next();
};

app.get("/", logMiddleware, (req, res) => {
  return res.end(
    `Bem-vindo ${req.query.name} Welcome to JavaScrit and node.js and ${
      req.appName
    }!`
  );
});

app.get("/nome/:name", (req, res) => {
  return res.end(`Bem-vindo ${req.params.name} Welcome to node.js`);
});

app.get("/node/:name", (req, res) => {
  return res.json({
    message: `Bem-vindo ${req.params.name} Welcome to node.js and JSON`
  });
});

app.listen(3000);
