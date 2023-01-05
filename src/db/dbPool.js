const mysql = require('mysql');
const util = require('util');
const {query} = require("express");

const CONFIG = process.env

const pool = mysql.createPool({
    connectionLimit: 15,
    host: CONFIG.DB_HOST,
    user: CONFIG.DB_USER,
    password: CONFIG.DB_PASSWORD,
    database: CONFIG.DB_NAME
})


pool.getConnection((err, connection) => {
    if(err) console.log(err);
    else console.log("Database connected");

})


pool_query = util.promisify(pool.query);

module.exports = pool_query;