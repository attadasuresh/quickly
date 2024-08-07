import React from 'react'
import './index.css'
const index = () => {
  return (
  <>
  
  <div class="home-container">
            <div class="login-background-img-full">
                <div class="login-background-img">
                    <form  class="login-card">
                        <h1 class="login-heading">E2E Tracking Services</h1>
                        <label class="login-lable">Username</label>
                        <input
                            type="text"
                            name="username"
                            placeholder="Enter Your UserName"
                            class="login-input"
                       
                        />
                        <label class="login-lable">Password</label>
                        <input
                            type="password"
                            placeholder="Enter Your Password"
                            name="password"
                            class="login-input"
                           
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
        </div>
  
  
  </>
  )
}

export default index