import React from 'react'
import Editions from './Edition.json'
import './Edition.css'


export default function Edition() {
  return (
    <div>
    
        <h1 className='plan-name'>Comparing Plans</h1>

        <table className='container'>
  <tr className="container">
    <th>Features</th>
    <th>Startup</th>
    <th>standard</th>
    <th>suprem</th>
  </tr>

</table>


      {
        Editions.map(
                (Editions,index) => <div key={index} className="container"><hr/>


    <tr>
      <td>{Editions.Feature}</td> 
      <td>{Editions.startup}</td>
      <td>{Editions.standard}</td>
      <td>{Editions.Suprem}</td>
    </tr>
                </div>
        )
      }

    </div>
  )
}