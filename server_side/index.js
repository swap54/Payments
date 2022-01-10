const express = require('express');
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    user:"swap",
    host: "localhost",
    password: "password",
    database:"payments",
});

app.post("/register",(req,res)=>{
    const name = req.body.name;
    const username = req.body.username;
    const password = req.body.password;
    db.query(
        "INSERT INTO users (name,username,password) VALUES (?,?,?)",[name,username,password],(err,result)=>{console.log(err)}
    );
});

app.post("/login",(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    db.query(
        "SELECT * FROM users WHERE USERNAME=? AND PASSWORD=?",
        [username,password],
        (err,result) => {
            if(err){
                res.send({err:err})
            } 
            if(result.length>0){
                    res.send(result)
            } else{
                    res.status(401);
                    res.send({ message: "Wrong username/password combination!"})
            }
            
        }
    )
})

app.listen(3001, ()=>{
    console.log("running server");
})