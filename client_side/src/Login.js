import React from "react";
import * as ReactBootStrap from "react-bootstrap"

function Login(){
    return(
        <ReactBootStrap.Form>
            <ReactBootStrap.Form.Group as={ReactBootStrap.Row} className="mb-3" controlId="formPlaintextEmail">
                <ReactBootStrap.Form.Label column sm="2">
                Email
                </ReactBootStrap.Form.Label>
                <ReactBootStrap.Col sm="10">
                <ReactBootStrap.Form.Control plaintext readOnly defaultValue="email@example.com" />
                </ReactBootStrap.Col>
            </ReactBootStrap.Form.Group>

            <ReactBootStrap.Form.Group as={ReactBootStrap.Row} className="mb-3" controlId="formPlaintextPassword">
                <ReactBootStrap.Form.Label column sm="2">
                Password
                </ReactBootStrap.Form.Label>
                <ReactBootStrap.Col sm="10">
                <ReactBootStrap.Form.Control type="password" placeholder="Password" />
                </ReactBootStrap.Col>
            </ReactBootStrap.Form.Group>
        </ReactBootStrap.Form>
    );
}

export default Login;