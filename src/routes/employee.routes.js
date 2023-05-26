import { Router }  from "express";

import {
    createEmployee,
    deleteEmployee,
    getEmployees,
    getEmployee,
    updateEmployee,

} from "../controllers/employee.controller.js";

const router = Router();

//GET all Employees
router.get("/employees", getEmployees);

//GET An Employee by Id
router.get("/employees/:id", getEmployee);

//DELETE an Employee
router.delete("/employees/:id", deleteEmployee);

//INSERT An Employee
router.post("/employees", createEmployee);

//UPDATE An Employee
router.patch("/employees/:id", updateEmployee);


export default router;
