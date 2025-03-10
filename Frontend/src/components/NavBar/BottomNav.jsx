import React from "react";
import { NavLink } from "react-router";
import { IoMdAdd } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { CiCircleInfo } from "react-icons/ci";
const BottomNav = () => {
    return (


        <div class="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 ">
            <div class="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
                <button type="button" class="inline-flex flex-col items-center justify-center px-5 border-gray-200 border-x hover:bg-gray-50  group ">
                    <svg class="w-5 h-5 mb-2 text-gray-500  group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                    </svg>
                    <span class="text-sm text-gray-500  group-hover:text-blue-600 ">Home</span>
                </button>
                <button type="button" class="inline-flex flex-col items-center justify-center px-5 border-e border-gray-200 hover:bg-gray-50  group ">
                  <IoMdAdd size={30}/>
                    <span class="text-sm text-gray-500  group-hover:text-blue-600 dark:group-hover:text-blue-500">Add</span>
                </button>
                <button type="button" class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 border-e space-y-1  group">
                  <FaUser size={20}/>
                    <span class="text-sm text-gray-500  group-hover:text-blue-600 dark:group-hover:text-blue-500">Reviews</span>
                </button>
                <button type="button" class="inline-flex flex-col items-center justify-center px-5 border-gray-200 hover:bg-gray-50  group border-x ">
                    <CiCircleInfo size={25}/>
                    <span class="text-sm text-gray-500  group-hover:text-blue-600 dark:group-hover:text-blue-500">About Us</span>
                </button>
            </div>
        </div>

    );
};

// Reusable NavButton Component
const NavButton = ({ to, name, children }) => {
    return (
        <NavLink to={to} end>
            {({ isActive }) => (
                <button
                    type="button"
                    className={`inline-flex flex-col items-center justify-center px-5 border-gray-200 border-x hover:bg-gray-50 rounded-lg transition-colors ${isActive ? "text-blue-600" : "text-gray-500"
                        }`}
                >
                    {children}
                    <span className="text-sm text-gray-500 group-hover:text-blue-600">{name}</span>
                </button>
            )}
        </NavLink>
    );
};

export default BottomNav;