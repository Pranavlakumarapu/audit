//  import {Link} from 'react-router-dom'
// import './NavBar.css'
// import React, { Component } from 'react';
// import { Dropdown } from 'react-bootstrap';
// import Sidecontactform from '../Sidecontactform/Sidecontactform';



// export default class Navbar extends Component {
//   constructor(){
//     super();
//     this.state = {
//       show: true,
//     }
//   }
//     render() {

//     return (
//       <div>
//         <div>
//       <nav className="navbar fixed-top navbar-expand-lg">
// <div className="container-fluid">
//       <Link to='/'  className="navbar-brand navs active"> <img src='/images/auditlogo.png' alt=""></img> </Link>
//       <button  onClick={ () => { this.setState({show: !this.state.show})}} className="navbar-toggler border border-info  text-info menufornavbar" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" 
//       aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
// <div class="bar1"></div>
// <div class="bar2"></div>
// <div class="bar3"></div>
//     </button>
//     <div className= {this.state.show ? 'collapse navbar-collapse' : 'collapse navbar-collapse active'  } id="navbarNavAltMarkup">
//         <div className="navbar-nav navs ms-auto ">
//         <Dropdown>
//     <Dropdown.Toggle variant="secondary" id="dropdown-basic" className='dropdownmenunav nav-link navs'>
//    Products
//     </Dropdown.Toggle>

//     <Dropdown.Menu >
//     <Dropdown.Item onClick={() => { this.setState({ show: true }); }}>
//   <Link to="/" state={{ data: { name: "Retail" } }} className="retailtitle">
//     <img alt='' src='/images/retailtitleimg.png' className='links-img'/>
//     <span className='retailname'>Retail</span>
//   </Link>
// </Dropdown.Item>

//       <Dropdown.Item onClick={() => { this.setState({ show: true }); }}>
//       <Link   to="/" state={{ data:{name: "Distribution"} }} className="Distributiontitle">
// <div className='teximg-link'>      

// <Link   to="/" state={{ data:{name: "Distribution"} }} className="Distributiontitle">
// <img alt='' src='/images/distribution.png' className='links-img'/> <span className='retailname'>Distribution</span></Link>
// </div>
//     </Link>

//       </Dropdown.Item>
//       <Dropdown.Item onClick={() => { this.setState({ show: true }); }}>
//       <Link to="/" state={{ data:{name: "Manufacturing"} }} className="Manufacturingtitle">
// <div className='teximg-link'>      

// <Link to="/" state={{ data:{name: "Manufacturing"} }} className="Manufacturingtitle">
// <img alt='' src='/images/manufacture.png' className='links-img'/> <span className='retailname'>Manufacturing</span></Link>
// </div>
//     </Link>
//       </Dropdown.Item>
//     </Dropdown.Menu>
//   </Dropdown>
//         <Link to='/Products' className="nav-link     navs  page-scroll"  onClick={() => { this.setState({ show: true }); }}  >Pricing</Link> 
//         <Link to='/Support' className="nav-link     navs  page-scroll"   onClick={() => { this.setState({ show: true }); }}  >Support</Link> 
//           <Link to='/Service' className="nav-link    navs  page-scroll"  onClick={() => { this.setState({ show: true }); }}  >Services</Link>
//              <Link to='/Contact' className="nav-link navs  page-scroll"  onClick={() => { this.setState({ show: true }); }}  >Contact</Link>
//              <Link to='/Download' className="nav-link navs  page-scroll" onClick={() => { this.setState({ show: true }); }}  >Download</Link>
//              <Sidecontactform/>
//           </div>
//           </div>

//     </div>
//  </nav>
//    </div>
  
//       </div>
//     )
//   }
// }



import {Link} from 'react-router-dom'
import './NavBar.css'
import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';
import Sidecontactform from '../Sidecontactform/Sidecontactform';



export default class Navbar extends Component {
  constructor(){
    super();
    this.state = {
      show: true,
    }
  }
    render() {

    return (
      <div>
        <div>
      <nav className="navbar fixed-top navbar-expand-lg">
<div className="container-fluid">
      <Link to='/'  className="navbar-brand navs active"> <img src='/images/auditlogo.png' alt=""></img> </Link>
      <button  onClick={ () => { this.setState({show: !this.state.show})}} className="navbar-toggler border border-info  text-info menufornavbar" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" 
      aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
<div class="bar1"></div>
<div class="bar2"></div>
<div class="bar3"></div>
    </button>
    <div className= {this.state.show ? 'collapse navbar-collapse' : 'collapse navbar-collapse active'  } id="navbarNavAltMarkup">
        <div className="navbar-nav navs ms-auto ">
        <Dropdown>
    <Dropdown.Toggle variant="secondary" id="dropdown-basic" className='dropdownmenunav nav-link navs'>
   Products
    </Dropdown.Toggle>

    <Dropdown.Menu >
    <Dropdown.Item >
  <Link to="/" state={{ data: { name: "Retail" } }} onClick={() => { this.setState({ show: true }); }} className="retailtitle">
    <img alt='' src='/images/retailtitleimg.png' className='links-img'/>
    <span className='retailname'>Retail</span>
  </Link>
</Dropdown.Item>

      <Dropdown.Item >
      <Link   to="/" state={{ data:{name: "Distribution"} }} onClick={() => { this.setState({ show: true }); }} className="Distributiontitle">
<div className='teximg-link'>      

<Link   to="/" state={{ data:{name: "Distribution"} }} onClick={() => { this.setState({ show: true }); }} className="Distributiontitle">
<img alt='' src='/images/distribution.png' className='links-img'/> <span className='retailname'>Distribution</span></Link>
</div>
    </Link>

      </Dropdown.Item>
      <Dropdown.Item >
      <Link to="/" state={{ data:{name: "Manufacturing"} }} onClick={() => { this.setState({ show: true }); }} className="Manufacturingtitle">
<div className='teximg-link'>      

<Link to="/" state={{ data:{name: "Manufacturing"} }} onClick={() => { this.setState({ show: true }); }} className="Manufacturingtitle">
<img alt='' src='/images/manufacture.png' className='links-img'/> <span className='retailname'>Manufacturing</span></Link>
</div>
    </Link>
      </Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
        <Link to='/Products' className="nav-link     navs  page-scroll"    onClick={() => { this.setState({ show: true }); }}    >Pricing</Link> 
        <Link to='/Support' className="nav-link     navs  page-scroll"     onClick={() => { this.setState({ show: true }); }}    >Support</Link> 
          <Link to='/Service' className="nav-link    navs  page-scroll"    onClick={() => { this.setState({ show: true }); }}    >Services</Link>
             <Link to='/Contact' className="nav-link navs  page-scroll"    onClick={() => { this.setState({ show: true }); }}    >Contact</Link>
             <Link to='/Download' className="nav-link navs  page-scroll"   onClick={() => { this.setState({ show: true }); }}    >Download</Link>
             <Sidecontactform/>
          </div>
          </div>

    </div>
 </nav>
   </div>
  
      </div>
    )
  }
}



