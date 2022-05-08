// mysql package 
const mysql = require('mysql2'); 

require('dotenv').config();

console.log('DB PASSWORD ', process.env.DB_PW)
console.log('db user ', process.env.DB_USER)

// create connection to database
const db = mysql.createConnection (

    {
        host: 'localhost', 
        user: process.env.DB_PW, 
        database: 'employee_tracker',
    }, 
    console.log('Connected to employee_tracker database!')
)

module.exports = db