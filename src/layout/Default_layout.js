import React from "react";
import Navbar from "../components/Navbar/navbar.component.js";
const DefaultLayout =(props) =>{
  return(
    <div>
    <Navbar />
    {props.children}
    </div>
  );
};
export default DefaultLayout;
