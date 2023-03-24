import React from 'react'
import Edition from './Edition'
import './Products.css'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

export default function Products() {
  return (
    <div>
        <div className="wrapper">
    <div className="table basic"><center> <img  className='productimg' alt='' src='/images/startup 8x8.png' /></center>
    <div className="package-name"></div>
    <center><h5 className='price-basics'>Single User- ₹10,000 + 18%GST</h5></center>

      <ul className="features">
        <li className='price-basic'>
        STANDARD Edition: The STANDARD edition is a step up from the STARTUP edition, offering more advanced features and greater functionality for growing businesses. This edition provides a comprehensive solution for businesses that need more control over their financial processes and want to take their operations to the next level. The STANDARD edition includes everything from accounting and billing, to advanced reporting and analysis tools, giving businesses the tools they need to succeed.
        </li>
      </ul>
    </div>
    <div className="table premium"><center><img  className='productimg' alt='' src='/images/standard 8x8.png' /></center>
    <div className="package-name"></div>

<center>
<select className='productdropdown'>
    <option>Single User - ₹15,000 +18%GST</option>
    <option>Dual User(LAN) - ₹22,500 +18%GST</option>
    <option>Multi User(LAN) - ₹37,500 +18%GST</option>
  </select>

</center>


      <ul className="features">
        <li className='price-Standards'>
        STANDARD Edition: The STANDARD edition is a step up from the STARTUP edition, offering more advanced features and greater functionality for growing businesses. This edition provides a comprehensive solution for businesses that need more control over their financial processes and want to take their operations to the next level. The STANDARD edition includes everything from accounting and billing, to advanced reporting and analysis tools, giving businesses the tools they need to succeed.          
        </li>

      </ul>

    </div>
    <div className="table ultimate"><center><img  className='productimg' alt='' src='/images/supreme 8x8.png' /></center>
    <div className="package-name"></div>
    <div className="ribbon"><span>All Features</span></div>

<center>
<select className='productdropdown'>
    <option>Single User - ₹25,000 +18%GST      </option>
    <option>Dual User(LAN) - ₹37,500 +18%GST  </option>
    <option>Multi User(LAN) - ₹62,500 +18%GST   </option>
  </select>
</center>


    
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
