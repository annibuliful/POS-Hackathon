// order-details-model.js - A KnexJS
//
// See http://knexjs.org/
// for more of what you can do here.
import Knex from "knex";
import { Application } from "../declarations";

export default function (app: Application) {
  const db: Knex = app.get("knexClient");
  const tableName = "order_details";
  db.schema.hasTable(tableName).then((exists) => {
    if (!exists) {
      db.schema
        .createTable(tableName, (table) => {
          table.increments("id").primary();
          table
            .integer("product_id")
            .references("id")
            .inTable("products")
            .notNullable()
            .onDelete("cascade");
          table.decimal("price", 8, 2);
        })
        .then(() => console.log(`Created ${tableName} table`))
        .catch((e) => console.error(`Error creating ${tableName} table`, e));
    }
  });

  return db;
}
