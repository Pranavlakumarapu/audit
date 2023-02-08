import './App.css';
import React from 'react';
import Contact from './components/Contact';
import Navbar  from './components/Navbar';
import Products from './components/Products';
import {BrowserRouter , Routes, Route  } from "react-router-dom";
import Service from './components/Service2';
import Download from './components/Download';
import Home from './components/Home';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Edition from './components/Edition';
import Banner from './components/Banner';
function App() {

  return (
 <div>
       <BrowserRouter>
      <Navbar/>
      <Banner/>
      <Menu/>
     
 
      

      <div className="App">
        <Routes>
        <Route path='/'  element={<Home/>}></Route>
        <Route path='/Products' element={<Products/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
        <Route path='/Service' element={<Service/>}></Route>
        <Route path='/Download' element={<Download/>}></Route>
        <Route path='/Edition' element={<Edition/>}></Route>
        <Route path='/Banner' element={<Banner/>}></Route>
         </Routes>
      </div>
      
 <Footer/>
      </BrowserRouter>
 </div>
    
    
  );
}export default App;

