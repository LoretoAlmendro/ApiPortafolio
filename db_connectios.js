/* import pg from "pg";
const { Pool } = pg; */
import dotenv from "dotenv";
import { Sequelize } from "sequelize";
dotenv.config();



/* const pool = new Pool({
    user: "postgres",
    host: "db.vuuyricpkrwfpcyppnfu.supabase.co",
    database: "postgres",
    password: process.env.SUPABASE_PASS,
    port: 5432,
    ssl: { rejectUnauthorized: false },
    max: 20,
    idleTimeoutMillis: 5000,
    connectionTimeoutMillis: 2000,
}); */

//Crear conexión
const sequelize = new Sequelize("postgres", "postgres", process.env.SUPABASE_PASS, {
    host: "db.vuuyricpkrwfpcyppnfu.supabase.co",
    dialect: "postgres",
});

export { sequelize };