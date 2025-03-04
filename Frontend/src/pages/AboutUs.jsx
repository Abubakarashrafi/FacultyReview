import React from "react";
import { motion } from "framer-motion";
import {
  GitlabIcon as GitHub,
  Linkedin,
  Mail,
  Star,
  Users,
  Search,
} from "lucide-react";
import FaLinkedin from "../assets/linkedin.png";
import { Typewriter } from "react-simple-typewriter";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            <Typewriter
              words={["About Faculty Reviews"]}
              loop={1}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
            />
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            <Typewriter
              words={[
                "Helping students make informed decisions about their education journey.",
                "Empowering students with transparent and constructive feedback.",
                "Built by students, for students."
              ]}
              loop={1}
              cursor
              cursorStyle="|"
              typeSpeed={50}
              deleteSpeed={30}
            />
          </p>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gray-100 shadow-2xl rounded-2xl overflow-hidden mb-16"
        >
          <div className="px-6 py-8 sm:p-10">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-gray-600 text-lg text-center">
              We created Faculty Reviews to help students choose the right
              teachers based on authentic reviews from peers, rather than
              relying on scattered information from Facebook groups or word of
              mouth. Our platform provides transparent, detailed, and
              constructive feedback to empower students in making informed
              decisions about their academic journey.
            </p>
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Team Member 1 */}
            <div className="bg-gray-100 shadow-2xl rounded-2xl shadow-lg overflow-hidden">
              <div className="p-8">
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <div className="w-28 h-28 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-3xl font-bold text-blue-600">
                      MIW
                    </span>
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="text-2xl font-bold text-gray-900">
                      Muhammad Izhan Waheed
                    </h3>
                    <p className="mt-2 text-lg text-gray-600">Developer</p>
                    <div className="mt-4 flex flex-wrap justify-center sm:justify-start gap-3">
                      <a
                        href="https://www.linkedin.com/in/izhan7/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 hover:bg-blue-200 transition-colors"
                      >
                        <img
                          src={FaLinkedin}
                          className="w-7"
                          alt="linkedin icon"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-gray-100 shadow-2xl rounded-2xl shadow-lg overflow-hidden">
              <div className="p-8">
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <div className="w-28 h-28 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-3xl font-bold text-indigo-600">
                      AA
                    </span>
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="text-2xl font-bold text-gray-900">
                      Abubakar Ashrafi
                    </h3>
                    <p className="mt-2 text-lg text-gray-600">
                      Founder & Developer
                    </p>
                    <div className="mt-4 flex flex-wrap justify-center sm:justify-start gap-3">
                      <a
                        href="https://www.linkedin.com/in/abu-bakar-111a2125a/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 hover:bg-blue-200 transition-colors"
                      >
                        <img
                          src={FaLinkedin}
                          className="w-7"
                          alt="linkedin icon"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-100 shadow-2xl rounded-xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Detailed Reviews
              </h3>
              <p className="text-gray-600">
                Comprehensive rating system with multiple evaluation criteria
                including grading fairness, attendance strictness, workload
                balance, and teaching effectiveness.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-100 shadow-2xl rounded-xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Community Driven
              </h3>
              <p className="text-gray-600">
                Built by students, for students. Our platform encourages honest
                and constructive feedback to help build a supportive academic
                community.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-100 shadow-2xl rounded-xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Easy Discovery
              </h3>
              <p className="text-gray-600">
                Find and compare teachers quickly with our intuitive search and
                filtering system. Make informed decisions based on what matters
                most to you.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-gray-100 shadow-2xl rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="px-6 py-8 sm:p-10 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Get In Touch
            </h2>
            <p className="text-gray-600 mb-8">
              Have questions, suggestions, or feedback? We'd love to hear from
              you!
            </p>
            <a
              href="mailto:contact@facultyreviews.com"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
