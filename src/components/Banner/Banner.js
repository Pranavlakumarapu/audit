import React, { Component } from "react";
import Slider from "infinite-react-carousel";
import './Banner.css'

class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {settings: {autoplay: true,autoplaySpeed: 2000,duration: 20, wheel: true,arrows:false}};


  }
/* this is banner changes new */
  render() {

    let imgs = [
{ type:"Retail" ,product_sliderimgs :["/bannerimages/retail1.png","/bannerimages/retail2.png","/bannerimages/retail3.png","/bannerimages/book3.png","/bannerimages/dep3.png","/bannerimages/book4.png"]},
{ type:"Distribution" ,product_sliderimgs :["/bannerimages/retail1.png","/bannerimages/retail2.png","/bannerimages/retail3.png","/bannerimages/book3.png","/bannerimages/dep3.png","/bannerimages/book4.png"]},
{ type:"Manufacturing" ,product_sliderimgs :["/bannerimages/retail1.png","/bannerimages/retail2.png","/bannerimages/retail3.png","/bannerimages/book3.png","/bannerimages/dep3.png","/bannerimages/book4.png"]},
]
let filteredData = imgs.filter(item => item.type === this.props.passData);

let slides = filteredData.length > 0 ? filteredData[0].product_sliderimgs : [this.props.passData][0];

  
    const { settings } = this.state;
    return (
      
 <div>
       <Slider {...settings}>
      {
        slides.map((slide, index) => (
          <div key={index}>
          <img alt="" src={slide} className="bannerimage bannercomponent"/>
          </div>
        ))
      }
    </Slider>
 </div>

    );
  }
}

export default Banner;

