import React,{useRef,useState} from 'react'

import ApiClient from '../../api-cofig/api';
import './login.css'
import {Link} from 'react-router-dom'
export default function Login() {
    const userRef = useRef();
    const passwordRef = useRef();
    const [error, setError] = useState(false)

   const handleSumbit = async (e)=>{
      e.preventDefault();
        
        try{
            const res =await ApiClient.post("/api/auth/local",
                      
           {
               identifier:userRef.current.value,
               password:passwordRef.current.value,

           });
            res.data && window.location.replace("/")
            console.log(res);
            
        
   
        }catch(err)
        {
            setError(true);
        }
       

    }
    
    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm" onSubmit={handleSumbit}>
                <label>Email</label>
                <input type="email" className="loginInput" placeholder="Enter your Email ..." ref={userRef} required/>
            
                <label>password</label>
                <input type="password" className="loginInput" placeholder="Enter your password ..." ref={passwordRef} required/>
                <button className="loginbtn" type="sumbit">Login</button>
                {error?<span style={{color:"red",marginTop:"10px"}}> Something went wrong!</span>:null}

            </form>
            <button className="loginReg"><Link to="/register" className="link">Register</Link></button>
        </div>
    )
}