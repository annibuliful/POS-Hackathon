// customers-model.js - A KnexJS
//
// See http://knexjs.org/
// for more of what you can do here.
import Knex from "knex";
import { Application } from "../declarations";

export default function (app: Application) {
  const db: Knex = app.get("knexClient");
  const tableName = "customers";
  db.schema.hasTable(tableName).then((exists) => {
    if (!exists) {
      db.schema
        .createTable(tableName, (table) => {
          table.increments("id");
          table.string("fullname").notNullable();
          table.date("birth_date").notNullable();
          table.string("address");
          table.string("sub_district");
          table.string("district");
          table.string("province");
          table.string("zipcode");
          table.string("country");
        })
        .then(() => console.log(`Created ${tableName} table`))
        .catch((e) => console.error(`Error creating ${tableName} table`, e));
    }
  });

  return db;
}
