// import React from 'react'
// import Edition from './Edition'
// import './Products.css'

// export default function Products() {
//   return (
//     <div>

// <div className='pricetable'>

// <div className="container">
//   <div className="row">
//     <div className="col-sm">
//     <div className="box1 c-light p-5 rounded-lg shadow">
//           <h1 className="h6  font-weight-bold mb-4 pricing-name text-uppercase"><span><img  className='productimg' alt='' src='/images/startup 8x8.png' /></span> Startup</h1>
         
//            <span className='rate'><center>Single User- ₹10,000 + 18%GST</center></span>



//           <div className="custom-separator my-4 mx-auto bg-primary"></div>

//           <ul className="list-unstyled my-5 text-small text-left font-weight-normal">
//           STARTUP Edition: Designed for small business firms, the STARTUP edition offers basic functionality for accounting and billing. This edition is ideal for businesses with simple needs, who want to get started with an affordable and easy-to-use software solution. The STARTUP edition provides a solid foundation for businesses looking to streamline their financial processes and manage their finances with confidence


//           </ul>
//         </div>
//     </div>

//     <div className="col-sm">
//     <div className="boxa p-5 rounded-lg shadow">
//           <h1 className="h6 text-uppercase font-weight-bold mb-4 pricing-name"><span><img  className='productimg' alt='' src='/images/standard 8x8.png' /></span> Standard</h1>

//           <center>
// <div className="dropdownbussiness"> 
//    <div className="select">
//    <select name='bussiness'>
  // <option selected>Single User - ₹15,000 +18%GST</option>
//       <option value="1">Dual User(LAN) - ₹27,500 +18%GST</option>
//       <option value="2">Multi User(LAN) - ₹37,500 +18%GST</option>  
//          </select>
//    </div>
//    </div>
//   </center>

//           <div className="custom-separator my-4 mx-auto bg-primary"></div>

//           <ul className="list-unstyled my-5 text-small text-left font-weight-normal">
//           STANDARD Edition: The STANDARD edition is a step up from the STARTUP edition, offering more advanced features and greater functionality for growing businesses. This edition provides a comprehensive solution for businesses that need more control over their financial processes and want to take their operations to the next level. The STANDARD edition includes everything from accounting and billing, to advanced reporting and analysis tools, giving businesses the tools they need to succeed.
//           </ul>
//         </div>
//     </div>
//     <div className="col-sm">
//     <div className="box3 p-5 rounded-lg shadow">
//           <h1 className="h6 text-uppercase font-weight-bold mb-4 pricing-name"><span><img  className='productimg' alt='' src='/images/supreme 8x8.png' /></span> Supreme</h1>


// <center>
// <div className="dropdownbussiness"> 
//    <div className="select">
//    <select name='bussiness'>
//    <option selected>Single User - ₹25,000 +18%GST</option>
//       <option value="1">Dual User(LAN) - ₹37,500 +18%GST</option>
//       <option value="2">Multi User(LAN) - ₹62,500 +18%GST</option>  
//          </select>
//    </div>
//    </div>
//   </center>

//           <div className="custom-separator my-4 mx-auto bg-primary"></div>

//           <ul className="list-unstyled my-5 text-small text-left font-weight-normal">
//           SUPREME Edition: The SUPREME edition is the ultimate solution for large enterprises and businesses with complex financial needs. This edition provides a full suite of features and tools to help businesses manage their finances with ease. From accounting and billing, to inventory management and GST filing, the SUPREME edition has everything businesses need to stay on top of their finances and take their operations to the next level. Whether you're a large multinational corporation or a fast-growing startup, the SUPREME edition is the perfect solution for businesses that want the best of the best.
//           </ul>



//       </div>
//     </div>
//   </div>
// </div>
// </div>
// <Edition/>

//     </div>
//   )
// }


import React from 'react'
import Edition from './Edition'
import './Products.css'

export default function Products() {
  return (
    <div>
        <div className="wrapper">
    <div className="table basic"><center> <img  className='productimg' alt='' src='/images/startup 8x8.png' /></center>
    <div className="package-name"></div>
    <center><h5 className='price-basic'>Single User- ₹10,000 + 18%GST</h5></center>

      <ul className="features">
        <li className='price-basic'>
        STANDARD Edition: The STANDARD edition is a step up from the STARTUP edition, offering more advanced features and greater functionality for growing businesses. This edition provides a comprehensive solution for businesses that need more control over their financial processes and want to take their operations to the next level. The STANDARD edition includes everything from accounting and billing, to advanced reporting and analysis tools, giving businesses the tools they need to succeed.
        </li>
      </ul>
    </div>
    <div className="table premium"><center><img  className='productimg' alt='' src='/images/standard 8x8.png' /></center>
    <div className="package-name"></div>
    <center><h5 className='price-Standard'>Single User - ₹15,000 +18%GST</h5></center>
    <center><h5 className='price-Standard'>Multi User(LAN) - ₹37,500 +18%GST</h5></center>
    <center><h5 className='price-Standard'>Dual User(LAN) - ₹37,500 +18%GST</h5></center>

      <ul className="features">
        <li className='price-Standards'>
        STANDARD Edition: The STANDARD edition is a step up from the STARTUP edition, offering more advanced features and greater functionality for growing businesses. This edition provides a comprehensive solution for businesses that need more control over their financial processes and want to take their operations to the next level. The STANDARD edition includes everything from accounting and billing, to advanced reporting and analysis tools, giving businesses the tools they need to succeed.          
        </li>

      </ul>

    </div>
    <div className="table ultimate"><center><img  className='productimg' alt='' src='/images/supreme 8x8.png' /></center>
    <div className="package-name"></div>
    <div className="ribbon"><span>All Features</span></div>
    <center><h5 className='price-supreme'>Single User - ₹15,000 +18%GST</h5></center>
    <center><h5 className='price-supreme'>Multi User(LAN) - ₹37,500 +18%GST</h5></center>
    <center><h5 className='price-supreme'>Dual User(LAN) - ₹37,500 +18%GST</h5></center>
      <ul className="features">
        <li className='price-supreme'>
        SUPREME Edition: The SUPREME edition is the ultimate solution for large enterprises and businesses with complex financial needs. This edition provides a full suite of features and tools to help businesses manage their finances with ease. From accounting and billing, to inventory management and GST filing, the SUPREME edition has everything businesses need to stay on top of their finances and take their operations to the next level. Whether you're a large multinational corporation or a fast-growing startup, the SUPREME edition is the perfect solution for businesses that want the best of the best.          
        </li>
      </ul>

    </div>
  </div>
<Edition/>
    </div>
  )
}
