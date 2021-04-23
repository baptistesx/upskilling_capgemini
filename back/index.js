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

server.post("/articles", (req, res) => {
  const reqBody = req.body;
  const title = reqBody.title;
  const author = reqBody.author;
  const subtitle = reqBody.subtitle;
  const body = reqBody.body;

  console.log("title", title);
  console.log("author", body);
  console.log("subtitle", subtitle);
  console.log("body", body);

  // res.send("ok");
  db.addArticle(author, title, subtitle, body).then((_) => {
    res.send("ok");
  });
});

server.delete("/articles/:articleId", (req, res) => {
  console.log("delete ", req.params.articleId);
  const articleId = req.params.articleId;

  db.deleteArticle(articleId).then((_) => {
    res.send("okkk");
  });
});

server.post("/articles/:articleId/comment", (req, res) => {
  const articleId = req.params.articleId;
  const reqBody = req.body;
  const author = reqBody.author;
  const commentBody = reqBody.comment;

  console.log("articleId", articleId);
  console.log("author", author);
  console.log("commentBody", commentBody);

  // res.send("ok");
  db.addComment(articleId, author, commentBody).then((_) => {
    res.send("ok");
  });
});

const port = process.env.PORT || 6868;

server.listen(port, () => {
  console.log("\nserver's working");
});
