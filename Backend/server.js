const express = require('express'); 
const mysql = require('mysql'); 
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
     host: "localhost",
    user: "root",
    password: "" ,
    database: "szakdoga"
})

app.post('/users', (req, res) => {
    const sql = "SELECT * FROM users WHERE Username = ? AND Password = ?";
     
    db.query(sql, [req.body.username,  req.body.password], (err, data) => {
         if(err) return res.json("Login Failed"); 
         if(data.length > 0 ) {
            console.log(data)
         return res.json("Login Successfully")
         } else {
         return res.json("No Rec")
         }

         })
    })  
app.listen(8081, () => {
    console.log("Listening...");
})
