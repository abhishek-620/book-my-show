import React from "react";
import HeroSlider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroCarousel = () => {
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};
const images = ["https://images.unsplash.com/photo-1642087652645-372a6e46b04a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"];
return (
  <>
  <HeroSlider {...settings}>
  {images.map((image) =>(

    <div className="w-20 h-80">
    <img scr={image} alt="test-img" className="w-full h-full" />
    </div>
  ))}
  </HeroSlider>
  </>
);
};

export default HeroCarousel;
