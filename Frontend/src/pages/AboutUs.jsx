import React from "react";

const AboutUs = () => {
  
  return (
    <div className="bg-white p-5">
      <div className="overflow-hidden bg-gray-200 rounded-2xl flex justify-center text-center items-center flex-col p-10">
        <h1 className="text-4xl font-bold tracking-wide md:text-6xl p-7 sm:text-5xl">
          About Faculty Reviews
        </h1>
        <h4 className="tracking-wide italic p-3 md:text-2xl text-xl">
          Helping students make informed decisions
        </h4>
      </div>

      <div className="overflow-hidden flex-col bg-gray-200 mt-16 p-10 w-full rounded-xl flex relative md:flex-row items-center gap-5">
        <div className="text-center font-medium text-5xl p-3 flex flex-col md:text-left">
          <h1>
            Our
            <br />
            Mission
          </h1>
        </div>

        <div className="p-3 text-center md:text-right">
          <p className="italic">
            "We created Faculty Reviews to help students choose the right
            teachers based on authentic reviews from peers, rather than relying
            on scattered information from Facebook groups or word of mouth"
          </p>
        </div>
      </div>

      <div className="flex flex-col mt-16 p-10 w-full rounded-xl relative gap-8">
        <div className="">
          <h1 className="text-center font-medium text-5xl p-3">
            Meet Our Team
          </h1>
        </div>

        <div className="flex flex-col md:flex-row justify-evenly items-center gap-8">
          <div className="member1 bg-gray-200 text-blue-600 p-7 rounded-full text-center">
            <h2 className="font-medium text-xl">Muhammad Izhan Waheed</h2>
          </div>
          <div className="member2 bg-gray-200 text-blue-600 p-7 pl-12 pr-12 rounded-full text-center">
            <h2 className="font-medium text-xl">Abubakar Ashrafi</h2>
          </div>
        </div>
      </div>

      <div className="bg-gray-200 mt-20 p-7 rounded-xl">
        <div className="bg-white rounded-xl p-8">
          <h2 className="font-medium text-xl">Get in touch?</h2>
          <p className="text-gray-500 mb-5">
            Have questions or feedback? We'd love to hear from you!
          </p>
          <a
            href="mailto:facultyreviews@gmail.com"
            className="inline-flex items-center text-blue-600 hover:text-blue-800"
          >
            facultyreviews@gmail.com
          </a>
        </div>
      </div>

    </div>
  );
};

export default AboutUs;
