import React from "react";
import { Link } from "react-router-dom";
import './index.css'
import Cookies from 'js-cookie'
const Navbar = () => {
  const token = Cookies.get("jsonToken")
  const handileOnClick =()=>{
    Cookies.remove("jsonToken")
      window.location.reload()
  }
  return (
    <>
      <div className="nav-main-container">
        <Link to='./'>
          <li className="nav-elements"><img src="images\image.png" alt="logo" className="logo-home"/></li>
        </Link>
        <div className="nav-home-about-container">
        <Link to='./Editor'>
          <li className="nav-elements">Dashboard</li>
        </Link>
        <Link to='./AboutUs'>
          <li className="nav-elements">About-Us</li>
        </Link>
        <Link to='./Register'>
          <li className="nav-elements">User-Register</li>
        </Link>
{!token ?  <Link to='./Login'>
          <li className="nav-elements">Login</li>
        </Link> : <button onClick={handileOnClick}>Logout</button>  }
       




 
      
        
        </div>
      </div>
    </>
  );
};

export default Navbar;
