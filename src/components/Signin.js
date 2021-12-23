import React, { useState,useEffect,setShow } from "react";
import "../style.css"
import color from "../img/color.jpg"
// import {useNavigate} from 'react-router-dom';
import PropTypes from 'prop-types';
import jwt_decode from "jwt-decode";
export default function Login() {
    const [show, setShow] = useState(true);
const [email,setEmail] = useState("");
const [password,setPassword] = useState("");
// const history = useNavigate();
const handleSubmit = async e => {
    e.preventDefault();
    const token = await login({
      email,
      password
    });
    // setToken(token);
    let res = login();
 let flag = 1;
 return flag;
  }
useEffect(()=>{
    if(localStorage.getItem('user-info')){
        // history.push("/add");
    }
},[])

async function login(){
    
    console.warn(email,password)
    let item = {email,password};
    let result = await fetch("https://react-task-api.herokuapp.com/api/users/signin",{
        method:'POST',
        headers:{
            "Content-Type":'application/json',
            Accept:'application/json'
        },
        body:JSON.stringify(item)
    }).then((response) => response.json())
    // result=await result.json();
    // localStorage.setItem("user-info",JSON.stringify(result))
    // history.push("/add")
    var decoded = jwt_decode(result);
    console.log(decoded)
    return result;
}
let res = login();

        return (
            <div className="container" >

   <div className="row" >
   <div className="col-sm-6" >
   <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist" style={{marginTop:"20px"}}>
  <li className="nav-item" role="presentation" >
    <a onClick={() => setShow((s) => !s)}
      className="nav-link text-white "
      id="tab-login"
      data-mdb-toggle="pill"
      href="#pills-login"
      role="tab"
      aria-controls="pills-login"
      aria-selected="true"
      style={{backgroundColor:"orange", width:"200px", borderRadius:"25px"}}
      >Hide/Show</a>

  </li>
  {/* <li className="nav-item" role="presentation">
    <a onClick={() => setShow((s) => !s)}
      className="nav-link text-dark"
      id="tab-register"
      data-mdb-toggle="pill"
      href="#pills-register"
      role="tab"
      aria-controls="pills-register"
      aria-selected="false"
      >Show</a>
  </li> */}
</ul>
            <form onSubmit={handleSubmit} style={{marginTop:"100px"}} style={{ display: show ? "block" : "none" }}>
                <h3>Sign In</h3>
                <div className="form-outline mb-4">
      <label className="form-label" for="registerEmail">Email</label>
        <input type="email" onChange={(e)=>setEmail(e.target.value)} id="registerEmail" className="form-control" />
       
      </div>

     
      <div className="form-outline mb-4">
      <label className="form-label" for="registerPassword">Password</label>
        <input type="password" onChange={(e)=>setPassword(e.target.value)} id="registerPassword" className="form-control" />
       
      </div>
                



                <button type="submit" className="btn btn-primary btn-block mb-3"  style={{marginTop:"40px"}}>Sign in</button>

            
        </form>
        </div>
        <div className="col-sm-6" style={{ display: show ? "block" : "none" }}> 

<img src={color}/>
</div>
</div>





</div>

      
      
      );
    
}
// Login.propTypes = {
//     setToken: PropTypes.func.isRequired
//   };


