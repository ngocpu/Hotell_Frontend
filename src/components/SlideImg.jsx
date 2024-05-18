import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'tailwindcss/tailwind.css';
import { images } from '../constant';
import { ArrowLeft, ArrowRight } from 'lucide-react';


const SlideImg = () => {
  const sliderRef = useRef();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="relative w-full h-96" id="slideImg">
      <Slider ref={sliderRef} {...settings}>
        {images.map((image, index) => (
          <div key={index} className="h-full">
            <img src={image.url_data} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <button onClick={onClick} className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10 hover:bg-opacity-50">
      <ArrowRight />
    </button>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button onClick={onClick} className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10 hover:bg-opacity-50">
      <ArrowLeft />
    </button>
  );
};

export default SlideImg;
