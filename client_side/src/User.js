import React, { useState } from "react";
import Nav from "./Nav2";
import Axios from 'axios';
import './user.css';

function User(props){
    const [send,setsend_usr] = useState(props.usr)
    const [recv,setrecv_usr] = useState("")
    const [amount,setAmount] = useState("")
    const [descr,setDescr] = useState("")

    const [sender,setSender] = useState(props.usr)
    const [receiver,setReceiver] = useState("")
    const [amnt,setAmnt] = useState("")
    const [msg,setMsg] = useState("")

    const [expend,setExpend] = useState("")
    const [TOTAL,SETTOTAL] = useState("")

    const [recv_username,setrc] = useState("")
    const [Amount,setAmt] = useState("")
    const [message,setMes] = useState("")
    const [arr,setarr] = useState([])

    const transact = (e) =>{
        //setsend_usr(props.usr);
        Axios.post('http://localhost:3001/user',{send:send,recv:recv,amount:amount,descr:descr}).then((response)=>{
            
            alert(response.data.message);
        });
        /*console.log(recv);
        console.log(amount);
        console.log(descr);
        console.log(send);*/
        e.preventDefault();
    }
    const repay = (e) =>{
        //setSender(props.usr);
        Axios.post('http://localhost:3001/repay',{sender:sender,receiver:receiver,amnt:amnt,msg:msg}).then((response)=>{
            alert(response.data.message);
        })
        console.log(sender);
        console.log(receiver);
        console.log(amnt);
        console.log(msg);
        e.preventDefault();
    }
    const expenditure = (e) =>{
        Axios.post('http://localhost:3001/expend',{send:send}).then((response)=>{
            if(response.data[0].TOTAL===""){
                setExpend(0)
            }
            else{
                setExpend(response.data[0].TOTAL)
            } 
        })
        e.preventDefault();
    }
    const notif = (e) =>{
        Axios.post('http://localhost:3001/notify',{send:send}).then((response)=>{
            if(response.data.message){
                alert(response.data.message)
            } 
            else{
                //setrc(response.data[0].send_username)
                //setAmt(response.data[0].amount)
                //setMes(response.data[0].message)
                setarr(response.data)
            }   
        
        })
        e.preventDefault();
    }
    return(
        <>
            
            <Nav />
            <img className="bg1" />
            <h1 id="welcome">Welcome {props.usr} !</h1>
            <form className="frm1" id="id1" >
                <span>Send</span>
                <div className="container">
                <label className="recusr">Receiver's username</label>
                <input type="text" placeholder="Enter receiver's username" className="inp1" onChange={(e)=>{setrecv_usr(e.target.value)}}/>
                <label className="amount">Amount</label>
                <input type="number" placeholder="Enter the amount" className="inp2" onChange={(e)=>{setAmount(e.target.value)}}/>
                <label className="desc">Description</label>
                <input type="text" placeholder="Description.." className="inp3" onChange={(e)=>{setDescr(e.target.value)}}/>
                <button className="cta1" onClick={transact}>
                    <span>Send</span>
                    <svg width="15px" height="10px" viewBox="0 0 13 10">
                        <path d="M1,5 L11,5"></path>
                        <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                </button>
                </div>
            </form>
            <form className="frm2" id="id2" >
                <span>Remind someone to repay</span>
                <div className="container">
                <label className="recusr">Repayer's username</label>
                <input type="text" placeholder="Enter receiver's username" className="inp1" onChange={(e)=>{setReceiver(e.target.value)}}/>
                <label className="amount">Amount</label>
                <input type="number" placeholder="Enter the amount" className="inp2" onChange={(e)=>{setAmnt(e.target.value)}}/>
                <label className="desc">Description</label>
                <input type="text" placeholder="Description.." className="inp3" onChange={(e)=>{setMsg(e.target.value)}}/>
                <button className="cta2" onClick={repay}>
                    <span>Remind</span>
                    <svg width="15px" height="10px" viewBox="0 0 13 10">
                        <path d="M1,5 L11,5"></path>
                        <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                </button>
                </div>
            </form>
            <form className="frm3" id="id3">
                <span>Check your monthly expenditure</span>
                <div className="container3">
                <button className="cta3" onClick={expenditure}>
                    <span>Check</span>
                    <svg width="15px" height="10px" viewBox="0 0 13 10">
                        <path d="M1,5 L11,5"></path>
                        <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                </button>
                <span className="expenditure">{expend}</span>
                </div>
            </form>
            <form className="frm4" id="id4">
                <span>Check your notifications</span>
                <div className="container4">
                <button className="cta4" onClick={notif}>
                    <span>Check</span>
                    <svg width="15px" height="10px" viewBox="0 0 13 10">
                        <path d="M1,5 L11,5"></path>
                        <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                </button>
                {arr.map((not,i)=>(
                    <h3 className="not1" key={i}>{not.send_username} has asked for {not.amount} with message "{not.message}"</h3>
                ))}
                
                
                </div>
            </form>
            

        </>
    )
}

export default User;