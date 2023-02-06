import React from 'react'
import './Download.css'

export default function Download() {
  return (
    <div className='download-body'>
{/* <br/><br/>
<div className='container rar'>
<table className="table">
  <thead>
    <tr>
      <th scope="col">Product Type</th>
      <th scope="col">Release Date</th>
      <th scope="col">Download</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className='rar'>Auditus-iERP 18.5.5.8 (Beta) <img  src='/images/download-new.gif' alt=''/></td>
      <td className='rar'>	2022-12-12</td>
      <td className='rar'><a href='/downloads/Auditusierp 18.5.5.9.rar'> <i className="fa-solid fa-download"></i> </a></td>
    </tr>
    <tr>
      <td className='rar'>MySQL 8.0.31</td>
      <td className='rar'>	2022-12-12</td>
      <td className='rar'><a href='/downloads/mysql 8.0.31.rar'> <i className="fa-solid fa-download"></i> </a></td>
    </tr>
    <tr>
      <td className='rar'>Report Designer(Beta)</td>
      <td className='rar'>	2021-07-20</td>
      <td className='rar'><a href='/downloads/ReportDesginer.rar'> <i className="fa-solid fa-download"></i> </a></td>
    </tr>
    <tr>
      <td className='rar'>Consignment(Beta)</td>
      <td className='rar'>2021-07-20</td>
      <td className='rar'><a href='/downloads/Consignment.rar'> <i className="fa-solid fa-download"></i> </a></td>
    </tr>
    <tr>
      <td className='rar'>MandiBooks</td>
      <td className='rar'>2021-07-20</td>
      <td className='rar'><a href='/downloads/Mandibooks.rar'> <i className="fa-solid fa-download"></i> </a></td>
    </tr>
  </tbody>
</table>
</div>
<br/><br/> 

 */}



<center>
  
<a href='/downloads/Auditusierp 18.5.5.9.rar'>
    <div className='download2'> 
    <div className='downloadbox'>
    <div className='download-heading'> Auditus-iERP 18.5.5.8 (Beta) <img  src='/images/download-new.gif' alt=''/> </div>
    <div className='download-date'>2022-12-12</div>
    </div>
    </div>
    </a>



    <a href='/downloads/mysql 8.0.31.rar'>
    <div className='download2'> 
    <div className='downloadbox'>
    <div className='download-heading'>MySQL 8.0.31 <img  src='/images/download-new.gif' alt=''/></div>
    <div className='download-date'>2022-12-12</div>
    </div>
    </div>
    </a>

    <a href='/downloads/ReportDesginer.rar'> 
    <div className='download2'> 
    <div className='downloadbox'>
    <div className='download-heading'> Report Designer(Beta) </div>
    <div className='download-date'>2021-07-20</div>
    </div>
    </div>
    </a>

    <a href='/downloads/Consignment.rar'> 
    <div className='download2'> 
    <div className='downloadbox'>
    <div className='download-heading'> Consignment(Beta) </div>
    <div className='download-date'>2021-07-20</div>
    </div>
    </div>
    </a>

    <a href='/downloads/Mandibooks.rar'>
    <div className='download2'> 
    <div className='downloadbox'>
    <div className='download-heading'> MandiBooks</div>
    <div className='download-date'>2021-07-20</div>
    </div>
    </div>
    </a>
</center>

    </div>
  )
}
