import React from "react";
import {Route} from "react-router-dom";

//import
import DefaultLayout from "../layout/Default_layout";
const Defaulthoc = ({component:Component, ...rest}) =>{

  return (
    <>
    <Route
    {...rest}
    component={(props)=>(
      <DefaultLayout>
      <Component {...props}/>
      </DefaultLayout>
    )}
    />
    </>
  );
};
export default Defaulthoc;
