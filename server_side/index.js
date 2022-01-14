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
    const balance = 1000;
    db.query(
        "INSERT INTO users (name,username,password) VALUES (?,?,?)",[name,username,password],(err,result)=>{console.log(err)}   
    );
    db.query(
        "INSERT INTO balance (username,available_balance) VALUES (?,?)",[username,balance],(err,result)=>{console.log(err)}
    )
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

app.post("/user",(req,res)=>{
    const send = req.body.send;
    const recv = req.body.recv;
    const amount = req.body.amount;
    var num = 0;
    var bal = 0;
    const descr = req.body.descr;
    db.query(
        "SELECT available_balance FROM balance WHERE USERNAME=?",[send],(err,result)=>{
            if(result[0].available_balance>amount){
                bal=result[0].available_balance-amount;
                console.log(bal);
                db.query(
                    "INSERT INTO transaction (send_username, recv_username, amount, description) values (?,?,?,?)",[send,recv,amount,descr],(err,result)=>{
                        if(err){
                            res.send({err:err})
                        }
                        else{
                            res.send({message:"Transaction successful!"})
                        }
                    }
                );
                db.query(
                    "UPDATE balance SET available_balance=? where username=?",[bal,send],(err,result)=>{
                        if(err){
                            console.log(err)
                        }
                        else{
                            console.log("Updated")
                        }
                    }
                )
                db.query(
                    "SELECT available_balance FROM balance WHERE USERNAME=?",[recv],(err,result)=>{
                        num=parseInt(amount)+parseInt(result[0].available_balance);
                        console.log(num);
                        db.query(

                            "UPDATE balance SET available_balance=? where username=?",[num,recv],(err,result)=>{
                                if(err){
                                    console.log(err)
                                }
                                else{
                                    console.log("Updated!")
                                }
                            }
                        )
                    }
                    
                )
                
            }
            else{
                res.send({message:"Not enough balance"});
            }
        }
    );
});

app.post("/repay",(req,res)=>{
    const sender = req.body.sender;
    const receiver = req.body.receiver;
    const amnt = req.body.amnt;
    const msg = req.body.msg;
    db.query(
        "INSERT INTO notifications (send_username, recv_username, amount, message) values (?,?,?,?)",[sender,receiver,amnt,msg],
        (err,result)=>{
            if(err){
                res.send({err:err})
            }
            else{
                res.send({message:"Notified successfully!"})
            }
        }
    );
});

app.post("/expend",(req,res)=>{
    const send = req.body.send;
    db.query(
        "SELECT SUM(AMOUNT) AS TOTAL FROM transaction WHERE SEND_USERNAME=?",[send],
        (err,result)=>{
            if(err){
                res.send({err:err})
            }
            else{
                res.send(result)
            }
            
        }
    );
});

app.post("/notify", (req,res)=>{
    const send = req.body.send;
    db.query(
        "SELECT * FROM notifications WHERE recv_username=?",[send],
        (err,result)=>{
            if(err){
                res.send({message:"ERROR"})
            }
            else{
                res.send(result)
            }
        }
    );
});

app.post("/balance",(req,res)=>{
    const send = req.body.send;
    db.query(
        "SELECT available_balance FROM balance WHERE username=?",[send],
        (err,result)=>{
            if(err){
                res.send({message:"ERROR"})
            }
            else{
                res.send(result)
            }
        }
    )
})

app.post("/adminlogin",(req,res)=>{
    const password = req.body.password;
    db.query(
        "SELECT * FROM admin WHERE password=?",[password],
        (err,result)=>{
            if(err){
                res.send({message:"ERROR"})
            }
            else{
                res.send(result)
            }
        }
    )
})

app.post("/admuser",(req,res)=>{
    db.query(
        "SELECT * FROM users;",(err,result)=>{
            if(err){
                res.send({message:"ERROR"})
            }
            else{
                res.send(result)
            }
        }
    )
})
app.post("/admtran",(req,res)=>{
    db.query(
        "SELECT * FROM transaction;",(err,result)=>{
            if(err){
                res.send({message:"ERROR"})
            }
            else{
                res.send(result)
            }
        }
    )
})

app.listen(3001, ()=>{
    console.log("running server");
})