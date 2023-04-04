const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'root123',
    database: 'employersystem_test'
});

db.connect(function(err){
    if(err){
        console.log(err)
    }else{
        console.log("Data Base conected")
    }
})

app.post('/create', (req, res) => {
    const name = req.body.name
    const age = req.body.age
    const country = req.body.country
    const pozition = req.body.pozition
    const wage = req.body.wage

    db.query('INSERT INTO employees (name, age, country, pozition, wage) VALUES(?,?,?,?,?)', 
    [name,age,country,pozition,wage], (err, result) => {
        if (err){
            console.log(err)
        }else{
            res.send("Values Inserted")
        }
    })
})

app.get('/list', (req, res) =>{
    db.query("SELECT *FROM employees", (err, result) => {
        if(err){
            console.log(err)
        }else{
            res.send(result)
        }
    })
})

app.listen(3001, () =>{
    console.log("Server conected")
})