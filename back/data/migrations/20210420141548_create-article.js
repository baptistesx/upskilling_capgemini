exports.up = function (knex) {
  return knex.schema.createTable("articles", (tbl) => {
    tbl.increments("articleId").primary().unsigned();
    tbl.text("date", 128).notNullable();
    tbl.text("title", 128).notNullable();
    tbl.text("subTitle", 128).notNullable();
    tbl.text("body", 128).notNullable();
    tbl.text("author", 128).notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("articles");
};
