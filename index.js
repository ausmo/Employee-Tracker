const mysql = require('mysql2/promise');
let inquirer = require("inquirer")

let connection

initialize()
main();


async function initialize(){
    connection = await mysql.createConnection({host:'localhost', user: 'root', database: ''})

}
