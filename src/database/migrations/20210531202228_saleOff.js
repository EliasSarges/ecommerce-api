exports.up = function (knex) {
  return knex.schema.createTable("saleOff", (table) => {
    table.integer("id").primary();
    table.string("description").notNullable();
    table.string("image").notNullable();
    table.float("price").unique().notNullable();
    table.date("date").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("saleOff");
};
