import React from 'react'
import arr from './data.json'

export default function Menulist(props) {

  let cap = "Caption" + props.passData;
  let Captiondec="";
  if (props.passData ==="Manufacturing"){
     Captiondec = `Auditusierp software is designed to help manufacturers streamline their operations and improve their bottom line. With a comprehensive set of tools for accounting, inventory management, and production planning, Auditusierp software helps manufacturers of all sizes to stay on top of their finances, track their inventory, and plan their production schedules efficiently.`;
       
  }
  if (props.passData ==="Retail"){
    Captiondec ="Retail is a fast-paced and dynamic industry that requires businesses to stay ahead of the competition. Accurate financial management is a critical aspect of success in the retail industry. To help retailers achieve this goal, Auditusierp Software offers a comprehensive business accounting software solution.";
  }
  if (props.passData ==="Distribution"){
    Captiondec = `Distribution refers to the process of distributing goods and products to various locations, such as retail stores, wholesalers, or directly to customers. In the context of Auditusierp software, it may refer to the distribution of financial data and reports to stakeholders, or the distribution of inventory and supply chain information to different departments within a company. The software aims to streamline and automate the distribution process, making it more efficient and effective.`;
      
 }
  return (
    <div>
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
