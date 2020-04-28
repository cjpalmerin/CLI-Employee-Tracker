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

                case "VIEW employee":
                    viewEmployee();
                    break;

                case "VIEW role":
                    viewRole();
                    break;

                case "VIEW department":
                    viewDepartment();
                    break;

                case "UPDATE employee roles":
                    updateEmployeeRoles();
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
            console.table(res)
            startApp();
    })
    })
}