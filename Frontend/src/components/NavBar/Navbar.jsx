import React from "react";
import Home from "../../assets/home.png";
import Course from "../../assets/course.png";
import Info from "../../assets/info.png";
import Mail from "../../assets/mail.png";

const Navbar = () => {
  return (
    
    //NavBar

    <nav className="bg-[#8d90dc] rounded-t-3xl fixed bottom-0 left-0 w-full custom:bg-[#a3b4dc] custom:static custom:top-0 flex flex-row items-center justify-between px-4 custom:px-12 py-2 custom:py-6 text-white text-lg">

      <h1 className="tracking-[.25rem] cursor-pointer font-bold text-center custom:text-left custom:mr-20">
        <a href="" className="hidden custom:inline">
          ZABCOURSE
        </a>
      </h1>

      {/* NavBar Links */}

      <div className="flex-1 justify-end items-center gap-x-10 tracking-wide font-semibold flex flex-row gap-4 custom:ml-7">

        <a
          href=""
          className="relative group p-2 custom:p-4 transition-all duration-300 text-center w-full custom:w-auto flex items-center justify-center custom:hover:bg-[#4c4d74] rounded-lg"
        >
          <span className="hidden custom:inline">home</span>
          <div className="custom:hidden relative flex items-center justify-center">
            <div className="absolute w-12 h-12 bg-[#4c4d74] bg-opacity-60 rounded-full scale-0 group-hover:scale-100 group-active:scale-125 transition-all duration-300"></div>
            <img src={Home} alt="home icon" className="w-8 relative z-10" />
          </div>
        </a>

        <a
          href=""
          className="relative group p-2 custom:p-4 transition-all duration-300 text-center w-full custom:w-auto flex items-center justify-center custom:hover:bg-[#4c4d74] rounded-lg"
        >
          <span className="hidden custom:inline">course review</span>
          <div className="custom:hidden relative flex items-center justify-center">
            <div className="absolute w-12 h-12 bg-[#4c4d74] bg-opacity-60 rounded-full scale-0 group-hover:scale-100 group-active:scale-125 transition-all duration-300"></div>
            <img
              src={Course}
              alt="course icon"
              className="w-10 relative z-10"
            />
          </div>
        </a>

        <a
          href=""
          className="relative group p-2 custom:p-4 transition-all duration-300 text-center w-full custom:w-auto flex items-center justify-center custom:hover:bg-[#4c4d74] rounded-lg"
        >
          <span className="hidden custom:inline">about</span>
          <div className="custom:hidden relative flex items-center justify-center">
            <div className="absolute w-12 h-12 bg-[#4c4d74] bg-opacity-60 rounded-full scale-0 group-hover:scale-100 group-active:scale-125 transition-all duration-300"></div>
            <img src={Info} alt="info icon" className="w-8 relative z-10" />
          </div>
        </a>
        
        <a
          href=""
          className="relative group p-2 custom:p-4 transition-all duration-300 text-center w-full custom:w-auto flex items-center justify-center custom:hover:bg-[#4c4d74] rounded-lg"
        >
          <span className="hidden custom:inline">contact us</span>
          <div className="custom:hidden relative flex items-center justify-center">
            <div className="absolute w-12 h-12 bg-[#4c4d74] bg-opacity-60 rounded-full scale-0 group-hover:scale-100 group-active:scale-125 transition-all duration-300"></div>
            <img src={Mail} alt="mail icon" className="w-8 relative z-10" />
          </div>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
