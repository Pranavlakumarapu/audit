

import React from 'react'
import Edition from './Edition'
import './Products.css'

export default function Products() {
  return (
    <div>

<div className='pricetable'>

<div className="container">
  <div className="row">
    <div className="col-sm">
    <div className="box1 c-light p-5 rounded-lg shadow">
          <h1 className="h6  font-weight-bold mb-4 pricing-name text-uppercase">Startup</h1>
         
           <span className='rate'><center>₹10,000</center></span>



          <div className="custom-separator my-4 mx-auto bg-primary"></div>

          <ul className="list-unstyled my-5 text-small text-left font-weight-normal">
          Startup is the basic edition for small business firms.
This consists accounting, billing, basic GST reports and cloud backup features.


          </ul>
        </div>
    </div>

    <div className="col-sm">
    <div className="boxa p-5 rounded-lg shadow">
          <h1 className="h6 text-uppercase font-weight-bold mb-4 pricing-name">Standard</h1>

          <center>
<div className="dropdownbussiness"> 
   <div className="select">
   <select name='bussiness'>
   <option selected>Single User - ₹15,000 +18%GST</option>
      <option value="1">Dual User(LAN) - ₹27,500 +18%GST</option>
      <option value="2">Multi User(LAN) - ₹37,500 +18%GST</option>  
         </select>
   </div>
   </div>
  </center>

          <div className="custom-separator my-4 mx-auto bg-primary"></div>

          <ul className="list-unstyled my-5 text-small text-left font-weight-normal">
          This edition includes Startup related features along with additional features
such as Sale/Purchase quotations, Multi Voucher series, Voucher Auditing,
budgeting, GST analysis reports, POS billing, salesman feature,
Cost centre and User/party dashboard.
          </ul>
        </div>
    </div>
    <div className="col-sm">
    <div className="box3 p-5 rounded-lg shadow">
          <h1 className="h6 text-uppercase font-weight-bold mb-4 pricing-name">Supreme</h1>


<center>
<div className="dropdownbussiness"> 
   <div className="select">
   <select name='bussiness'>
   <option selected>Single User - ₹25,000 +18%GST</option>
      <option value="1">Dual User(LAN) - ₹37,500 +18%GST</option>
      <option value="2">Multi User(LAN) - ₹62,500 +18%GST</option>  
         </select>
   </div>
   </div>
  </center>

          <div className="custom-separator my-4 mx-auto bg-primary"></div>

          <ul className="list-unstyled my-5 text-small text-left font-weight-normal">
          This edition includes Startup and Standard related features
along with additional features like data sync between branchs, targets, scheme management, job-work, advanced & graphical analysis reports
payroll, Voucher/master approval, advanced user management, User Activity logs and many more useful features for business development

          </ul>



      </div>
    </div>
  </div>
</div>
</div>
<Edition/>

    </div>
  )
}
