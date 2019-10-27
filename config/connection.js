// Set up MySQL connection.
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'burgers_db'
});

// we create a promise so that we can make sure any request waits
// for connection to be connected before running any command.
const connectionPromise = new Promise((resolve, reject) => {
    connection.connect(function(err) {
        if (err) {
            return reject(err);
        }
        resolve(connection);
    });
});

// this function just makes things look nicer, usually we would just
// say `await connectionPromise` instead of `await getConnection()` below
function getConnection() {
    return connectionPromise;
}

module.exports = {
    getConnection
};
