let mysql = require('mysql')
let conn = mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"",
        database:"LIBRARY"
    }
)
conn.connect(function (err){
    if(err)throw err
    console.log ("CONNECTION IS AVAILABLE")
    let sql = "CREATE TABLE USERS (ID INT(8), NAME VARCHAR(50), Email VARCHAR(30), PASSWORD INT(8))"
    conn.query(sql, function (err,results){
        if(err)throw err
        console.log ("USERS IS ONLINE")
    })
})