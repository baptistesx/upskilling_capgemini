// const server = require("./server.js");
const express = require("express");

const db = require("./db-config.js");
var cors = require("cors");
const router = express.Router();

const server = express();
server.use(cors());
server.use(express.json());

server.get("/", (req, res) => {
  res.send("<h1>Welcome</h1>");
});

server.get("/articles", (req, res) => {
  console.log("/articles");
  db.getArticles().then((articles) => res.send(articles));
});

server.get("/articles/:id", (req, res) => {
  const articleId = req.params.id;
  console.log("articleId", articleId);
  console.log(req.params.id);
  db.getArticle(articleId).then((article) => {
    console.log(article);
    db.getArticleComments(articleId).then((comments) => {
      console.log(comments);
      article[0].comments = comments;
      res.send(article[0]);
    });
  });
});

const port = process.env.PORT || 6868;

server.listen(port, () => {
  console.log("\nserver's working");
});
