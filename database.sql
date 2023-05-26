--CREATE DATABASE IF NOT EXISTS miApi;

--USE miApi;


--QUERY CREATE TABLE
CREATE TABLE employee (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    salary INT(11) DEFAULT NULL,
    PRIMARY KEY (id)
);

--QUERY INSERT TABLE 
INSERT INTO employee (name, salary) VALUES 
('William Valiente', 2000),
('Jefry Gudiel', 3000),
('Cirilo Ortiz', 5000);

--QUERY CREATE STORE PROCEDURE
CREATE DEFINER=`root`@`localhost` PROCEDURE `employeeAddOrEdit`(
    IN _id INT,
    IN _name VARCHAR(50),
    IN _salary INT
)
BEGIN
    IF _id= 0 THEN
        INSERT INTO employee(name, salary) VALUES (_name, _salary);
        SET _id = LAST_INSERT_ID();
    ELSE
        UPDATE employee SET name = _name, salary = _salary WHERE id = _id;
    END IF;

    SELECT _id AS 'id';
END

--QUERY CALL STORE PROCEDURE
call miApi.employeeAddOrEdit(0,'Jefry Aroche', 500);

call miApi.employeeAddOrEdit(4,'Jefry Aroche', 1500);

--TAREA ES USAR EL STORE PROCEDURE EN EL API


