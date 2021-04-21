const knex = require("knex");
const config = require("./knexfile.js");

const db = knex(config.development);

module.exports = { getArticles, getArticle, getArticleComments };

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
