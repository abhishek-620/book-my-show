import React from "react";

import EntertainmentCardSlider from "../components/Entertainment/Entertainment.card.component";
import Premiere from "../components/Premiere/Premiere.component";
const HomePage =()=>{
  return (
    <>
    <div className="flex flex-col gap-9">
    <div className="container mx-auto px-32">
    <h1 className="text-2x1 font-bold text-gray-900 my-3">
    The best of Entertainment
    </h1>
    <EntertainmentCardSlider />
    </div>

    <div className="bg-bms-700 py-16">
    <div className="mx-auto px-32 container">

    <img
    src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
    alt="Premiere Rupay"
    className="w-full h-full"
    />
    </div>
  <div>
    <Premiere />
    </div>
    </div>
    </div>
    </>

  );
};

export default HomePage;
