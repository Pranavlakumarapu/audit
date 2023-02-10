import React from 'react'
import Editions from './Edition.json'
import './Edition.css'
import Accordion from 'react-bootstrap/Accordion';

export default function Edition() {
  return (
    <div>
    
       

<Accordion defaultActiveKey="5">
  
      <Accordion.Item eventKey="0">
       <Accordion.Header>  Comparing Plans</Accordion.Header>
        <Accordion.Body>
      
      

<table className='container-fluid'>
<tr className="container-fluid ">
<th className='edition-feature'>Feature</th>
<th>Startup</th>
<th>Standard</th>
<th>Suprem</th>
</tr>

</table>


{
Editions.map(
        (Editions,index) => <div key={index} className="container-fluid"><hr/>
<tr>
<td className='edition-feature'>{Editions.Feature}</td> 
<td>{Editions.startup}</td>
<td>{Editions.standard}</td>
<td>{Editions.Suprem}</td>
</tr>
        </div>
)
}

        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
    </div>
  )
}