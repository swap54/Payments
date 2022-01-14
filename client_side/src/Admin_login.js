import React, { useState } from "react";
import Nav from './Nav'
import Axios from 'axios';
import { useHistory } from "react-router";
import './Admin-login.css';
function Admin_login(){
    const [password,setPswd] = useState("")
    let history = useHistory();
    const login = (e) =>{
        Axios.post('http://localhost:3001/adminlogin',{password:password}).then((response)=>{
            if(response.data.message){
                alert(response.data.message)
            }
            else{
                history.push('/admin')
            }
        })
        e.preventDefault();
    }
    return(
        <>
        <Nav />
        <img className="bg2" />
        <form className="formm" id="id1" >
                <span>Login to admin account</span>
                <div className="container">
                <label className="recusr">Password</label>
                <input type="password" placeholder="Enter password" className="psw" onChange={(e)=>{setPswd(e.target.value)}}/>
                <button className="cta6" onClick={login}>
                    <span>Log-in</span>
                    <svg width="15px" height="10px" viewBox="0 0 13 10">
                        <path d="M1,5 L11,5"></path>
                        <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                </button>
                </div>
            </form>
        </>
    )
}

export default Admin_login