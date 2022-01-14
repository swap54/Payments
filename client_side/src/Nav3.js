import React from "react";
import { render } from "react-dom";
import './Nav3.css';
import { useHistory } from "react-router";
import { Link } from "react-scroll";

function Nav3(){
    const history = useHistory();
    const logout=()=>{
        history.push('/')
    }
    return(
        <>
        <div className="Navbar">
            <div className="Container">
            <Link to="/user" className="brand">Pay</Link>
            </div>
            <button className="lgt1" onClick={logout}>Log-out</button>
        </div>
        </>
    );
}

export default Nav3;