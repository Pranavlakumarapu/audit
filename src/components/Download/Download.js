import React from 'react'
import './Download.css'

export default function Download() {

  var Downloadfiles = [
    {
      title: "Auditsierp18.5.59",
      titleimag: "/images/download-new.gif",
      Download_link:"/downloads/Auditusierp 18.5.5.9.rar",
      Date:"Rel-2022-12-12"
    },
    {
      title: "Mysql",
      titleimag: "imgpath",
      Download_link:"/downloads/Auditusierp 18.5.5.9.rar",
      Date:"2022-12-12"
    }
    
  ]
  
  return (
    <div className='download-body'>
<center>
{
  Downloadfiles.map((value,index)=>{
    return<div key={index}>
<a href={value.Download_link}>
  <center>
  <div className='download2'></div>
    <div className='downloadbox'>
    <div className='download-heading'> {value.title} <img  src={value.titleimag} alt=''/> </div>
    <div className='download-date'>{value.Date}</div>
    </div>
   
  </center>
    </a>
    </div>
  }) 
}

</center>

    </div>
  )
}
