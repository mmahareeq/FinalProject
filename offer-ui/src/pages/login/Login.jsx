import React,{useRef} from 'react'

import ApiClient from '../../api-cofig/api';
import './login.css'
import {Link} from 'react-router-dom'
export default function Login() {
    const userRef = useRef();
    const passwordRef = useRef();
    

   const handleSumbit = async (e)=>{
      e.preventDefault();
        
        try{
            const res =await ApiClient.post("/api/auth/local",
                      
           {
               identifier:userRef.current.value,
               password:passwordRef.current.value,

           });
            console.log(res.data);
            res.data && window.location.replace("/home")
        
   
        }catch(err)
        {

        }
       

    }
    
    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm" onSubmit={handleSumbit}>
                <label>Username</label>
                <input type="email" className="loginInput" placeholder="Enter your username ..." ref={userRef}/>
            
                <label>password</label>
                <input type="password" className="loginInput" placeholder="Enter your password ..." ref={passwordRef}/>
                <button className="loginbtn" type="sumbit">Login</button>
            </form>
            <button className="loginReg"><Link to="/register" className="link">Register</Link></button>
        </div>
    )
}