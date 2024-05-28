const mysql = require("mysql2")
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "DBRubik1",
    database: "gymgeniustracks"
})

module.exports = connection;