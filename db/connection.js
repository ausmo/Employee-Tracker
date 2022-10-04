const mysql = require("mysql2")
const connection = mysql.createConnection({
    host:"localhost", 
    user:"root",
    password:"",
    database:"employeeTracker_db"
})
connection.connect(function(error){
    console.log(error)
    if (error) throw error;
})
module.exports = connection