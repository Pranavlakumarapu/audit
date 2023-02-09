import React from 'react';
import './Download.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function Download() {

  var Downloadfiles = [
    {
      title: "Auditsierp18.5.5.9",
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
    ,  {
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
    },
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
    <div className='download-body' > 
      <center><h3>Downloads</h3></center>
      {

  Downloadfiles.map((value,index)=>{
    return       <div key={index} class="card " style={{ width: '15rem',display:'inline-flex',margin:'10px'}} >

  <div class="card-body">
    <h5 class="card-title">{value.title} <img  src={value.titleimag} alt=''/></h5>
    <h6 class="card-subtitle mb-2 text-muted">{value.Date}</h6>
    {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
    <a href={value.Download_link} class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Download</a>
  </div>




    </div>
  }) 
}


    </div>


  )
}
