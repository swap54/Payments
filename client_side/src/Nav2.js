import React from "react";
import { render } from "react-dom";
import './Nav2.css';
import { useHistory } from "react-router";
import { Link } from "react-scroll";

function Nav(){
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
            <div className="parent">
            <Link activeClass="active" 
                    to="id1" 
                    spy={true} 
                    smooth={true} 
                    duration={500} 
                    className="child">Pay to an existing user</Link>
            <Link activeClass="active" 
                    to="id2" 
                    spy={true} 
                    smooth={true} 
                    duration={500}  className="child">Send a reminder</Link>
            <Link activeClass="active" 
                    to="id3" 
                    spy={true} 
                    smooth={true} 
                    duration={500}  className="child">Monthly expenditure</Link>
            <Link activeClass="active" 
                    to="id4" 
                    spy={true} 
                    smooth={true} 
                    duration={500}  className="child">Notifications</Link>
            <Link activeClass="active" 
                    to="id5" 
                    spy={true} 
                    smooth={true} 
                    duration={500}  className="child">Available-balance</Link>
            </div>
            <button className="lgt" onClick={logout}>Log-out</button>
        </div>
        </>
    );
}

export default Nav;
