import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise();

export async function getAdventures() {
    const [rows] = await pool.query("SELECT * FROM adventures");
    return rows;
}

async function getAdventure(id) {
    const [rows] = await pool.query(
        "SELECT * FROM adventures WHERE id = ?",
        [id]
    );

    return rows[0];
}

async function createAdventure(name, bla) {
    const [result] = await pool.query(`
        INSERT INTO adventures (name, bla)
        VALUES (?, ?)
    `, [name, bla]);

    if (result.insertId)
    {
        return await getAdventure(result.insertId);
    }
}
