import { pool } from "../db.js";

export const index = (req, res) => res.json({ message: "welcome to my api"});

export const ingenieria = async (req, res) => {
    const [result] = await pool.query('SELECT "umg" as result');
    res.json(result[0]);
};