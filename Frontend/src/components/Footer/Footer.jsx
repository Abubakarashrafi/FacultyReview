import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-9 mt-auto pb-20 sm:pb-8 md:pb-5">
      <div className="container mx-auto px-4">
        <div className="justify-between flex flex-col md:flex-col lg:flex-row items-center px:[2.25rem] md:px-[5.5rem] space-y-5 md:space-y-0">
          <div className="space-x-6 flex flex-row justify-center md:lg:flex-col font-semibold text-[2rem] md:text-[3.25rem]  md:space-x-3 lg:space-x-0 md:mb-6">
            <span className="-mb-3 md:-mb-5">Find</span>
            <span className="-mb-3 md:-mb-5">Rate</span>
            <span className="-mb-3 md:-mb-5">Review</span>
          </div>

          <div className="flex flex-col items-center justify-center space-y-5">
           

            <div
              className="flex bg-white flex-col justify-center items-center p-7 rounded-2xl space-y-4 
               w-[26.5rem] h-[18rem] sm:w-[28.5rem] sm:h-[22rem] 
               [@media(max-width:451px)]:w-[18rem] [@media(max-width:451px)]:h-[22rem]
               [@media(max-width:355px)]:w-[16rem] [@media(max-width:355px)]:h-[20rem]"
            >
              <div>
                <p className="text-black font-medium text-xl italic text-center">
                  Your feedback matters!
                </p>
                <p className="text-black text-center">
                  How would you rate your experience with the app?
                </p>
              </div>

              <div className="flex space-x-1">
                <button className="text-xl text-yellow-400 hover:text-yellow-400 transition-colors">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 576 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                  </svg>
                </button>
                <button className="text-xl text-yellow-400 hover:text-yellow-400 transition-colors">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 576 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                  </svg>
                </button>
                <button className="text-xl text-yellow-400 hover:text-yellow-400 transition-colors">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 576 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                  </svg>
                </button>
                <button className="text-xl text-gray-300 hover:text-yellow-400 transition-colors">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 576 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                  </svg>
                </button>
                <button className="text-xl text-gray-300 hover:text-yellow-400 transition-colors">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 576 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                  </svg>
                </button>
              </div>

              <div>
                <textarea
                  placeholder="Enter your feedback"
                  className="w-[20rem] h-[5.25rem] sm:w-[22rem] sm:h-[6.25rem] border border-black p-5 text-black 
                 [@media(max-width:451px)]:w-[16rem] [@media(max-width:451px)]:h-[5rem]
                 [@media(max-width:355px)]:w-[12rem] [@media(max-width:355px)]:h-[4rem]"
                ></textarea>
              </div>

              <button className="w-[8.5rem] h-10 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                Submit
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center text-center">
          <h2 className="text-[2rem] xs:text-[3rem] sm:text-[3rem] md:text-[4rem] lg:text-[6rem] xl:text-[8.25rem] font-bold mb-4">
            FacultyReviews
          </h2>

          <span className="border border-white w-4/5 "></span>

          <p className="text-gray-400 text-sm mt-9">
            &copy; {new Date().getFullYear()} FacultyReviews. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;