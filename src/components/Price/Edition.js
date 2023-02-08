import React from 'react'
import Editions from './Edition.json'
import './Edition.css'


export default function Edition() {
  return (
    <div>
    
        <h1 className='plan-name'>Comparing Plans</h1>

        <table className='container'>
  <tr className="container ">
    <th className='edition-feature'>Feature</th>
    <th>Startup</th>
    <th>Standard</th>
    <th>Suprem</th>
  </tr>

</table>


      {
        Editions.map(
                (Editions,index) => <div key={index} className="container"><hr/>
    <tr>
      <td className='edition-feature'>{Editions.Feature}</td> 
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