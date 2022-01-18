import React from "react";
import {Route} from "react-router-dom";

//import
import MovieLayout from "../layout/Movie.layout";

const Moviehoc = ({component:Component, ...rest}) =>{

  return (
    <>
    <Route
    {...rest}
    component={(props)=>(
      <MovieLayout>
      <Component {...props}/>
      </MovieLayout>
    )}
    />
    </>
  );
};
export default Moviehoc;
