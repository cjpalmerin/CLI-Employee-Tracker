var mysql = require("mysql");
var inquirer = require("inquirer");
const cTable = require('console.table');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "rootroot",
    database: "employee_trackerDB"
});

connection.connect(function (err) {
    if (err) throw err;
});

console.log("==========================================================")
console.log("========== WELCOME TO THE CLI EMPLOYEE TRACKER! ==========")
console.log("==========================================================")

startApp();

function startApp() {
    inquirer
        .prompt({
            name: "action",
            type: "list",
            message: "What would you like to do?",
            choices: [
                "ADD department",
                "ADD role",
                "ADD employee",
                "VIEW departments",
                "VIEW roles",
                "VIEW employees",
                "UPDATE employee role",
                "DELETE employee",
                "DELETE role",
                "DELETE department",
                "EXIT"
            ]
        })
        .then(function (answer) {
            switch (answer.action) {
                case "ADD employee":
                    addEmployee();
                    break;

                case "ADD role":
                    addRole();
                    break;

                case "ADD department":
                    console.log("You chose ADD DEPARTMENT")
                    addDepartment();
                    break;

                case "VIEW employees":
                    viewEmployee();
                    break;

                case "VIEW roles":
                    viewRole();
                    break;

                case "VIEW departments":
                    viewDepartment();
                    break;

                case "UPDATE employee role":
                    updateEmployeeRole();
                    break;

                case "DELETE employee":
                    deleteEmployee();
                    break;

                case "DELETE role":
                    deleteRole();
                    break;

                case "DELETE department":
                    deleteDepartment();
                    break;

                case "EXIT":
                    connection.end();
                    break;
            }
        });
}

function addDepartment() {
    inquirer.prompt({   
        type: "input",
        message: "What is the department name?",
        name: "deptName"

    }).then(function(answer){
        connection.query("INSERT INTO department (name) VALUES (?)", [answer.deptName] , function(err, res) {
            if (err) throw err;
            console.log("==============================================================")
            console.log("========== " + answer.deptName + " department added! ==========")
            console.log("==============================================================")
            startApp();
    })
    })
}

function addRole() {
    inquirer
      .prompt([
        {
          type: "input",
          message: "What's the role title?",
          name: "roleName"
        },
        {
          type: "input",
          message: "What is the salary?",
          name: "roleSalary"
        },
        {
          type: "input",
          message: "What is the department ID number?",
          name: "deptID"
        }
      ])
      .then(function(answer) {
        connection.query("INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)", [answer.roleName, answer.roleSalary, answer.deptID], function(err, res) {
          if (err) throw err;
          console.log("=============================================================")
          console.log("========== " + answer.roleName + " added to roles! ==========")
          console.log("=============================================================")
          startApp();
        });
      });
}

function addEmployee() {
    inquirer
      .prompt([
        {
          type: "input",
          message: "What's their first name?",
          name: "first_name"
        },
        {
          type: "input",
          message: "What's their last name?",
          name: "last_name"
        },
        {
          type: "input",
          message: "What is their role ID number?",
          name: "role_id"
        }
      ])
      .then(function(answer) {
        connection.query("INSERT INTO employee (first_name, last_name, role_id) VALUES (?, ?, ?)", [answer.first_name, answer.last_name, answer.role_id], function(err, res) {
          if (err) throw err;
          console.log("===================================================================================")
          console.log("==================== " + answer.first_name + " " + answer.last_name + " added! ====================")
          console.log("===================================================================================")
          startApp();
        });
      });
}


function viewDepartment() {
    connection.query("SELECT * FROM department", function(err, res) {
        if (err) throw err;
        console.log("==============================================================")
        console.table(res);
        console.log("==============================================================")
        startApp();
      });
}


function viewRole() {
    connection.query("SELECT * FROM role", function(err, res) {
        if (err) throw err;
        console.log("==============================================================")
        console.table(res);
        console.log("==============================================================")
        startApp();
      });
}

function viewEmployee() {
    connection.query("SELECT * FROM employee", function(err, res) {
        if (err) throw err;
        console.log("==============================================================")
        console.table(res);
        console.log("==============================================================")
        startApp();
      });
}

function updateEmployeeRole() {
    inquirer
      .prompt([
        {
          type: "input",
          message: "Please enter the first name of the employee you would like to update.",
          name: "first_name"
        },
        {
          type: "input",
          message: "What is their new role?",
          name: "newRole"
        }
      ])
      .then(function(answer) {
  
        connection.query('UPDATE employee SET role_id=? WHERE first_name= ?',[answer.newRole, answer.first_name],function(err, res) {
          if (err) throw err;
          console.table(res);
          startApp();
        });
      });
  }

function deleteEmployee() {
    inquirer
      .prompt([
        {
          type: "input",
          message: "Please enter the ID number of the employee you would like to delete.",
          name: "employeeID"
        }
      ])
      .then(function(answer) {
    connection.query("DELETE FROM employee WHERE id = ?", [answer.employeeID], function(err, result) {
        if (err) throw err
          console.log("===================================================================================")
          console.log("=============================== Employee  Deleted! ================================")
          console.log("===================================================================================")
          startApp();
        });
      });
}


function deleteRole() {
    inquirer
      .prompt([
        {
          type: "input",
          message: "Please enter the ID number of the role you would like to delete.",
          name: "roleID"
        }
      ])
      .then(function(answer) {
    connection.query("DELETE FROM role WHERE id = ?", [answer.roleID], function(err, result) {
        if (err) throw err
          console.log("===================================================================================")
          console.log("================================= Role Deleted! ===================================")
          console.log("===================================================================================")
          startApp();
        });
      });
}

function deleteDepartment() {
    inquirer
      .prompt([
        {
          type: "input",
          message: "Please enter the ID number of the department you would like to delete.",
          name: "departmentID"
        }
      ])
      .then(function(answer) {
    connection.query("DELETE FROM department WHERE id = ?", [answer.departmentID], function(err, result) {
        if (err) throw err
          console.log("===================================================================================")
          console.log("============================== Department Deleted! ================================")
          console.log("===================================================================================")
          startApp();
        });
      });
}