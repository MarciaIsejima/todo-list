const mysql = require('promise-mysql')

require("dotenv").load();

const config = {
    host: process.env.DBHOST,
    port: process.env.DBPORT,
    user: process.env.DBUSER,
    password: process.env.DBPASSWORD,
    database: process.env.DBNAME,
    connectionLimit: 100,
};

const pool = mysql.createPool(config);

module.exports = pool