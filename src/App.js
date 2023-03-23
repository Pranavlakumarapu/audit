import './App.css';
import React from 'react';
import Contact from './components/Contact/Contact';
import Navbar  from './components/NavBar/Navbar';
import Products from './components/Price/Products';
import {BrowserRouter , Routes, Route  } from "react-router-dom";
import Service from './components/Service/Service';
import Download from './components/Download/Download';
import Home from './components/Menu/Home';
import Menu from './components/Menu/Menu';
import Footer from './components/Footer';
import Edition from './components/Price/Edition';
import Banner from './components/Banner/Banner';
import Productmenu from './components/Menu/Productmenu';
import NoPage from './components/Error/Errorpage';
import Sidecontactform from './components/Sidecontactform/Sidecontactform';
import Support from './components/Support/Support';

function App() {

  return (
 <div>

       <BrowserRouter>
       <Navbar/>
      {/* <Menu/> */}
     
     
      <div className="App">
        <Routes>
        <Route path='/'  element={<Home/>}></Route>
        <Route path='/Products' element={<Products/>}></Route>
        <Route path='/Contact' element={<Contact name="Welcome To Auditsierp"/>}></Route>
        <Route path='/Service' element={<Service/>}></Route>
        <Route path='/Download' element={<Download/>}></Route>
        <Route path='/Edition' element={<Edition/>}></Route>
        <Route path='/Banner' element={<Banner/>}></Route>
        <Route path='/Productmenu' element={<Productmenu/>}></Route>
        <Route path='/Sidecontactform' element={<Sidecontactform/>}></Route>
        <Route path='/Support' element={<Support/>}></Route>
  

        <Route path="*" element={<NoPage />} />
         </Routes>
      </div>
      
 <Footer/>
      </BrowserRouter>
 </div>
    
    
  );
}export default App;

