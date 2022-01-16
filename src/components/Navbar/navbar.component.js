import React from "react";
import {BiChevronRight} from "react-icons/bi"
const NavSm = () => {
  return(
    <>
    <div>
    <div>
    <h3>It All Starts Here!</h3>
    <span>
    Bhubaneswar <BiChevronRight />
    </span>
    </div>
    </div>
    </>
  )
};

const NavMd = () => {};
const NavLg = () => {};

const Navbar = () => {
  return (
    <>
    <nav>
    <div className="md:hidden">{/*mobile screen*/}
    <NavSm />
    </div>
    <div className="hidden md:flex">{/*tablet screen*/}</div>
    <div className="hidden lg:flex">{/*large screen*/}</div>
    </nav>
    </>
  );
};

export default Navbar;
