// import React, { Component } from "react";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";

import React, { Component } from "react";
// import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import Image1 from "../combined_certificates/01.jpg";
import Image2 from "../combined_certificates/02.jpg";
import Image3 from "../combined_certificates/03.jpg";
import Image4 from "../combined_certificates/04.jpg";
import Image5 from "../combined_certificates/05.jpg";
// import Image6 from "../combined_certificates/06.jpg";
// import Image7 from "../combined_certificates/07.jpg";
// import Image8 from "../combined_certificates/08.jpg";
// import Image9 from "../combined_certificates/09.jpg";
// import Image10 from "../combined_certificates/10.jpg";
// import Image11 from "../combined_certificates/11.jpg";
// import Image12 from "../combined_certificates/12.jpg";
// import Image13 from "../combined_certificates/013.jpg";
// import Image14 from "../combined_certificates/014.jpg";

class SimpleSlider extends Component {
  render() {
    return (
      <Carousel className="max-w-[1000px] mx-auto">
        <div>
          <img src={Image1} alt="Image1" />
          {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
          <img src={Image2} alt="Image1" />
          {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
          <img src={Image3} alt="Image1" />
          {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
          <img src={Image4} alt="Image1" />
          {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
          <img src={Image5} alt="Image1" />
          {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
          <img src={Image1} alt="Image1" />
          {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
          <img src={Image1} alt="Image1" />
          {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
          <img src={Image1} alt="Image1" />
          {/* <p className="legend">Legend 1</p> */}
        </div>
      </Carousel>
    );
  }
}
export default SimpleSlider