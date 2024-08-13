import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './index.css'

const Userdata = () => {
    const [data,setData]=useState([])
    useEffect(()=>{
      axios.get('http://localhost:4000/registerdata')
      .then(res=>setData(res.data))
      .catch(err=>console.log(err))
    },[])
  return (
    <>
    <div className='userdata-main-container'>
<table className='table-container'>
  <thead>
    <tr >
      <th className='userdata-headings-container'> ID </th>
      <th className='userdata-headings-container' > FULL NAME </th>
      <th className='userdata-headings-container'> E-MAIL </th>
      <th className='userdata-headings-container'> PHONE NUMBER </th>
      <th className='userdata-headings-container'> GENDER </th>
      <th className='userdata-headings-container'> HOW KNOW ABOUT THIS </th>
      <th className='userdata-headings-container'> DELETE HERE </th>

    </tr>
  </thead>
  <tbody>
    {data.map((result,index)   =>{
      return  <tr key={index}>
      <td className='userdata-text-container'>{result.id}</td>
      <td className='userdata-text-container'>{result.fullname}</td>
      <td className='userdata-text-container'>{result.email}</td>
      <td className='userdata-text-container'>{result.phonenumber}</td>
      <td className='userdata-text-container'>{result.gender}</td>
      <td className='userdata-text-container'>{result.howdoknow}</td>
      <td>
        <button className='userdata-delet-button'> Delete</button>
      </td>
      </tr>
    } ) } 
  </tbody>
</table>

</div>
    
    
    </>
  )
}

export default Userdata