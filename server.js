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

connection.connect(function(err) {
  if (err) throw err;
  startApp();
});

function startApp() {
    console.log("==========================================================")
    console.log("========== WELCOME TO THE CLI EMPLOYEE TRACKER! ==========")
    console.log("==========================================================")
      
    inquirer
    .prompt({
      name: "action",
      type: "list",
      message: "What would you like to do?",
      choices: [
        "ADD employee",
        "ADD role",
        "ADD department",
        "VIEW employee",
        "VIEW role",
        "VIEW department",
        "UPDATE employee roles"
      ]
    })
    .then(function(answer) {
        switch (answer.action) {
        case "ADD employee":
          addEmployee();
          break;
  
        case "ADD role":
          addRole();
          break;
  
        case "ADD department":
          addDepartment();
          break;
  
        case "VIEW employee":
          addEmployee();
          break;
  
        case "VIEW role":
          addRole();
          break;
  
        case "VIEW department":
          addDepartment();
          break;

        case "UPDATE employee roles":
          addEmployee();
          break;
  
        case "exit":
          connection.end();
          break;
        }
      });
}