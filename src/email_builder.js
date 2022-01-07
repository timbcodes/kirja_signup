// Require our modules
const mysql = require("mysql");

// DB connection configuration
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "$mokeyJoe86",
    database: "DevelopmentDB",
});

const dbConnect = (val) => {
    connection.connect();
    connection.query(
            `INSERT INTO developmentdb.emailadd (email) VALUES ('${val}');`
        ),
        (error, results, fields) => {
            if (error) throw error;
        };
    connection.end();
};

module.exports = dbConnect;