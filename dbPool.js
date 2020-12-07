const mysql = require('mysql');

const pool  = mysql.createPool({
    connectionLimit: 10,
    host: "ijj1btjwrd3b7932.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "atl9gh0n9ibhuu5p",
    password: "csbxzy852g3cvkyn",
    database: "f51qdfp6h2j59rfu"
});

module.exports = pool;