const cTable = require('console.table');

//Joining role and employee
function joinAllTables() {
    let query = "SELECT * "
    query += "FROM ((employee "
    query += "INNER JOIN role ON employee.id = role.id)";
    query += "INNER JOIN department ON role.id = department.id)"

    connection.query(query, function(err, res) {
        if(err) throw err;
        console.log(res)
})
}