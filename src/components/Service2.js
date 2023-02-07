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
                          At Auditus-iERP, we understand the importance of staying ahead of the curve. Our software is designed to adapt and grow with your business, providing the flexibility and customization you need to stay competitive in today's fast-paced market. With expert guidance and support, you can rely on Auditus-iERP to help you navigate through any changes and stay ahead of the curve. Choose a solution that can grow with your business and drive success, with the efficiency and effectiveness you need to thrive. Invest in Auditus-iERP for a solution that maximizes your potential and helps you stay ahead in the ever-changing business world.
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
                          Auditus-iERP is a game-changer in business automation. Its integration capabilities streamline critical processes like marketing and HR, leading to improved efficiency and productivity. With seamless integration of various applications, data is centralized, reducing the risk of errors and duplicated efforts. Organizations can make informed, data-driven decisions thanks to real-time access to data and analytics. Auditus-iERP's advanced solution puts organizations ahead of the curve and unlocks their full potential. It's the answer for organizations seeking long-term success. Auditus-iERP transforms the way businesses operate, making it a highly sought after solution for modern organizations.
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
                          At Auditus-iERP, customer satisfaction is our top priority. That's why we offer comprehensive technical support, available through channels like email and telephone. Our knowledgeable and skilled technical staff is equipped to handle any issues that arise. We are dedicated to providing timely and reliable support, giving customers confidence in their product selection. Our technical team is always on hand to provide expert assistance and guidance. With Auditus-iERP's technical support, customers can be sure their needs will be met efficiently and effectively. Investing in our technical support services guarantees peace of mind and a seamless experience.
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
