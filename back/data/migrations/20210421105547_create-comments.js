exports.up = function (knex) {
  return knex.schema.createTable("comments", (tbl) => {
    tbl.increments("commentId").primary().unsigned();
    tbl.integer("articleId").notNullable();
    tbl.text("author", 128).notNullable();
    tbl.text("date", 128).notNullable();
    tbl.text("body", 128).notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("comments");
};
