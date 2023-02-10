import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import {useParams,useLocation  } from 'react-router-dom';
import Productslist from './data.json';
function Productmenu() {

  const {type} =useParams();
  const location = useLocation();
  const { productData } = location.state && location.state.productData ? location.state : { productData:{product: " "} };
//  const filteredData = Productslist.filter(item => item.name == productData.product);

  
 const filteredArray = Productslist.filter(function(obj) {
  if (obj.name === productData.product) {
    return true;
  }
}).map(function(obj) {
  return obj.Product_Detials;
});

console.log(filteredArray);

  return (
  <div> 
       <h1>{productData.product}</h1>
{
filteredArray.map((f, index)=>
{
  <div key={index}>
  <li> {f.Product_title} </li>
  <li> {f.Product_tile_caption} </li>
  <li> {f.product_dec} </li>
  <li> {f.product_featureCaption} </li>
  </div>
})

}
    </div>
 
  );
}

export default Productmenu;