import React,{Component} from 'react';
import './App.css';
import {Link,Switch,Route,Redirect } from 'react-router-dom';
import SignIn from '../SignIn/SignIn';
import Logout from '../SignIn/Logout'
import ReactDOM from "react-dom";
import "./Styles.css";
import UserMaster from  '../Masters/UserMaster';
// import SideBar from './Sidebar';


export default class Nav extends Component {
  constructor(props){
  super(props)
  const token=localStorage.getItem("token")
   console.log(token)
  let status= "success"
  if(token ==='null'){
    status= ""
    console.log("token value"+token)
  }
  this.state={
    status
  }
  }
  
  render(){
    console.log("Status :"+this.state.status)
    if(this.state.status === ""){
       return <Redirect to="/" />
    }
    const navstyle={
      color:'white' 
  }
   return(
  <div>
    {/* <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} /> */}
   <nav>
   
  <ul className="nav-links"></ul>
   <Link style={navstyle} to ='/' >  <ul>Logout</ul> </Link > 
       <Switch>
          <Route exact path="/" component={SignIn}/>
         
       </Switch> 
   
      </nav>
      {/* <UserMaster/> */}
  </div>
   )
  
  }
  }
  