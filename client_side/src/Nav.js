import React from "react";
import * as ReactBootStrap from "react-bootstrap"
import { render } from "react-dom";

function Nav(){
    return(
        <>
        <ReactBootStrap.Navbar bg="dark" variant="dark">
            <ReactBootStrap.Container>
            <ReactBootStrap.Navbar.Brand href="#home" style={{padding: "50px 45px"},{fontSize:"35px"}}>Pay</ReactBootStrap.Navbar.Brand>
            <ReactBootStrap.Nav className="me-auto" style={{padding: "50px 45px"},{fontSize:"22px"}}>
            <ReactBootStrap.Nav.Link href="/" style={{marginLeft:"20px"},{marginRight:"25px"}}>Home</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="#features" style={{marginLeft:"30px"},{marginRight:"25px"}}>Features</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="adminlogin" style={{marginLeft:"30px"},{marginRight:"25px"}}>Admin-Login</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="register" style={{marginLeft:"30px"},{marginRight:"25px"}}>Register</ReactBootStrap.Nav.Link>
            </ReactBootStrap.Nav>
            </ReactBootStrap.Container>
        </ReactBootStrap.Navbar>
        </>
    );
}

export default Nav;