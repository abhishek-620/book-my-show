import React from "react";
import Slider from "react-slick";

import Poster from "../Poster/poster.component";

const Premiere =() =>{
  const settings = {
    infinity: true,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: false,
    InitialSlide: 0
  };

  const PremiereImages=[
    {
      scr:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00122526-xavthzuprr-portrait.jpg",
      alt:"Premiere Image",
      title:"Dune",
      subtitle:"English",
      isDark:false
    },
    {
      scr:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00122526-xavthzuprr-portrait.jpg",
      alt:"Premiere Image",
      title:"Dune",
      subtitle:"English",
      isDark:false
    },
    {
      scr:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00122526-xavthzuprr-portrait.jpg",
      alt:"Premiere Image",
      title:"Dune",
      subtitle:"English",
      isDark:false
    },
    {
      scr:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00122526-xavthzuprr-portrait.jpg",
      alt:"Premiere Image",
      title:"Dune",
      subtitle:"English",
      isDark:false
    },  {
        scr:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00122526-xavthzuprr-portrait.jpg",
        alt:"Premiere Image",
        title:"Dune",
        subtitle:"English",
        isDark:false
      }
  ];
  return (
    <>
    <Slider {...settings}>
    {PremiereImages.map((image)=>(
      <Poster {...image}/>
    ))}
    </Slider>
    </>

  );
};
export default Premiere;
