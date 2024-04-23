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


   
    const tasks = req.body.tasks
    const taskdetails = req.body.taskdetails


    let sql = `INSERT INTO Tests ( name,date,subject,class,time,user_id   ) VALUES (?,?,?,?,?,?)`;
    db.query(sql, [taskdetails.quiztitle,formattedDate,taskdetails.subject,taskdetails.class,taskdetails.quiztime,req.body.teacherid], (err, data) => {
    if (err) {
        console.error(err);
        return res.json({ Error: 'Hiba a válaszok beszúrásakor' });
   }
    
    const dolgozatid = data.insertId
    sql = `SELECT * FROM class WHERE ClassName = ?`
    db.query(sql, [taskdetails.class], (err, data) => {
        if (err) {
            console.error(err);
            return res.json({ Error: 'Hiba a válaszok beszúrásakor' });
       }
       
       const classid =data[0].Id
       sql = `SELECT * FROM users WHERE class_Id = ?`
       db.query(sql, [classid], (err, usersdata) => {
        if (err) {
            console.error(err);
            return res.json({ Error: 'Hiba a válaszok beszúrásakor' });
       }
       

       for (let i=0;i<usersdata.length;i++)
       {
        sql = `INSERT INTO usertests ( userID,Testid,Completed, Points) VALUES (?,?,0,0)`;
        db.query(sql, [usersdata[i].id,dolgozatid], (err, usersdata) => {
            if (err) {
                console.error(err);
                return res.json({ Error: 'Hiba a válaszok beszúrásakor' });
           }
        })
       }

       })
       
    })




    for (let i =0;i<tasks.length;i++)
    {
        // feladatok
        
        sql = `INSERT INTO tasks ( text,score,type_id, test_id) VALUES (?,1,?,?)`;
        db.query(sql, [tasks[i].question,tasks[i].questionType,dolgozatid], (err, datatask) => {
        if (err) {
            console.error(err);
            return res.json({ Error: 'Hiba a válaszok beszúrásakor' });
        }
        
        let taskid = datatask.insertId

        //válaszok
        if (tasks[i].questionType ==1)
        {            
            //truefalse
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
            
            
            //multianswer
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
            //oneanswer
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



  

app.post('/receiveuncompletedtests', (req, res) => {
    const sql = 'SELECT * FROM usertests WHERE UserID = ? and Completed = 0';
    db.query(sql, [req.body.useruniqueid], (err, data) => {
        if (err) {
            console.error(err);
            return res.json({ Error: 'Hiba a válaszok beszúrásakor' });
        }
        return res.json(data)

    
    })
})


app.post('/receiveuncompletedtestsoriginal', (req, res) => {
    const sql = 'SELECT * FROM tests WHERE id = ? ';
    db.query(sql, [req.body.testid], (err, data) => {
        if (err) {
            console.error(err);
            return res.json({ Error: 'Hiba a válaszok beszúrásakor' });
        }
        return res.json(data)

    
    })
})


app.post('/receivetestswriting', (req, res) => {
    const sql = 'SELECT * FROM tasks WHERE Test_id = ?';
    db.query(sql, [req.body.id], (err, data) => {
        
        return res.json(data)

    
    })
})

app.post('/receivetestwritinginformation', (req, res) => {
    const sql = 'SELECT * FROM tests WHERE id = ?';
    db.query(sql, [req.body.id], (err, data) => {
        if (err) {
            console.error(err);
            return res.json({ Error: 'Hiba a válaszok beszúrásakor' });
        }
        return res.json(data)

    
    })
})



app.post('/receivetestanswerswriting', (req, res) => {
    const sql = 'SELECT * FROM answers WHERE Task_id = ?';
    db.query(sql, [req.body.taskid], (err, data) => {
        
        return res.json(data)

    
    })
})


app.post('/senduseranswers', (req, res) => {
    let answerslength = req.body.answers.length
    for (let i=0;i<answerslength;i++ )
    {
        sql = `INSERT INTO useranswer ( UserTestId,AnswerId, TaskId) VALUES (?,?,?)`;
        db.query(sql, [req.body.answers[i].UserTestId,req.body.answers[i].AnswerId,req.body.answers[i].TaskId], (err, data) => {
        if (err) {
            console.error(err);
            return res.json({ Error: 'Hiba a válaszok beszúrásakor' });
        }})
    
        
        
    }

    sql = ` UPDATE usertests SET Completed = 1  WHERE id = ?`;
    db.query(sql, [req.body.usertestid], (err, data) => {
        if (err) {
            console.error(err);
            return res.json({ Error: 'Hiba a válaszok beszúrásakor' });
        }})

    
})

app.post('/classes', (req, res) => {
    const sql = 'SELECT ClassName FROM class';
    db.query(sql, [], (err, data) => {
        
        return res.json(data)

    
    })
})


app.post('/teacherusertests', (req, res) => {
    const sql = 'SELECT UserID,TestId,id FROM usertests WHERE Completed = 1';
    db.query(sql, [], (err, data) => {
        
        return res.json(data)

    
    })
})


app.post('/teachertests', (req, res) => {
    const sql = 'SELECT Name FROM tests WHERE id=? AND class = ? AND Subject = ? AND User_Id = ?';
    db.query(sql, [req.body.userTestId, req.body.selectedClass, req.body.selectedSubject, req.body.creatorid], (err, data) => {
        if (err) {
            console.error(err);
            return res.json({ Error: 'Hiba a válaszok beszúrásakor' });
        }
        return res.json(data)
        

    
    })
})

app.post('/usernames', (req, res) => {
    const sql = 'SELECT Username FROM users WHERE id = ?';
    db.query(sql, [req.body.UserId], (err, data) => {
        
        return res.json(data)

    
    })
})


app.post('/receivecompletedtests', (req, res) => {
    const sql = 'SELECT * FROM usertests WHERE UserID = ? and Completed = 1';
    db.query(sql, [req.body.useruniqueid], (err, data) => {
        if (err) {
            console.error(err);
            return res.json({ Error: 'Hiba a válaszok beszúrásakor' });
        }
        return res.json(data)

    
    })
})


app.post('/receivecompletedtestsoriginal', (req, res) => {
    const sql = 'SELECT * FROM tests WHERE id = ? ';
    db.query(sql, [req.body.testid], (err, data) => {
        
        return res.json(data)

    
    })
})


app.post('/testresulttasks', (req, res) => {
    const sql = 'SELECT * FROM tasks WHERE Test_id = ? ';
    db.query(sql, [req.body.id], (err, data) => {
        if (err) {
            console.error(err);
            return res.json({ Error: 'Hiba a válaszok beszúrásakor' });
        }
        return res.json(data)

    
    })
})

app.post('/receivetestanswersresult', (req, res) => {
    const sql = 'SELECT * FROM answers WHERE Task_id = ?';
    db.query(sql, [req.body.taskid], (err, data) => {
        
        return res.json(data)

    
    })
})


app.post('/receivetestuseranswersresult', (req, res) => {
    const sql = 'SELECT * FROM useranswer WHERE TaskId = ? ';
    db.query(sql, [req.body.taskid], (err, data) => {
        if (err) {
            console.error(err);
            return res.json({ Error: 'Hiba a válaszok beszúrásakor' });
        }
        return res.json(data)

    
    })
})


app.post('/testresulttesname', (req, res) => {
    const sql = 'SELECT Name FROM tests WHERE id = ? ';
    db.query(sql, [req.body.id], (err, data) => {
        if (err) {
            console.error(err);
            return res.json({ Error: 'Hiba a válaszok beszúrásakor' });
        }
        return res.json(data)

    
    })
})

app.post('/addclass', (req, res) => {
    const sql = `INSERT INTO class ( ClassName) VALUES (?)`;
    db.query(sql, [req.body.classname], (err, data) => {
        if (err) {
            console.error(err);
            return res.json({ Error: 'Hiba a válaszok beszúrásakor' });
        }
        return res.json(data)

    
    })
})


app.post('/deleteclass', (req, res) => {
    db.query('SET FOREIGN_KEY_CHECKS = 0', (error, results) => {
        if (error) {
            console.error(error);
            return res.json({ Error: 'Error disabling foreign key checks' });
        }

        const sql = "DELETE FROM class WHERE ClassName = ?";
        db.query(sql, [req.body.classname], (err, data) => {
            console.log(req.body.classname)
            if (err) {
                console.error(err);
                return res.json({ Error: 'Error deleting class' });
            }
            
            // Set foreign key checks back to 1
            db.query('SET FOREIGN_KEY_CHECKS = 1', (fkError, fkResults) => {
                if (fkError) {
                    console.error(fkError);
                    return res.json({ Error: 'Error enabling foreign key checks' });
                }
                
                return res.json(data);
            });
        });
    });
});

app.post('/adminusers', (req, res) => {
    const sql = 'SELECT * FROM users';
    db.query(sql, [], (err, data) => {
        
        return res.json(data)

    
    })
})

app.post('/adminuserdeactivation', (req, res) => {
    const sql = ` UPDATE users SET Enable = 0  WHERE id = ?` ;
    db.query(sql, [req.body.id], (err, data) => {
        
        return res.json(data)

    
    })
})

app.post('/adminuseractivation', (req, res) => {
    const sql = ` UPDATE users SET Enable = 1  WHERE id = ?` ;
    db.query(sql, [req.body.id], (err, data) => {
        
        return res.json(data)

    
    })
})

app.post('/newuser', (req, res) => {
    const plainTextPassword = req.body.password;
    let hashedpassword ="";
    bcrypt.hash(plainTextPassword, salt, function(err, hash) {
        if (err) {
            console.log("Error in hash")
        } else {
            
            hashedpassword = hash
            
            const sql = `INSERT INTO users ( Username,Password,class_Id,Enable,Email,Role_Id ) VALUES (?,?,?,?,?,?)`;
            db.query(sql, [req.body.username,hashedpassword,req.body.classid,req.body.enable,req.body.email,req.body.roleid], (err, data) => {
                if (err) {
                    console.error(err);
                    return res.json({ Error: 'Hiba a válaszok beszúrásakor' });
                }


                return res.json(data)

    
    })
        
        }
});
    
})


app.post('/changepassword', (req, res) => {
    const plainTextPassword = req.body.password;
    let hashedpassword ="";
    bcrypt.hash(plainTextPassword, salt, function(err, hash) {
        if (err) {
            console.log("Error in hash")
        } else {
            
            hashedpassword = hash
            
            const sql = ` UPDATE users SET Password = ?  WHERE id = ?` ;
            db.query(sql, [hashedpassword,req.body.userid], (err, data) => {
                if (err) {
                    console.error(err);
                    return res.json({ Error: 'Hiba a válaszok beszúrásakor' });
                }


                return res.json(data)

    
    })
        
        }
});
    
})

app.post('/changeclass', (req, res) => {
    const sql = ` UPDATE users SET class_Id = ?  WHERE id = ?` ;
    db.query(sql, [req.body.class,req.body.userid], (err, data) => {
        if (err) {
            console.error(err);
            return res.json({ Error: 'Hiba a válaszok beszúrásakor' });
        }
        return res.json(data)
        
    
    })
})

app.post('/changeemail', (req, res) => {
    const sql = ` UPDATE users SET Email = ?  WHERE id = ?` ;
    db.query(sql, [req.body.email,req.body.userid], (err, data) => {
        if (err) {
            console.error(err);
            return res.json({ Error: 'Hiba a válaszok beszúrásakor' });
        }
        return res.json(data)

    
    })
})
  

app.post('/receiveusername', (req, res) => {
    const sql = 'SELECT Username FROM users WHERE id=?';
    db.query(sql, [req.body.realuserid], (err, data) => {
        
        return res.json(data)

    
    })
})

app.post('/profiledetails', (req, res) => {
    const sql = 'SELECT Username,class_Id,Email,Role_Id FROM users WHERE id=?';
    db.query(sql, [req.body.id], (err, data) => {
        
        return res.json(data)

    
    })
})


app.post('/profileclass', (req, res) => {
    const sql = 'SELECT ClassName FROM class WHERE id=?';
    db.query(sql, [req.body.classid], (err, data) => {
        
        return res.json(data)

    
    })
})

app.post('/profilerole', (req, res) => {
    const sql = 'SELECT Name FROM role WHERE id=?';
    db.query(sql, [req.body.roleid], (err, data) => {
        
        return res.json(data)

    
    })
})

app.listen(8081, () => {
    console.log("Listening...");
})



