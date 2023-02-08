import React from 'react';
 import { Link } from 'react-router-dom';


export default function Menu() {


  return (
    <div >
{/*
      <center className='links-of-people'>
     <Link   to="/" state={{ data: { name: "Retail" } }} className="retailtitle">Retail</Link>
      <Link to="/" state={{ data:{name: "Distribution"} }} className="Distributiontitle"> Distribution</Link>
      <Link to="/" state={{ data:{name: "Manufacturing"} }} className="Manufacturingtitle"> Manufacturing</Link>
      </center> */}

<div className='links'>
<div class="container-fluid">
  <div class="row">
    <div class="col-sm link">
    <Link   to="/" state={{ data: { name: "Retail" } }} className="retailtitle">
<div className='teximg-link'>      
<div><img alt='' src='/images/retailtitleimg.png' className='links-img'/></div>
<Link   to="/" state={{ data: { name: "Retail" } }} className="retailtitle">Retail</Link>
</div>
    </Link>
    </div>

    <div class="col-sm link">
    <Link   to="/" state={{ data:{name: "Distribution"} }} className="Distributiontitle">
<div className='teximg-link'>      
<div><img alt='' src='/images/distribution.png' className='links-img'/></div>
<Link   to="/" state={{ data:{name: "Distribution"} }} className="Distributiontitle">Distribution</Link>
</div>
    </Link>
    </div>


    <div class="col-sm link">
    <Link to="/" state={{ data:{name: "Manufacturing"} }} className="Manufacturingtitle">
<div className='teximg-link'>      
<div><img alt='' src='/images/manufacture.png' className='links-img'/></div>
<Link to="/" state={{ data:{name: "Manufacturing"} }} className="Manufacturingtitle">Manufacturing</Link>
</div>
    </Link>
    </div>
  </div>
</div>
</div>
 </div>
  )
}