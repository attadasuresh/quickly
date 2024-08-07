import React from "react";
import { Link } from "react-router-dom";
import './index.css'
const index = () => {
  return (
    <>
      <div className="nav-main-container">
        <Link to='./'>
          <li className="nav-elements">Home</li>
        </Link>
        <div className="nav-home-about-container">
        <Link to='./AboutUs'>
          <li className="nav-elements">AboutUs</li>
        </Link>
        <Link to='./Login'>
          <li className="nav-elements">Login</li>
        </Link>
      
        </div>
      </div>
    </>
  );
};

export default index;
