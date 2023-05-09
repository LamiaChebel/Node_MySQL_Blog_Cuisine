//importation du module mysql2 et des variables d'environnement
import mysql from "mysql2/promise";

import { DB_HOST, DB_NAME, DB_USER, DB_PWD } from "../config/const.js";


export const pool = mysql.createPool({
    host : DB_HOST,
    database : DB_NAME,
    user : DB_USER,
    password : DB_PWD,
});

pool.getConnection().then(res => console.log(`Connected to your ${res.config.database}`));

