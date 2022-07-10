const mysql =require('mysql2');


// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        // Your MySQL password
        password: '',
        database: 'election'
    });

    module.exports = db;