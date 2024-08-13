import React from 'react'
import Cookies from 'js-cookie'
import { Navigate,Outlet  } from 'react-router-dom'

const Secure = (props) => {
    const token = Cookies.get("jsonToken")
    if (!token) {
        return <Navigate to="/login" />
    }
    return  <Outlet  />
}

export default  Secure 
