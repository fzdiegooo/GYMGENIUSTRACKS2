const mysql = require("mysql2")
const connection = mysql.createConnection({
    host: "localhost",
    user: "Diego",
    password: "DBRubik1",
    database: "gymgeniustracks"
})

module.exports = connection;