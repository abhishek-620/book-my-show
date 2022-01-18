import React from "react";

import EntertainmentCardSlider from "../components/Entertainment/Entertainment.card.component";
import Premiere from "../components/Premiere/Premiere.component";
const HomePage =()=>{
  return (
    <>
    <div className="container mx-auto px-12">
    <h1 className="text-2x1 font-bold text-gray-900 my-3">
    The best of Entertainment
    </h1>
    <EntertainmentCardSlider />
    <Premiere />
    </div>
    </>

  );
};

export default HomePage;
