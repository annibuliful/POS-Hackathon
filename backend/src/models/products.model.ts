// products-model.js - A KnexJS
//
// See http://knexjs.org/
// for more of what you can do here.
import Knex from "knex";
import { Application } from "../declarations";

export default function (app: Application) {
  const db: Knex = app.get("knexClient");
  const tableName = "products";
  db.schema.hasTable(tableName).then((exists) => {
    if (!exists) {
      db.schema
        .createTable(tableName, (table) => {
          table.increments("id");
          table.string("name");
          table.specificType("images", "TEXT[]");
          table.decimal("price", 8, 2);
          table.string("size");
          table.string("color");
          table.integer("quantity");
        })
        .then(() => console.log(`Created ${tableName} table`))
        .catch((e) => console.error(`Error creating ${tableName} table`, e));
    }
  });

  return db;
}
