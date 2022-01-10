import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import './Home.css';
import { useHistory } from "react-router";

import bg from './bg.svg';
import Axios from 'axios';
import User from './User';




export default function Home(props){
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const [loginStatus, setLoginStatus] = useState("")
    let history = useHistory();
    
    const login=(e)=>{
        //history.push("/user");
        Axios.post('http://localhost:3001/login', {username:username, password: password}).then((response)=>{
            if(response.data.message){
                setLoginStatus(response.data.message)
            }
            else{
                setLoginStatus(response.data[0].username)
                props.parentCallBack(response.data[0].username)
                redirect()
            }
        });
        
        e.preventDefault();
        
    };  
    const redirect=()=>{
        
        history.push('/user');
            
        
    };
    
    return(
        <>
            <img className="bg" />
            <div className="abt">
                <span>What are we?</span>
                <div>Pay is India's leading financial services company that offers full-stack payments & financial solutions to consumers, offline merchants and online platforms. The company is on a mission to bring half a billion Indians into the mainstream economy through payments, commerce, banking, investments, and financial services. One97 Communications Limited that owns the brand Paytm is founded by Vijay Shekhar Sharma and is headquartered in Noida, Uttar Pradesh. Its investors include Softbank, Ant Financial, AGH Holdings, SAIF Partners, Berkshire Hathaway,
                        T Rowe Price, and Discovery Capital.
                        It's wholly-owned subsidiary 'Paytm Money' has achieved the distinction of becoming India's biggest investment platform within its first year, and is now one of the largest contributors of new Systematic Investment Plans (SIPs) to the Mutual Funds industry; it has already received approvals to launch Stock Broking, Demat Services and National Pension System (NPS) services, and strives to continue to broaden the financial services and wealth management opportunities to the unbanked and underserved Indians.
                </div> 
            </div>
            
            <form className="form1" >
                <h1>{loginStatus}</h1>
            
                <span>Login</span>
                <label className="username">username</label>
                <input type="text" placeholder="type your username" className="inp1" onChange={(e)=>{setUsername(e.target.value)}}/>
                <label className="pswd">password</label>
                <input type="password" placeholder="type your password" className="inp2" onChange={(e)=>{setPassword(e.target.value)}}/>
                <button className="cta" onClick={login}>
                    <span>Log-in</span>
                    <svg width="15px" height="10px" viewBox="0 0 13 10">
                        <path d="M1,5 L11,5"></path>
                        <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                </button>
                
            </form>
            
        </>
    );
}

