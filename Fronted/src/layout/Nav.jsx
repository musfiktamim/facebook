import Navleft from "./nav-compo/Navleft";
import Navcenter from './nav-compo/Navcenter';
import Navright from "./nav-compo/Navright";
import { useContext, useEffect } from "react";
import { usercontext } from "../contextapi/index.context";

function Nav() {
  return (
    <div className="flex sticky top-0 z-20 bg-white flex-col md:flex md:flex-row h-16 justify-evenly shadow-md items-center md:justify-between px-2 w-[100%]">
       <Navleft />
       <Navcenter />
       <Navright />
    </div>
  )
}

export default Nav
