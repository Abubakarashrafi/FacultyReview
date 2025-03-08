import React from "react";
import { Link, NavLink } from "react-router";

const BottomNav = () => {
    return (
        <div className="fixed inset-x-0  bottom-0 bg-white border-t border-gray-200 shadow-lg">
            <div  className="grid grid-cols-4 max-w-lg mx-auto items-center p-1">
                
                <NavButton 
                to={"/"}
                name="Home">
                    <svg
                        className="w-6 h-6 text-gray-500 group-hover:text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        />
                    </svg>
                </NavButton>

               
                <NavButton 
                to={"/add-review"}
                name="Add">
                    <svg
                        className="w-6 h-6 text-gray-500 group-hover:text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 4v16m8-8H4"
                        />
                    </svg>
                </NavButton>
                    
               
                <NavButton 
                to={"/My-review"}
                name="Reviews">
                    <svg
                        className="w-6 h-6 text-gray-500 group-hover:text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                    </svg>
                </NavButton>

              
                <NavButton 
                to={"/about-us"}
                name="About Us">
                    <svg
                        className="w-6 h-6 text-gray-500 group-hover:text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                </NavButton>
            </div>
        </div>
    );
};


const NavButton = ({ name, children, to }) => {
    return (
        <NavLink to={to} end>
            {({ isActive }) => (
                <button
                    type="button"
                    className={`inline-flex flex-col items-center justify-center px-2 py-1 hover:bg-gray-100 group ${isActive ? "text-blue-600" : "text-gray-500"
                        }`}
                >
                    {children}
                    <span
                        className={`text-xs whitespace-nowrap ${isActive ? "text-blue-600" : "text-gray-500 group-hover:text-blue-600"
                            }`}
                    >
                        {name}
                    </span>
                </button>
            )}
        </NavLink>
    );
};

export default BottomNav;