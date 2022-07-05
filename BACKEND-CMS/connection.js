//3 
// used for creating connection to mysql

const mysql = require("mysql");
require('dotenv').config();

var connection = mysql.createConnection({
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: 'adhirajA@1',
    database: process.env.DB_NAME
});

connection.connect((err)=>{
    if(!err){
        console.log("connected to mysql");
    }
    else {
        console.log("error occured ",err );
    }
});

module.exports = connection; 

