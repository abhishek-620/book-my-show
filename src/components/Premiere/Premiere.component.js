import React from "react";
import Slider from "react-slick";

import Poster from "../Poster/poster.component";

const Premiere =(props) =>{
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
      subtitle:"English"

    },
    {
      scr:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00122526-xavthzuprr-portrait.jpg",
      alt:"Premiere Image",
      title:"Dune",
      subtitle:"English"

    },
    {
      scr:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00122526-xavthzuprr-portrait.jpg",
      alt:"Premiere Image",
      title:"Dune",
      subtitle:"English"
    },
    {
      scr:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00122526-xavthzuprr-portrait.jpg",
      alt:"Premiere Image",
      title:"Dune",
      subtitle:"English"
    },  {
        scr:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00122526-xavthzuprr-portrait.jpg",
        alt:"Premiere Image",
        title:"Dune",
        subtitle:"English"
      }
  ];
  return (
    <>
    <div className="flex flex-col items-start gap-1 py-4">
    <h3 className="text-white text-xl font-bold">Premieres</h3>
    <p className="text-white text-sm">Brand New releases every friday</p>
    </div>
    <Slider {...settings}>
    {props.PremiereImages.map((image)=>(
      <Poster {...image} isDark/>
    ))}
    </Slider>
    </>

  );
};
export default Premiere;
