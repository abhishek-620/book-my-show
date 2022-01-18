import React from "react";

const Poster = (props)=>{
  return (
    <>
    <div>
    <div className="h-80">
    <img src={props.src} className="w-full h-full rounded-x1"/>
    </div>


    <h3
    className={`text-lg font-bold ${
      props.isDark ? "text-white" : "text-grey-800"
    }`}
    >
    {props.title}
    </h3>

    <p
    className={`text-sm font-bold ${
      props.isDark ? "text-white" : "text-grey-700"
    }`}
    >
    {props.subtitle}
    </p>
    </div>

    </>
  )
};
export default Poster;
