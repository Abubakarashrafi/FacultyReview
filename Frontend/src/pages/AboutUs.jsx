import React from "react";
import Navigation from "../components/TeacherDetail/Navigation";
import { CiServer } from "react-icons/ci";
import { IoColorPaletteOutline } from "react-icons/io5";
import { GoDatabase } from "react-icons/go";
import { IoCodeOutline } from "react-icons/io5";
import { IoGlobeOutline } from "react-icons/io5";
import { LuGithub, LuLinkedin, LuMail } from "react-icons/lu";
import { Link } from "react-router";
const AboutUs = () => {
    const CardIcons = {
        1: [
            { icon: <CiServer />, name: "Backend" },
            { icon: <IoColorPaletteOutline />, name: "Frontend" },
            { icon: <GoDatabase />, name: "Database"},
        ],
        2: [
            { icon: <IoColorPaletteOutline />, name: "UI Design" },
            { icon: <IoCodeOutline />, name: "React" },
            { icon: <IoGlobeOutline />, name: "User Experience" },
        ],
    };

    const socialIconsCard1 = [
        { icon: <LuGithub size={20} />, link: "https://github.com/Abubakarashrafi" },
        { icon: <LuLinkedin size={20} />, link: "https://www.linkedin.com/in/abu-bakar-/"},
        { icon: <LuMail size={20} />, link: "mailto:abubakar16350@gmail.com"},
    ];

    const socialIconsCard2 = [
        { icon: <LuGithub size={20} />, link: "https://github.com/izhan77"},
        { icon: <LuLinkedin size={20} />, link: "https://www.linkedin.com/in/izhan7/" },
        { icon: <LuMail size={20} />, link: "mailto:user2@example.com"},
    ];
        
    

    return (
     <div className="container py-20">
        <Navigation text={"Back to Home"}/>
        <div className="max-w-4xl mx-auto">

        <div className="text-center py-10 mb-12">
               <h1 className="sm:text-4xl md:text-5xl mb-4 text-3xl font-semibold tracking-tighter">About FacultyReview</h1>
                    <p className="text-lg max-w-2xl mx-auto text-gray-600">FacultyReview is a platform designed to help students make informed decisions by providing honest and constructive feedback about their professors.</p>
        </div>
        <div className="border rounded-lg border-gray-300 mb-12">
            <div className="p-6 space-y-2">
                <p className="text-2xl font-medium">Our Mission</p>
                        <p className="text-sm text-gray-500">Empowering students through transparent faculty reviews</p>
                        <div className="space-y-4 pt-4">

                            <p className="text-sm">FacultyReview was created to help students choose the right teachers based on authentic reviews from peers, rather than relying on scattered information from Facebook groups or word of mouth</p>
                            <p className="text-sm">Our platform allows students to rate professors across multiple criteria, including teaching quality, grading fairness, and workload. By sharing experiences, students can make more informed decisions about their education.</p>
                        </div>
        </div>
            </div>
                        <div className="">
                            <h2 className="text-2xl mb-6 font-semibold text-center">Meet the Team</h2>
                            <div className="grid md:grid-cols-2  gap-8 mb-12">
                                <div className="border  border-gray-300">
                                <AboutUsCard 
                                name={"Abu Bakar"} 
                                stack={"Full Stack Developer"}
                                description={"Abu Bakar led the full-stack development of FacultyReview, architecting the application from the ground up. He implemented the core functionality, database design, and API integrations while also contributing to the frontend development."}
                                icons={CardIcons[1]} socialIcons={socialIconsCard1}/>

                          
                            
                        
                               
                                </div>
                                <div className="border border-gray-300">
                                <AboutUsCard 
                                name={"Izhan"}
                                stack={"Frontend Developer"}
                                description={"Izhan focused on creating an intuitive and responsive frontend for FacultyReview. He designed and implemented several key pages, ensuring a seamless user experience with attention to detail in the interface design and interactions."}
                                icons={CardIcons[2]} socialIcons={socialIconsCard2}/>
                                </div>
                            </div>
                        </div>
                        <div className="border border-gray-300">
                    <div className="p-6 space-y-2">
                        <p className="text-2xl font-medium">Technology Stack</p>
                        <p className="text-sm text-gray-500"> Built with modern web technologies"</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4   px-6 gap-4 mb-4">
                        <StackCard
                        title={"React.js"}
                        description={"Frontend"}
                        children={<svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-6 w-6 text-blue-600"
                        >
                            <path d="M0 0h24v24H0z" stroke="none" />
                            <path d="M12 9h.01" />
                            <path d="M11 12h1v4h1" />
                            <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9-9 9-9-1.8-9-9 1.8-9 9-9z" />
                        </svg>}/>

                        <StackCard title={"Tailwind CSS"}
                        description={"Styling"}
                            children={<svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-6 w-6 text-blue-600"
                            >
                                <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
                                <path d="M16 8 2 22" />
                                <path d="M17.5 15H9" />
                            </svg>}
                        />
                            
                        

                        <StackCard
                        title={"Express.js"}
                        description={"Backend"}
                            children={<svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-6 w-6 text-blue-600"
                            >
                                <path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6" />
                                <path d="M2 20h.01" />
                            </svg>}
                        />

                    <StackCard
                    title={"Postgre SQL"}
                    description={"Database"}
                            children={<svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-6 w-6 text-blue-600"
                            >
                                <path d="M3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2z" />
                                <path d="M3 10h18" />
                                <path d="M10 3v18" />
                            </svg>}
                    />
                    </div>
                        </div>
        </div>
     </div>
    );
};

export default AboutUs

const AboutUsCard = ({icons,socialIcons,name,stack,description})=>{
    return(

        <div className="flex flex-col my-10  justify-center items-center">
            <div className="w-24 h-24 border-2 border-blue-600/70 bg-gray-200 rounded-full">
            </div>
            <div className="text-center my-4">
                <p className="text-2xl font-semibold">{name}</p>
                <p className="text-lg text-gray-500">{stack}</p>
            </div>
                <div className="flex flex-wrap items-center justify-center space-y-1 px-1 gap-2">
                {icons?.map((icon,index)=>(

                <div key={index} className="bg-blue-600/10 gap-1  shrink-0  px-3 py-1 rounded-full flex items-center">
                    {icon?.icon}
                    <span className="text-xs font-medium">{icon?.name}</span>
                </div>
                ))}
                </div>
                <p className="text-center  p-6">{description}</p>
                <div className="h-px bg-gray-200 w-[85%] mx-auto"></div>
                 
                 <div className="flex gap-x-6 items-center mt-6"> 
                {socialIcons.map((icon,index)=>(
                    <Link
                    target="_blank"
                        rel="noopener noreferrer"
                    to={icon.link}>
                    <button
                    
                    key={index} className="hover:bg-blue-50 rounded-full w-8 h-8 items-center flex  justify-center ">
                         {icon.icon}   
                    </button>
                        </Link>
                ))}
                </div>
                <div>
                    
                </div>
        </div>
        )
}


const StackCard = ({children,title,description})=>{
    return (
        <div className="flex flex-col items-center p-4 bg-slate-50 rounded-lg">
            <div className="bg-blue-600/10 p-3 rounded-full mb-3">
               {children}
            </div>
            <h3 className="font-medium text-center">{title}</h3>
            <p className="text-xs text-center text-gray-500 mt-1">{description}</p>
        </div>
    )
}