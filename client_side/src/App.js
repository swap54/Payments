import logo from './logo.svg';
import './App.css';
import Nav from './Nav.js';
import Home from './Home.js';
import Register from './Register';
import User from "./User";
import Admin_login from './Admin_login';
import Admin from './Admin';
import React,{useState} from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'

/*function App() {
  return (
    <>
   <Nav />
   <Home />
   </>
  );
}*/
function App() {
  const [user,setUser] = useState("initial")
  const CallBack = (res) =>{
    setUser(res)
  }
  
  
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/" component={
          ()=>{
            return(
              <>
              <Nav />
              <Home parentCallBack={CallBack}/>
              
              </>
            )
          }
        }/>
        <Route exact path="/register" component={
          ()=>{
            return(
              <>
              <Nav />
              <Register />
              </>
            )
          }
        }
        />
        <Route exact path="/user" component={
          ()=>{
            return(
              <>
              <User usr={user}/>
              </>
            )
          }
        }
        />
        <Route exact={true} path="/adminlogin" component={
          ()=>{
            return(
              <>
              <Admin_login />
              
              </>
            )
          }
        }/>
        <Route exact={true} path="/admin" component={
          ()=>{
            return(
              <>
              <Admin />
              
              </>
            )
          }
        }/>
      </Switch>
    </BrowserRouter>
  );

}

export default App;
