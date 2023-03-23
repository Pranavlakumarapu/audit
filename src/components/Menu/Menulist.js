import React ,{ useState }from 'react'
import Banner from '../Banner/Banner';
import Download from '../Download/Download';
import arr from './data.json';
import { Link   } from 'react-router-dom';


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
    
       <Banner passData={props.passData}/>
<div className='container'>
   <center><h2 className={cap}>
    {props.passData}
    </h2></center>
  <p> {Captiondec}</p>
<ul>
<div className="container listretails">
  <div className="row">
    <div className="col-sm">
       {arr.map((item, index) => {
        
        if (item.type == props.passData ) 
        {
          if(props.passData=="Manufacturing"){
            
return   <li key={index} className="container-sm allmenuchange">
<img src={item.img} alt='' className='itemimgsgas'/> <span className='itemname'>{item.name}</span>
<div className='description'>{item.description}</div>
</li>
          }
          else{
          return      <Link  to= "/Productmenu"
          state={{ productData: { product: item.name } }} > 
           <li key={index} className="container-sm allmenuchange">
             <img src={item.img} alt='' className='itemimgsgas'/> <span className='itemname'>{item.name}</span>
          <div className='description'>{item.description}</div>
          </li> </Link>;
        }
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
