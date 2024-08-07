import React from "react";
import { Link } from "react-router-dom";
import './index.css'
const Navbar = () => {
  return (
    <>
      <div className="nav-main-container">
        <Link to='./'>
          <li className="nav-elements">Home</li>
        </Link>
        <div className="nav-home-about-container">

        <Link to='./AboutUs'>
          <li className="nav-elements">About-Us</li>
        </Link>
        <Link to='./Register'>
          <li className="nav-elements">User-Register</li>
        </Link>
        <Link to='./Login'>
          <li className="nav-elements">Login</li>
        </Link>
 
      
        
        </div>
      </div>
    </>
  );
};

export default Navbar;
