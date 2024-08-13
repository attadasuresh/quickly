import React, { useState } from 'react';
import './index.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // navigate after login page
import { baseUrl } from '../config';
import Cookies from 'js-cookie'

const Login = () => {
    const [logindata, setLogindata] = useState({
        email: '',
        password: ''
    });
    const { email, password } = logindata;
    const navigate = useNavigate();                  // navigate after login page

    const loginChangeHandler = (e) => {
        setLogindata({ ...logindata, [e.target.name]: e.target.value });
    };

    const loginSubmitHandler = (e) => {
        e.preventDefault();
        axios.post(`${baseUrl}login`, { ...logindata }) 
            .then((res) => {
                console.log(res.data);
                Cookies.set("jsonToken",res.data.jsonToken,{expires:30})
                navigate('/Editor');     
      window.location.reload()
      // navigate after login page
            })
            .catch((err) =>{
                console.log(err.response ? err.response.data.message : err.message)
                alert(err.response ? err.response.data.message : "server error")
            } )
    };

    return (
        <>
            <div className="login-background-img-full">
                <div className="login-background-img">
                    <form className="login-card" onSubmit={loginSubmitHandler}>
                        <h1 className="login-heading">E2E Tracking Services</h1>
                        <label className="login-lable">Email</label>
                        <input
                            type="text"
                            name="email"
                            value={email}
                            placeholder="Enter Your UserName"
                            className="login-input"
                            onChange={loginChangeHandler}
                        />
                        <label className="login-lable">Password</label>
                        <input
                            type="password"
                            placeholder="Enter Your Password"
                            name="password"
                            value={password}
                            className="login-input"
                            onChange={loginChangeHandler}
                            required
                        />
                        <button type="submit" className="login-button">
                            Login
                        </button>
                    </form>
                    <img
                        src="images/cybersecurity-icon-img-1.png"
                        alt="loginimage"
                        className="login-lockpage-image"
                    />
                </div>
            </div>
        </>
    );
};

export default Login;
