import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './index.css'
const Dashboard = () => {

  const [data,setData]=useState([])
  useEffect(()=>{
    axios.get('http://localhost:4000/registerdata')
    .then(res=>setData(res.data))
    .catch(err=>console.log(err))
  },[])

  return (
<div className='dashboard-main-container'>
<table className='table-container'>
  <thead>
    <tr >
      <th className='dashbosrd-headings-container'> ID </th>
      <th className='dashbosrd-headings-container' > FULL NAME </th>
      <th className='dashbosrd-headings-container'> E-MAIL </th>
      <th className='dashbosrd-headings-container'> PHONE NUMBER </th>
      <th className='dashbosrd-headings-container'> GENDER </th>
      <th className='dashbosrd-headings-container'> HOW KNOW ABOUT THIS </th>
      <th className='dashbosrd-headings-container'> DELETE HERE </th>

    </tr>
  </thead>
  <tbody>
    {data.map((result,index)   =>{
      return  <tr key={index}>
      <td className='dshboard-text-container'>{result.id}</td>
      <td className='dshboard-text-container'>{result.fullname}</td>
      <td className='dshboard-text-container'>{result.email}</td>
      <td className='dshboard-text-container'>{result.phonenumber}</td>
      <td className='dshboard-text-container'>{result.gender}</td>
      <td className='dshboard-text-container'>{result.howdoknow}</td>
      <td>
        <button className='dashboard-delet-button'> Delete</button>
      </td>
      </tr>
    } ) } 
  </tbody>
</table>

</div>
  )
}

export default Dashboard