 import {Link} from 'react-router-dom'
import './NavBar.css'
import React, { Component } from 'react';

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
<div className="container">
      <Link to='/'  className="navbar-brand navs active"> <img src='/images/auditlogo.png' alt=""></img> </Link>
      <button onClick={ () => { this.setState({show: !this.state.show})}} className="navbar-toggler border border-info  text-info menufornavbar" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" 
      aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
<div class="bar1"></div>
<div class="bar2"></div>
<div class="bar3"></div>
    </button>
    <div className= {this.state.show ? 'collapse navbar-collapse' : 'collapse navbar-collapse active'  } id="navbarNavAltMarkup">
        <div className="navbar-nav navs ms-auto ">
        <Link to='/Products' className="nav-link     navs  page-scroll">Pricing</Link> 
          <Link to='/Service' className="nav-link    navs  page-scroll">Services</Link>
             <Link to='/Contact' className="nav-link navs  page-scroll">Contact</Link>
             <Link to='/Download' className="nav-link navs  page-scroll">Download</Link>
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



