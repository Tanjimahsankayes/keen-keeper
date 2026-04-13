import React from 'react';
import { TiHomeOutline } from 'react-icons/ti';
import { RiTimeLine } from "react-icons/ri";
import { LuChartLine } from "react-icons/lu";

import { NavLink } from 'react-router';


const Navbar = () => {
    return (
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl">
            <span className='font-bold' >Keen</span>Keeper
          </a>
        </div>
        <div className="navbar-end gap-2 ">
          <NavLink className="btn"> <span> <TiHomeOutline></TiHomeOutline> </span> Home</NavLink>
          <NavLink className="btn"> <span> <RiTimeLine /> </span> Timeline</NavLink>
          <NavLink className="btn"> <span> <LuChartLine /> </span> States</NavLink>
        </div>
      </div>
    );
};

export default Navbar;