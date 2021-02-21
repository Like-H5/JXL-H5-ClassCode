const mysql = require("mysql");

// let connection = mysql.createConnection({
//     host: 'localhost',
//     port: 3306,
//     user: 'root',
//     password: 'itlike',
//     database: 'itlike_lxt'
// });
//
// connection.connect();
// connection.query('select * from t_nav;', function (error, results, fields) {
//     console.log(error, results, fields);
// });
// connection.end();



let pool  = mysql.createPool({
    connectionLimit : 10,
    host            : 'localhost',
    user            : 'root',
    password        : 'itlike',
    database        : 'itlike_lxt'
});


// let account = "admin";
// let pwd = "itlike";
//
// account = pool.escape(account);
// pwd = pool.escape(pwd);
// console.log(account, pwd)
//
// pool.query(`select * from t_user where account=${account} and password=${pwd}`, function (error, results, fields) {
//     if (error) {
//         console.log(error)
//     } else {
//       console.log(results)
//     }
// });


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
let account = "admin";
let pwd = "' or '1'='1";
execSQL(`select * from t_user where account=? and password=?`, [account, pwd]).then(result=>{
    console.log(result)
})



// function execSQL(sql, successCB, failCB) {
//     return new Promise((resolve, reject) => {
//         pool.query(sql, function (error, results, fields) {
//             if (error) {
//                 if (typeof failCB === "function") {
//                     failCB(error);
//                 }
//                 reject(error)
//             } else {
//                 if (typeof successCB === "function") {
//                     successCB(results);
//                 }
//                 resolve(results)
//             }
//         });
//     })
// }



/// 模拟 sql 注入式攻击
// let account = "admin_sz";
// let pwd = "' or '1'='1";

// `select * from t_user where account='admin_sz' and password='' or '1'='1'`

// execSQL(`select * from t_user where account='${account}' and password='${pwd}'`).then(result=>{
//     // console.log(result)
//     if (result.length > 0) {
//         console.log("登录成功", result[0])
//     }else {
//         console.log("登录失败")
//     }
// })


// execSQL("select * from t_nav").then(result=>{
//     console.log(result)
// })

// execSQL("select * from t_news", result=>{
//     console.log(result)
// })


// function execSQL(sql) {
//    return new Promise((resolve, reject) => {
//        pool.query(sql, function (error, results, fields) {
//            if (error) {
//                 reject(error)
//            } else {
//                resolve(results)
//            }
//        });
//    })
// }
//
// function execSQL_cb(sql, successCB, failCB) {
//     pool.query(sql, function (error, results) {
//         if (error) {
//             failCB(error)
//         } else {
//             successCB(results)
//         }
//     });
// }

// execSQL_cb("select * from t_nav;", (result)=>{
//     console.log(result)
// }, (error) => {
//     console.log("失败", error)
// })


// execSQL("select * from t_nav2;").then(result=>{
//     console.log("正确的结果: ", result);
// }).catch(error=>{
//     console.log("错误: ", error)
// })