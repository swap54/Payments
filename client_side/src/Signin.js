import React from "react";
import './Signin.css';

function Signin(){
    return(
        <>
        <form className="form">
            <span>Login</span>
            <label className="username">username</label>
            <input type="email" placeholder="type your username" className="inp1"/>
            <label className="pswd">password</label>
            <input type="password" placeholder="type your password" className="inp2"/>
            <button class="cta">
                <span>Hover me</span>
                <svg width="15px" height="10px" viewBox="0 0 13 10">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
            </button>
        </form>
        </>
    );
}

export default Signin;