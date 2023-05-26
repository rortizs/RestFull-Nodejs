import { pool } from "../db.js";


//get all employees
export const getEmployees = async (req, res)=> {
    try {
        const [rows] = await pool.query("SELECT * FROM employee");
        res.json(rows);
    } catch (error) {
        return res.status(500).json({ message: "Something goes wrong "});
    }
};

//get employee by id
export const getEmployee = async (req, res) => {
    try {
        const { id } = req.params;
        const {rows} = await pool.query("SELECT * FROM employee WHERE id = ?",
        [id]);

        if (rows.length <=0){
            return res.status(400).json({ message: "The employee does not exists"});
        }
    } catch (error) {
        return res.status(500).json({ message: "Something goes wrong "});
    }
};

//delete employee by id 
export const deleteEmployee = async (req, res) => {
    try {
        const { id } = req.params;
        const [rows] = await pool.query("DELETE FROM employee WHERE id = ?",
        [id]);

        if(rows.affectedRows <=0){
            return res.status(404).json({message: "Employee not found "});
        }
        res.sendStatus(204);

    } catch (error) {
        return res.status(500).json({ message: "Something goes wrong "});
    }
};

//create a new employee
export const createEmployee = async (req, res) => {
    try {
        const { name, salary } = req.body;
        const [rows] = await pool.query(
            "INSERT INTO employee (name, salary) VALUES (?,?)",
            [name, salary]
        );

        res.status(201).json({ id: rows.insertId, name, salary});

    } catch (error) {
        return res.status(500).json({ message: "Something goes wrong "});
    }
};

//update employee by id

export const updateEmployee = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, salary } = req.body;
        const [result] = await pool.query(
            "UPDATE employee SET name = ?, salary = ? WHERE id = ?",
            [name, salary, id]
        );

        if (XPathResult.affectedRows === 0)
        return res.staus(404).json({ message: "Employee not found"});

        const [rows] = await pool.query("SELECT * FROM employee WHERE id = ?",
        [id]);

        res.json(rows[0]);

    } catch (error) {
        return res.status(500).json({ message: "Something goes wrong "});
    }
};

//create employee from call store procedure

