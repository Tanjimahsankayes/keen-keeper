import React from 'react';
import { TiHomeOutline } from 'react-icons/ti';
import { RiTimeLine } from "react-icons/ri";
import { LuChartLine } from "react-icons/lu";
import { NavLink } from 'react-router';
import Logo from '../../assets/logo.png'


const Navbar = () => {
    return (
      <div className="navbar bg-base-100 shadow-sm  px-4 flex flex-col md:flex-row md:justify-between md:items-center gap-3">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl">
            <img src={Logo} alt="Logo" />
          </a>
        </div>
        <div className="navbar-center md:navbar-end gap-2 ">
          <NavLink
            to={"/"}
            className={({ isActive }) => `
          btn  ${isActive ? "bg-[#244D3F] text-white " : ""}
          `}
          >
            <span>
              <TiHomeOutline></TiHomeOutline>
            </span>
            Home
          </NavLink>

          <NavLink
            to="/timeline"
            className={({ isActive }) => `
          btn ${isActive ? " bg-[#244D3F] text-white " : ""}
          `}
          >
            <span>
              <RiTimeLine />
            </span>
            Timeline
          </NavLink>
          <NavLink
            to="/states"
            className={({ isActive }) => `
          btn ${isActive ? "bg-[#244D3F] text-white" : ""}
          `}
          >
            <span>
              <LuChartLine />
            </span>
            States
          </NavLink>
        </div>
      </div>
    );
};

export default Navbar;