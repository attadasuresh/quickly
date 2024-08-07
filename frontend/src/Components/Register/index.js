import React, { useState } from "react";
import axios from 'axios'
import "./index.css";
const Register = () => {

    const[registerdata,setRegisterdata]=useState({
        fullname:'',
        email:'',
        phonenumber:'',
        gender:'',
        howdoknow:''
    })
    const{fullname,email,phonenumber,gender,howdoknow}=registerdata;
    
    const formHandler=(e)=>{
        setRegisterdata({...registerdata,[e.target.name]:e.target.value})
    }

    const submitHandler=(e)=>{
        e.preventDefault();        
        axios.post('http://localhost:4000/user',registerdata)
        .then((res)=>
        alert("successfully submitted data")
        )
        .catch((err)=>console.log(err)
        )
        setRegisterdata({
            fullname:'',
            email:'',
            phonenumber:'',
            gender:'',
            howdoknow:''
        })
    }
  
 
    return (
    <>
      <div class="register-background-img-full ">
        <div class="register-background-img">
          <form class="register-card" onSubmit={submitHandler} >
            <h1 class="register-heading">Register Form</h1>
            <label class="register-lable">Full Name</label>
            <input
              type="text"
              name="fullname"
              value={fullname}
              placeholder="Enter Your Full Name"
              class="register-input"
              onChange={formHandler}
              required

            />
            <label class="register-lable">Email</label>
            <input
              type="text"
              placeholder="Enter Your Email"
              name="email"
              value={email}
              class="register-input"
              onChange={formHandler}

              required
            />
            <label class="register-lable">Phone:No</label>
            <input
              type="text"
              placeholder="Enter Your Phone:No"
              name="phonenumber"
              value={phonenumber}
              class="register-input"
              onChange={formHandler}

              required
            />
            <label class="register-lable">Gender</label>
            <input
              type="text"
              placeholder="Enter Your Gender"
              name="gender"
              value={gender}
              class="register-input"
              onChange={formHandler}

              required
            />
            <label class="register-lable">How Did You Know This WebSite</label>
            <input
              type="text"
              placeholder="Enter Your Here"
              name="howdoknow"
              value={howdoknow}
              class="register-input"
              onChange={formHandler}

              required
            />
            <button type="submit" class="register-button">
              register
            </button>
          </form>
          <img
            src="images\sign-up-account-9744687-7969189.jpg"
            alt="registerimage"
            class="register-lockpage-image"
          />
        </div>
      </div>
    </>
  );
};

export default Register;
