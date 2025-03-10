import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { showErrorToast, showSuccessToast } from "../../utils/toast";

function Footer() {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Loading state

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true); // Start loading

    const serviceID = import.meta.env.VITE_SERVICE_ID; // Replace with your Service ID
    const templateID = import.meta.env.VITE_TEMPLATE_ID; // Replace with your Template ID
    const userID = import.meta.env.VITE_USER_ID; // Replace with your User ID

    const templateParams = {
      to_email: import.meta.env.VITE_TO_EMAIL,
      rating: rating,
      feedback: feedback,
    };

    try {
      await emailjs.send(serviceID, templateID, templateParams, userID);
      showSuccessToast("Thank you for your feedback");
      setRating(0);
      setFeedback("");
    } catch (error) {
      showErrorToast("Internal Server Error");
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

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
            <form
              onSubmit={handleSubmit}
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
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    type="button"
                    key={star}
                    onClick={() => setRating(star)}
                    className={`text-xl ${star <= rating ? "text-yellow-400" : "text-gray-300"
                      } hover:text-yellow-400 transition-colors`}
                    onMouseEnter={() => setRating(star)}
                    onMouseLeave={() => setRating(rating)}
                  >
                    <FaStar />
                  </button>
                ))}
              </div>

              <div>
                <textarea
                  placeholder="Enter your feedback"
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  className="w-[20rem] h-[5.25rem] sm:w-[22rem] sm:h-[6.25rem] border border-black p-5 text-black 
                 [@media(max-width:451px)]:w-[16rem] [@media(max-width:451px)]:h-[5rem]
                 [@media(max-width:355px)]:w-[12rem] [@media(max-width:355px)]:h-[4rem]"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isLoading} // Disable button when loading
                className="w-[8.5rem] h-10 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center"
              >
                {isLoading ? (
                  <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-white"></div>
                ) : (
                  "Submit"
                )}
              </button>
            </form>
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