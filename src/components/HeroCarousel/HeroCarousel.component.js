import React from "react";
import HeroSlider from "react-slick";

import {PrevArrow,NextArrow} from "./Arrows.component";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroCarousel = () => {
const settings = {
    arrows: true,
    centerMode:true,
    centerPadding:"150px",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow:<NextArrow />

};
const images = ["https://images.unsplash.com/photo-1642087652645-372a6e46b04a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
"https://images.unsplash.com/photo-1642287002042-4acd1f655432?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60",
"https://images.unsplash.com/photo-1642270076990-8e07f09ee79e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60",
"https://images.unsplash.com/photo-1642358666536-6bcc92facfe0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOXx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60",
"https://images.unsplash.com/photo-1642371556669-2a12e345295d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzN3x8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60",
"https://images.unsplash.com/photo-1642426772879-8a158f2bb47d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"

];
return (
  <>
  <HeroSlider {...settings}>
  {images.map((image) =>(

    <div key={image} className="w-20 h-80 px-2 py-3 ">
    <img scr={image} alt="test-img" className=" rounded-md w-full h-full" />
    </div>
  ))}
  </HeroSlider>
  </>
);
};

export default HeroCarousel;
