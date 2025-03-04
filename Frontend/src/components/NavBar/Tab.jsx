import React from "react";
import { NavLink } from "react-router-dom"; // Fix incorrect import

function NavTab({ text, to, className }) {
  return (
    <NavLink to={to} className={({ isActive }) =>
      `text-sm transition-all duration-300 text-slate-500 hover:text-[#2563EB] font-medium ${
        isActive ? "text-[#2563EB] font-bold" : ""
      } ${className}`
    }>
      {text}
    </NavLink>
  );
}

export default NavTab;
