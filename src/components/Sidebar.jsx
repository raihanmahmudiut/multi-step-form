import React from "react";
import { NavLink, useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation();

  return (
    <div className="font-ubuntu lg:p-5 w-screen lg:w-52 flex flex-row lg:flex-col bg-mobile lg:bg-desktop bg-cover h-[200px] lg:h-[35rem] gap-4 justify-center lg:justify-start">
      
      <div className="flex flex-row items-center gap-2">
        <NavLink
          to="/"
          exact
          className={` py-2 border-2 border-white-300  w-10 h-10 rounded-full text-center ${
            location.pathname === "/" ? "bg-lightBlue" : "bg-transparent"
          } ${
            location.pathname === "/" ? "text-black" : "text-white"
          }`}
        >
          <div>1</div>
        </NavLink>{" "}
        <div className="hidden lg:block"> Step 1<br/> Your info</div>
      </div>

      <div className="flex flex-row items-center gap-2">
        <NavLink
          to="/step2"
          className={` py-2 border-2 border-white-300  w-10 h-10 rounded-full text-center ${
            location.pathname === "/step2" ? "bg-lightBlue" : "bg-transparent"
          } ${
            location.pathname === "/step2" ? "text-black" : "text-white"
          }`}
        >
          <div>2</div>
        </NavLink>{" "}
        <div className="hidden lg:block">Step 2<br/> Select plan</div>
      </div>

      <div className="flex flex-row items-center gap-2">
        <NavLink
          to="/step3"
          className={` py-2 border-2 border-white-300  w-10 h-10 rounded-full text-center ${
            location.pathname === "/step3" ? "bg-lightBlue" : "bg-transparent"
          } ${
            location.pathname === "/step3" ? "text-black" : "text-white"
          }`}
        >
          <div>3</div>
        </NavLink>{" "}
        <div className="hidden lg:block">Step 3<br/> Add-ons</div>
      </div>

      <div className="flex flex-row items-center gap-2">
        <NavLink
          to="/step4"
          className={` py-2 border-2 border-white-300 w-10 h-10 rounded-full text-center ${
            location.pathname === "/step4" ? "bg-lightBlue" : "bg-transparent"
          } ${
            location.pathname === "/step4" ? "text-black" : "text-white"
          }`}
        >
          <div>4</div>
        </NavLink>{" "}
        <div className="hidden lg:block">Step 4<br/> Summary</div>
      </div>
      
    </div>
  );
}

export default Sidebar;
