import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./styles.css";

function Login(){

const [username,setUsername] = useState("");
const [password,setPassword] = useState("");
const [error,setError] = useState("");

const navigate = useNavigate();


// Load saved username when page opens
useEffect(()=>{
 const savedUser = localStorage.getItem("username");

 if(savedUser){
  setUsername(savedUser);
 }

},[]);


const handleSubmit = async(e)=>{

 e.preventDefault();

 setError("");   // clear previous error

 try{

  const res = await axios.post("http://localhost:5000/login",{
   username,
   password
  });

  // Save username for next login
  localStorage.setItem("username", username);

  navigate("/welcome");

 }catch(err){

  setError(err.response?.data?.message || "Login Failed");

 }

};


return(

<div className="container">

<h2>Login</h2>

<form onSubmit={handleSubmit}>

<input
type="text"
placeholder="Username"
value={username}
onChange={(e)=>setUsername(e.target.value)}
required
/>

<input
type="password"
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
required
/>

<button type="submit">Login</button>

</form>

{error && <p className="error">{error}</p>}

</div>

);

}

export default Login;