import React, { Component } from "react";
import "~slick-carousel/slick/slick.css";
import "~slick-carousel/slick/slick-theme.css"; 
import Slider from "react-slick";
import Image1 from "../combined_certificates/01.jpg";
import Image2 from "../combined_certificates/02.jpg";
import Image3 from "../combined_certificates/03.jpg";
import Image4 from "../combined_certificates/04.jpg";
import Image5 from "../combined_certificates/05.jpg";
import Image6 from "../combined_certificates/06.jpg";
import Image7 from "../combined_certificates/07.jpg";
import Image8 from "../combined_certificates/08.jpg";
import Image9 from "../combined_certificates/09.jpg";
import Image10 from "../combined_certificates/10.jpg";
import Image11 from "../combined_certificates/11.jpg";
import Image12 from "../combined_certificates/12.jpg";
import Image13 from "../combined_certificates/013.jpg";
import Image14 from "../combined_certificates/014.jpg";


export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <img src={Image1} alt="Image1" />
          </div>
          <div>
            <img src={Image2} alt="Image2" />
          </div>
          <div>
            <img src={Image3} alt="Image3" />
          </div>
          <div>
            <img src={Image4} alt="Image4" />
          </div>
          <div>
            <img src={Image5} alt="Image5" />
          </div>
          <div>
            <img src={Image6} alt="Image6" />
          </div>
          <div>
            <img src={Image7} alt="Image7" />
          </div>
          <div>
            <img src={Image8} alt="Image8" />
          </div>
          <div>
            <img src={Image9} alt="Image9" />
          </div>
          <div>
            <img src={Image10} alt="Image10" />
          </div>
          <div>
            <img src={Image11} alt="Image11" />
          </div>
          <div>
            <img src={Image12} alt="Image12" />
          </div>
          <div>
            <img src={Image13} alt="Image13" />
          </div>
          <div>
            <img src={Image14} alt="Image14" />
          </div>
        </Slider>
      </div>
    );
  }
}
