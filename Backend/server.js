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
                        const id = data[0].id;
                        const roleid = data[0].Role_Id;
                        
                        const token = jwt.sign({id,roleid}, "jwt-secret-key", {expiresIn: 84600});
                        res.cookie('token', token, { httpOnly: true });
                        return res.json({ token });
                } else {
                    return res.json({Error: "Hibás Felhasználó vagy Jelszó"});
                }
            })
        } else {
        return res.json({Error: "Hibás Felhasználó vagy Jelszó"});
        }})

    
    })
    



app.post('/dolgozatok', (req, res) =>{
    const currentDate = new Date();
    const year = currentDate.getFullYear(); // Get the full year (YYYY)
    const month = currentDate.getMonth() + 1; // Get the month (0-11, January is 0)
    const day = currentDate.getDate(); // Get the day of the month (1-31)
    const formattedDate = `${year}.${month < 10 ? '0' : ''}${month}.${day < 10 ? '0' : ''}${day}`;

console.log(formattedDate); 
   
    const tasks = req.body.tasks
    const taskdetails = req.body.taskdetails
    let sql = `INSERT INTO Tests ( name,date,subject,class,time,user_id   ) VALUES (?,?,?,?,?,1)`;
    db.query(sql, [taskdetails.quiztitle,formattedDate,taskdetails.subject,taskdetails.class,taskdetails.quiztime], (err, data) => {
    if (err) {
        console.error(err);
        return res.json({ Error: 'Hiba a válaszok beszúrásakor' });
   }
    
    const dolgozatid = data.insertId
    
    for (let i =0;i<tasks.length;i++)
    {
        // feladatok
        console.log(tasks[i].questionType)
        sql = `INSERT INTO tasks ( text,score,type, test_id) VALUES (?,1,?,?)`;
        db.query(sql, [tasks[i].question,tasks[i].questionType,dolgozatid], (err, datatask) => {
        if (err) {
            console.error(err);
            return res.json({ Error: 'Hiba a válaszok beszúrásakor' });
        }
        
        let taskid = datatask.insertId

        //válaszok
        if (tasks[i].questionType ==1)
        {            
            sql = `INSERT INTO answers ( text,correct, task_id) VALUES ('igaz',${tasks[i].correctanswer  ? 1 : 0},${taskid})`;
            db.query(sql, [req.body.tasks], (err, dataanswer) => {
                if (err) {
                    console.error(err);
                    return res.json({ Error: 'Hiba a válaszok beszúrásakor' });
                }})
            sql = `INSERT INTO answers ( text,correct, task_id) VALUES ('hamis',${tasks[i].correctanswer ? 0 : 1},${taskid})`;
            db.query(sql, [req.body.tasks], (err, dataanswer) => {
                if (err) {
                    console.error(err);
                    return res.json({ Error: 'Hiba a válaszok beszúrásakor' });
                }})
        }
        if (tasks[i].questionType ==2)
        {
            
            for (let j = 0; j<tasks[i].answer.length;j++)
            {
                
                sql = `INSERT INTO answers ( text,correct, task_id) VALUES (?,${tasks[i].correctanswer.includes(j+1) ? 1 : 0},${taskid})`;
                db.query(sql, [tasks[i].answer[j]], (err, dataanswer) => {
                    if (err) {
                        console.error(err);
                        return res.json({ Error: 'Hiba a válaszok beszúrásakor' });
                    }})
            }
            
        }

        if(tasks[i].questionType ==3)
        {
            console.log("asd3")
            for (let j = 0; j<tasks[i].answer.length;j++)
            {
                sql = `INSERT INTO answers ( text,correct, task_id) VALUES (?,${tasks[i].correctanswer == j+1 ? 1 : 0},${taskid})`;
                db.query(sql, [tasks[i].answer[j]], (err, dataanswer) => {
                    if (err) {
                        console.error(err);
                        return res.json({ Error: 'Hiba a válaszok beszúrásakor' });
                    }
                })
            }
        }

    })
        




    }
    return res.json({ Status: 'A válaszok sikeresen beszúrva' });
})
  
})



  













app.listen(8081, () => {
    console.log("Listening...");
})



