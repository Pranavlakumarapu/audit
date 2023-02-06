import React from 'react';
 import { Link } from 'react-router-dom';
import Banner from './Banner';


export default function Menu() {


  return (
    <div >
      <Banner/>
      <center className='links-of-people'>
     {/* <Link to="/" state={{ data:{name: "Retail"} }} className="retail-link retailtitle"> Retail</Link> */}
     <Link   to="/" state={{ data: { name: "Retail" } }} className="retailtitle">Retail</Link>
      <Link to="/" state={{ data:{name: "Distribution"} }} className="Distributiontitle"> Distribution</Link>
      <Link to="/" state={{ data:{name: "Manufacturing"} }} className="Manufacturingtitle"> Manufacturing</Link>
      </center>
 </div>
  )
}