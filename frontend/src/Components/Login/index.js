import React, { useState } from 'react'
import './index.css'
import axios from 'axios';
import { baseUrl } from '../config';
const Login = () => {


    const[logindata,setLogindata]=useState({
        email:'',
        password:''
    })
    const {email,password}=logindata;
    const loginChangeHandler=(e)=>{
        setLogindata({...logindata,[e.target.name]:e.target.value})
    }
    const loginSubmitHandler=(e)=>{
        e.preventDefault();
        axios.post(`${baseUrl}login`,{...logindata})  //base url or use http://localhost:4000/ this direct link
        .then((res)=>console.log(res))
        .catch((err)=>console.log(err.response ? err.response.data.message : err.message)
        )
    }

  return (
  <>
            <div class="login-background-img-full">
                <div class="login-background-img">
                    <form  class="login-card"  onSubmit={loginSubmitHandler} >
                        <h1 class="login-heading">E2E Tracking Services</h1>
                        <label class="login-lable">Email</label>
                        <input
                            type="text"
                            name="email"
                            value={email}
                            placeholder="Enter Your UserName"
                            class="login-input"
                            onChange={loginChangeHandler}
                        />
                        <label class="login-lable">Password</label>
                        <input
                            type="password"
                            placeholder="Enter Your Password"
                            name="password"
                            value={password}
                            class="login-input"
                            onChange={loginChangeHandler}
                            required
                        />
                        <button type="submit" class="login-button">
                            Login
                        </button>
                    </form>
                    <img
                        src="images\cybersecurity-icon-img-1.png"
                        alt="loginimage"
                        class="login-lockpage-image"
                    />
                </div>
            </div>
  
  
  </>
  )
}

export default Login