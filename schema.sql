CREATE database employee_trackerDB;

USE employee_trackerDB;

CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NULL,
  PRIMARY KEY (id)
);

CREATE TABLE role (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30),
  salary DECIMAL,
  department_id INT,
  PRIMARY KEY (id)
);

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id DECIMAL,
  manager_id INT,
  PRIMARY KEY (id)
)

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Eric", "Forman", 1, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Donna", "Pinciotti", 1, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Steven", "Hyde", 2, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Michael", "Kelso", 3, 3);


INSERT INTO role (title, salary, department_id)
VALUES ("Supervisor", 80000, 1);

INSERT INTO role (title, salary, department_id)
VALUES ("Web Developer", 70000, 2);

INSERT INTO role (title, salary, department_id)
VALUES ("Junior Web Dev", 60000, 2);


INSERT INTO department (name)
VALUES ("Management");

INSERT INTO department (name)
VALUES ("Development");