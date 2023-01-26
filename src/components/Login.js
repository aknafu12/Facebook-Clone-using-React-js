import React from "react"
import { Link } from "react-router-dom"
import Login from './Login.css'
function Login()
{
 return(
    <div className="loginDetail">
        <input type='email' placeholder="inter ur email"/>
        <input type='password' />
        <button className="btn">login</button>


    </div>
 )

}