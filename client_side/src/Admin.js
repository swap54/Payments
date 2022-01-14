import React, { useState } from "react";
import './Admin.css'
import Nav3 from './Nav3';
import Axios from 'axios';
function Admin(){
    const [usr,setusr] = useState([])
    const [tr,settr] = useState([])
    const chkuser = (e) =>{
        Axios.post('http://localhost:3001/admuser',{}).then((response)=>{
            if(response.data.message){
                alert(response.data.message)
            } 
            else{
                //setrc(response.data[0].send_username)
                //setAmt(response.data[0].amount)
                //setMes(response.data[0].message)
                setusr(response.data)
            }   
        
        })
        e.preventDefault()
    }
    const chktransaction = (e) =>{
        Axios.post('http://localhost:3001/admtran',{}).then((response)=>{
            if(response.data.message){
                alert(response.data.message)
            } 
            else{
                settr(response.data)
            }   
        
        })
        e.preventDefault()
    }
    return(
        <>
            <Nav3 />
            <img className="bg3" />
            <form className="admfrm1" id="id4">
                <span>Check all registered users</span>
                <div className="container7">
                <button className="cta7" onClick={chkuser}>
                    <span>Check</span>
                    <svg width="15px" height="10px" viewBox="0 0 13 10">
                        <path d="M1,5 L11,5"></path>
                        <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                </button>
                <div className="tbl1">
                    <table>
                        <tr>
                        <th className="hd">Name</th>
                        <th className="hd">Username</th>
                        <th className="hd">Password</th>
                        </tr>
                        {usr.map((users, i) => {
                        return (
                            <tr i={i}>
                            <td>{users.name}</td>
                            <td>{users.username}</td>
                            <td>{users.password}</td>
                            </tr>
                        )
                        })}
                    </table>
                </div>
                </div>
            </form>
            <form className="admfrm2" id="id4">
                <span>Check all transactions</span>
                <div className="container7">
                <button className="cta8" onClick={chktransaction}>
                    <span>Check</span>
                    <svg width="15px" height="10px" viewBox="0 0 13 10">
                        <path d="M1,5 L11,5"></path>
                        <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                </button>
                <div className="tbl2">
                    <table className="tb">
                        <tr>
                        <th className="hd1">Sender's username</th>
                        <th className="hd1">Receiver's username</th>
                        <th className="hd1">Amount</th>
                        <th className="hd1">Description</th>
                        </tr>
                        {tr.map((tran, i) => {
                        return (
                            <tr i={i}>
                            <td>{tran.send_username}</td>
                            <td>{tran.recv_username}</td>
                            <td>{tran.amount}</td>
                            <td>{tran.description}</td>
                            </tr>
                        )
                        })}
                    </table>
                </div>
                </div>
            </form>
        </>

    )
}
export default Admin
/*{usr.map((users,i)=>(
    <h3 className="not1" key={i}>{users.name}::{users.username}::{users.password}</h3>

))}*/