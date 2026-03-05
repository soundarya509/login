import React from "react";
import "./styles.css";

function Welcome(){

const username = localStorage.getItem("username");

return(

<div className="welcome">

<h1>Welcome {username} 🎉</h1>

<p>You have successfully logged in.</p>

</div>

);

}

export default Welcome;