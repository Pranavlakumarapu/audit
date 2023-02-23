import React from 'react';
import {useParams,useLocation  } from 'react-router-dom';
import Productslist from './data.json';
import Banner from '../Banner/Banner';
function Productmenu() {

  const {type} =useParams();  
  const location = useLocation();
  const { productData } = location.state && location.state.productData ? location.state : { productData:{product: " "} };
  
 let filteredArray = Productslist.filter(function(obj) {
  if (obj.name === productData.product) {
    return true;
  }
}).map(function(obj) {
  return obj.Product_Detials[0];
});

  return (
    <div>

    
    <Banner passData={productData.product}/>
<ul>
  {filteredArray.map((p) => (
    <li key={p}>
      <p>{p.Product_title}</p>
      <p>Product_title_caption: {p.Product_tile_caption}</p>
      <p>Product_dec: {p.product_dec}</p>
      <p>Product_featureCaption: {p.product_featureCaption}</p>
      <p>sp_Title: {p.productlist[0].sp_Title}</p>
      
    

    </li>
  
  ))}
</ul>
</div>
  );
}

export default Productmenu;

