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
            <ReactBootStrap.Nav.Link href="/" style={{marginLeft:"20px"},{marginRight:"25px"}}>Pay to an existing user</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="#features" style={{marginLeft:"30px"},{marginRight:"25px"}}>Send a reminder</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="#pricing" style={{marginLeft:"30px"},{marginRight:"25px"}}>Monthly expenditure</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="register" style={{marginLeft:"30px"},{marginRight:"25px"}}>Invite and earn</ReactBootStrap.Nav.Link>
            </ReactBootStrap.Nav>
            </ReactBootStrap.Container>
        </ReactBootStrap.Navbar>
        </>
    );
}

export default Nav;