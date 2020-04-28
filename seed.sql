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