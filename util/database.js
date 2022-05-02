import { Pool } from "pg";

var db;

if (!db){
  db = new Pool({
        host: "localhost",
        user: "postgres",
        password: "Blanco2021",
        database: "postgres",
        port: "5432"
    })
}

export default db;