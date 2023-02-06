
import React from "react";
import Menulist from './Menulist'
import {useParams,useLocation  } from 'react-router-dom';
import './Home.css';

export default function Home() {
  
const {type} =useParams();
const location = useLocation();


const { data } = location.state && location.state.data ? location.state : { data:{name: "start"} };

  return (
    <div className={data.name}> 
     <Menulist passData={data.name}/>
    </div>


  )
}
