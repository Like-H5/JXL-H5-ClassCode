const mysql = require("mysql");

let pool  = mysql.createPool({
    connectionLimit : 10,
    host            : 'localhost',
    user            : 'root',
    password        : 'itlike',
    database        : 'itlike_lxt'
});

function execSQL(sqlTemp,values=[], successCB, failCB) {
    return new Promise((resolve, reject) => {
        pool.query(sqlTemp, values, function (error, results, fields) {
            if (error) {
                if (typeof failCB === "function") {
                    failCB(error);
                }
                reject(error)
            } else {
                if (typeof successCB === "function") {
                    successCB(results);
                }
                resolve(results)
            }
        });
    })
}

module.exports = {
    execSQL
}