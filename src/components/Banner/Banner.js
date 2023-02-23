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

    const imgs = [
{ type:"Retail" ,slides :["/images/Banner1.png","/images/banner2.png"]},
{ type:"Distribution" ,slides :["/images/banner3.png","/images/banner4.png"]},
{ type:"Manufacturing" ,slides :["/images/banner5.png","/images/Banner1.png"]}
]
console.log(this.props.passData);
const filteredData = imgs.filter(item => item.type === this.props.passData);
const slides = filteredData.length > 0 ? filteredData[0].slides : [];

    const { settings } = this.state;
    return (
      <Slider {...settings}>
      {
        slides.map((slide, index) => (
          <div key={index}>
            <img alt="" src={slide} className="bannerimage bannercomponent"/>
            <p>{slide}</p>
          </div>
        ))
      }
    </Slider>

    );
  }
}

export default Banner;
