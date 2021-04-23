exports.up = function (knex) {
  return knex.schema.createTable("comments", (tbl) => {
    tbl.increments("commentId").primary().unsigned();
    tbl.integer("articleId").notNullable();
    tbl.text("author", 128).notNullable();
    tbl.timestamp("createdAt", { useTz: true }).defaultTo(knex.fn.now());
    tbl.text("body", 128).notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("comments");
};
