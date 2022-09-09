let mysql = require('mysql')
let conn = mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"",

    }
)
conn.connect(function(err){
    if(err)throw err
    console.log ("Connection is successful")
    conn.query("CREATE DATABASE LIBRARY", function (err,result){
        if (err)throw err
        console.log ("LIBRARY is online")
    })
})