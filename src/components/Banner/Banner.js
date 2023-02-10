import React, { Component } from "react";
import Slider from "infinite-react-carousel";
import './Banner.css'

class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      settings: {
        autoplay: true,
        autoplaySpeed: 2000,
        duration: 30,
        wheel: true,
        arrows:false
      }
    };
  }
/* this is banner changes new */
  render() {
    const { settings } = this.state;
    return (

      <Slider {...settings}>
     <div>
      <img alt="" src="/images/Banner1.png" className="bannerimage bannercomponent"/>
     </div>
     <div>
   <img alt="" src="/images/banner2.png" className="bannerimage bannercomponent"/>
     </div>
     <div>
    <img alt="" src="/images/banner3.png" className="bannerimage bannercomponent"/>
     </div>
     <div>
     <img alt="" src="/images/banner4.png" className="bannerimage bannercomponent"/>
     </div>
     <div>
     <img alt="" src="/images/banner5.png" className="bannerimage bannercomponent"/>
     </div>
   </Slider>
    );
  }
}

export default Banner;
