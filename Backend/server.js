const express = require('express'); 
const mysql = require('mysql'); 
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const salt = 10;


const app = express();
app.use(express.json());
app.use(cors());
    
app.use(cookieParser());




const db = mysql.createConnection({
     host: "localhost",
    user: "root",
    password: "" ,
    database: "szakdoga"
})

/**
const plainTextPassword = 'tanár';
bcrypt.hash(plainTextPassword, salt, function(err, hash) {
    if (err) {
        // Handle error
    } else {
        // Store the hash in the database
        
       
    }
});
*/

app.post('/users', (req, res) => {
    const sql = 'SELECT * FROM users WHERE Username = ?';
    db.query(sql, [req.body.username], (err, data) => {
        console.log(data)
        if (err) return res.json({Error: "Bejelentkezési hiba a szerveren"});
        if(data.length > 0) {
            
            
            bcrypt.compare(req.body.password.toString(), data[0].Password, (err, response) => { 
                if(err) return res.json({Error: "Jelszó összehasonlítási hiba"});
                if (response)
                 { 
                        const name = data[0].Username;
                        
                        const token = jwt.sign({name}, "jwt-secret-key", {expiresIn: 84600});
                        res.cookie('token', token);
                        return res.json({Status: "Sikeres bejelentkezés"});
                } else {
                    return res.json({Error: "Hibás Felhasználó vagy Jelszó"});
                }
            })
        } else {
        return res.json({Error: "Hibás Felhasználó vagy Jelszó"});
        }})

    
    })
    
    

    
app.listen(8081, () => {
    console.log("Listening...");
})



