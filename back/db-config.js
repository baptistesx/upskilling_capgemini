const knex = require("knex");
const config = require("./knexfile.js");

const db = knex(config.development);

module.exports = {
  getArticles,
  getArticle,
  getArticleComments,
  addArticle,
  deleteArticle,
  addComment,
};

function getArticles() {
  return db("articles");
}

function getArticle(articleId) {
  //   db("articles")
  //     .select()
  //     .where({ id: articleId })
  //     .then((resp) => console.log(resp));
  return db("articles").select().where({ articleId: articleId });
}
function getArticleComments(articleId) {
  //   db("articles")
  //     .select()
  //     .where({ id: articleId })
  //     .then((resp) => console.log(resp));
  return db("comments").select().where({ articleId: articleId });
}

function addArticle(author, title, subtitle, body) {
  //   db("articles")
  //     .select()
  //     .where({ id: articleId })
  //     .then((resp) => console.log(resp));
  return db("articles")
    .insert({ author: author, title: title, subtitle: subtitle, body: body })
    .then(() => ({ status: 201, message: "Commentaire ajouté" }))
    .catch((err) => ({ status: 400, message: err }));
}

function deleteArticle(articleId) {
  //   db("articles")
  //     .select()
  //     .where({ id: articleId })
  //     .then((resp) => console.log(resp));
  return (
    db("articles")
      .where("articleId", articleId)
      .del()
      // .insert({ author: author, title: title, subtitle: subtitle, body: body })
      .then(() => ({ status: 201, message: "okok" }))
      .catch((err) => ({ status: 400, message: err }))
  );
}

function addComment(articleId, author, commentBody) {
  //   db("articles")
  //     .select()
  //     .where({ id: articleId })
  //     .then((resp) => console.log(resp));
  return db("comments")
    .insert({
      // commentId: 1,
      articleId: articleId,
      author: author,
      // createdAt: "15/03/2021",
      body: commentBody,
    })
    .then(() => ({ status: 201, message: "Commentaire ajouté" }))
    .catch((err) => ({ status: 400, message: err }));
}
