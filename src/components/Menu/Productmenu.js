import React from 'react';
import {useParams,useLocation  } from 'react-router-dom';
import Productslist from './data.json';
import Banner from '../Banner/Banner';
import data from "./data.json"; 

function Productmenu() {

  const {type} =useParams();  
  const location = useLocation();
  const { productData } = location.state && location.state.productData ? location.state : { productData:{product: " "} };
  let product_slide;
 let filteredArray = Productslist.filter(function(obj) {
 
  if (obj.name === productData.product) {
    return true;
  }
}).map(function(obj) {
  product_slide = obj.Product_Detials[0].product_sliderimgs

  return obj.Product_Detials[0];


});

  return (
    <div>
     <Banner passData= {product_slide} /> 

<ul>
{filteredArray && filteredArray.length > 0 && (
  <ul>
    {filteredArray.map((p) => (
      <li className="productmenu" key={p.id}>
        <p className='product-title'>{p.Product_title}</p>
        <p className='product-title-dec'>{p.product_dec}</p>
        <p className='feature-caption'> {p.product_featureCaption}</p>
        {p.productlist && p.productlist.length > 0 && (
          <ul>
            {p.productlist.map((sp, index) => (
              <li className=' productmenu2' key={index}>
                  {/* <p><img alt='' src={sp.sp_img} /></p> */}
                <p className='sp_title'> {sp.sp_Title}</p>
                <p className='product-sp-dec'> {sp.sp_dec}</p>
              </li>
            ))}
          </ul>
        )}
      </li>
    ))}
  </ul>
)}

</ul>
</div>
  );

  
}

export default Productmenu;



