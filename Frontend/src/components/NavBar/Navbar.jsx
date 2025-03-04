import React from 'react';
import { NavLink } from 'react-router-dom';
import NavTab from './Tab';
import BottomNav from './BottomNav'; 

function Navbar() {
  return (
    <div className="w-full bg-white">
      <nav className="bg-white container">
        <div className="flex justify-between items-center h-16">
          <p className="font-semibold text-xl">Faculty Reviews</p>

          <div className="hidden md:flex gap-6 items-center justify-center">
            <NavTab className={""} text={"Home"} to="/" />
            <NavTab className={""} text={"Add Reviews"} to="/add-reviews" /> 
            <NavTab className={""} text={"My Reviews"} to="/my-reviews" />
            <NavTab className={""} text={"About Us"} to="/about" />
            <NavLink to="/admin" className="text-sm transition-colors text-slate-500 hover:text-[#2563EB] font-medium">
              Admin
            </NavLink>
          </div>
        </div>

        
        <div className="sm:hidden z-50 fixed inset-x-0 bottom-0 bg-white">
          <BottomNav />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
