import React, {useState} from 'react';
import './Register.css';
import Axios from 'axios';

function Register(){
    const [nameReg,setNameReg] = useState('')
    const [usernameReg,setUsernameReg] = useState('')
    const [password,setPasswordReg] = useState('')

    const register = ()=>{
        Axios.post('http://localhost:3001/register', {name:nameReg, username:usernameReg, password: password}).then((response)=>{
            console.log(response);
        });
    };  
    return(
        <>
            <img className="bg" />
            <form className="form">
                <span>Register</span>
                <label className="name">name</label>
                <input type="text" placeholder="type your name" className="inp1" onChange={(e)=>{setNameReg(e.target.value)}}/>
                <label className="username">username</label>
                <input type="text" placeholder="type your username" className="inp2" onChange={(e)=>{setUsernameReg(e.target.value)}}/>
                <label className="pswd">password</label>
                <input type="password" placeholder="type your password" className="inp2" onChange={(e)=>{setPasswordReg(e.target.value)}}/>
                <button className="cta" onClick={register}>
                    <span>Register</span>
                    <svg width="15px" height="10px" viewBox="0 0 13 10">
                        <path d="M1,5 L11,5"></path>
                        <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                </button>
            </form>
        </>
    )
}

export default Register;