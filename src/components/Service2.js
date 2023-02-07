import React from 'react'
import './Service2.css'

export default function Service2() {
  return (
    <div>
        <div className='servicebody'>
          <h1 className='servicetitle'>Our Services</h1>
          <div className='container'>
            <div className='row'>
                {/* box 1 */}
                <div className='col-md-4'>
                     <div className='main'>
                        <div className='service'>
                          <div className='service-logo'>
                          <i class="fa-solid fa-pencil"></i>
                          </div>
                          <h4 className='servicename'>Customized solutions</h4>
                          <p>
                          This iERP is capable of customization to the business level /Functional level /Activity level/
                          Transaction level and is flexible enough to customize and provide useful solutions to any business
                           entity.
                          </p>
                        </div>
                        <div className='shadowOne'></div>
                        <div className='shadowTwo'></div>
                     </div>
                </div>
                {/* Box 2 */}
                <div className='col-md-4'>
                     <div className='main'>
                        <div className='service'>
                          <div className='service-logo'>
                          <i class="fa-solid fa-code"></i>
                          </div>
                          <h4 className='servicename'>Integration Solutions</h4>
                          <p>
                          Auditusi-ERP is a game-changer in business automation. Its integration capabilities streamline critical processes like marketing and HR, leading to improved efficiency and productivity. With seamless integration of various applications, data is centralized, reducing the risk of errors and duplicated efforts. Organizations can make informed, data-driven decisions thanks to real-time access to data and analytics. Auditusi-ERP's advanced solution puts organizations ahead of the curve and unlocks their full potential. It's the answer for organizations seeking long-term success. Auditusi-ERP transforms the way businesses operate, making it a highly sought after solution for modern organizations.
                          </p>
                        </div>
                     </div>
                </div>
                {/* box3 */}
                <div className='col-md-4'>  
                     <div className='main'>
                        <div className='service'>
                          <div className='service-logo'>
                          <i class="fa-sharp fa-solid fa-gear"></i>
                          </div>
                          <h4 className='servicename'>Technical Support</h4>
                          <p>
                          We provide timely and reliable technical support by which customer
                           can select product and technical support through emails and tele 
                           conversation. Our technical staff has the desired skills and 
                           technical capabilities to address the issues.
                          </p>
                        </div>
                     </div>
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}
