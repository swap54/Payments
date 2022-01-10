import React from "react";
import Nav from "./Nav2";

function User(props){
    return(
        <>
            
            <Nav />
            <h1>Hello {props.usr}!</h1>
        </>
    )
}

export default User;