import React from 'react';
 import { Link } from 'react-router-dom';


export default function Menu() {


  return (
    <div >


<div className='links'>
<div class="container-sm  ee">
  <div class="row">
    <div class="col-sm link">
    <Link   to="/" state={{ data: { name: "Retail" } }} className="retailtitle">
<div className='teximg-link'>      

<Link   to="/" state={{ data: { name: "Retail" } }} className="retailtitle">
  <img alt='' src='/images/retailtitleimg.png' className='links-img'/> Retail</Link>
</div>
    </Link>
    </div>

    <div class="col-sm link">
    <Link   to="/" state={{ data:{name: "Distribution"} }} className="Distributiontitle">
<div className='teximg-link'>      

<Link   to="/" state={{ data:{name: "Distribution"} }} className="Distributiontitle">
<img alt='' src='/images/distribution.png' className='links-img'/> Distribution</Link>
</div>
    </Link>
    </div>


    <div class="col-sm link">
    <Link to="/" state={{ data:{name: "Manufacturing"} }} className="Manufacturingtitle">
<div className='teximg-link'>      

<Link to="/" state={{ data:{name: "Manufacturing"} }} className="Manufacturingtitle">
<img alt='' src='/images/manufacture.png' className='links-img'/> Manufacturing</Link>
</div>
    </Link>
    </div>
  </div>
</div>
</div>

 </div>
  )
}