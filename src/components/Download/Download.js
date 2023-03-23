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
      title: "Mysql 8.0.31",
      titleimag: "/images/download-new.gif",
      Download_link:"/downloads/mysql 8.0.31.rar",
      Date:"Rel-2022-12-12"
    }
    ,  {
      title: "Report Designer(Beta)",
      Download_link:"/downloads/ReportDesginer.rar",
      Date:"Rel-2021-07-20"
    },
    {
      title: "Consignment(Beta)	",
      Download_link:"/downloads/Consignment.rar",
      Date:"Rel-2021-07-20"
    },
    {
      title: "MandiBooks",
      Download_link:"/downloads/Mandibooks.rar",
      Date:"Rel-2021-07-20"
    }
  ]
  
  return (
    <div className='download-body' > 
      <center><h3 className='download-title'>Downloads</h3></center>
      {

Downloadfiles.map((value,index)=>{
  return       <div key={index} className="card " style={{ width: '18rem',height:'10rem',display:'inline-flex',margin:'10px'}} >

<div className="card-body">
  <h5 className="card-title"><span className='download-title-name'>{value.title} </span><img  src={value.titleimag} alt=''/></h5>
  <h6 className="card-subtitle mb-2 text-muted"><span className='download-date'>{value.Date}</span></h6>
  <a href={value.Download_link} className="btn btn-primary btn-lg active download-button"  role="button" aria-pressed="true">Download</a>
</div>




  </div>
}) 
}


    </div>


  )
}