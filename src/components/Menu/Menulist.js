import React from 'react'
import Banner from '../Banner/Banner';
import arr from './data.json'

export default function Menulist(props) {

  let cap = "Caption" + props.passData;
  let Captiondec="";
  if (props.passData ==="Manufacturing"){
     Captiondec = `Auditusierp software is designed to help manufacturers streamline their operations and improve their bottom line. With a comprehensive set
      of tools for accounting, inventory management, and production planning, Auditusierp software helps manufacturers of all sizes to stay on top of their finances,
       track their inventory, and plan their production schedules efficiently.`;
       
  }
  if (props.passData ==="Retail"){
    Captiondec =`Auditus-iERP Software offers a comprehensive business accounting solution for retailers. Designed to meet the unique needs of the fast-paced retail industry. Streamline financial processes, make informed decisions, and stay ahead of the competition. Features include accounting and billing, reporting and analysis tools, and easy GST filing. Ideal for supermarkets, footwear stores, pharmacies, textile shops, and more. Take your operations to the next level with Auditus-iERP. Upgrade today and start managing your finances with confidence. The perfect solution for retailers who want to succeed. Get started with Auditus-iERP Software now.`;
  }
  if (props.passData ==="Distribution"){
    Captiondec = `Distribution refers to the process of distributing goods and products to various locations, such as retail stores, wholesalers, or directly to customers. In the context of Auditusierp software, it may refer to the distribution of financial data and reports to stakeholders, or the distribution of inventory and supply chain information to different departments within a company. The software aims to streamline and automate the distribution process, making it more efficient and effective.`;
      
 }

  return (
    <div>
       <Banner/>
<div className='container'>


   <center><h2 className={cap}>
    {props.passData}
    </h2></center>
   <center> <p> {Captiondec}</p></center>

<ul>
<div className="container listretails">
  <div className="row">
    <div className="col-sm">
       {arr.map((item, index) => {
        if (item.type == props.passData) {
          return <li key={index} className="container-sm">
             <img src={item.img} alt='' className='itemimgsgas'/> {item.name}   
          <div className='description'>{item.description}</div>
          </li>;
          
        }
    
      })}
    </div>
  </div>
</div>
</ul>

 </div>

    </div>
  )
}
