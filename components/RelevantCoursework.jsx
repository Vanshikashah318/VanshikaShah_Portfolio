"use client";
import React, { useState } from 'react';
import { FaExternalLinkAlt, FaChevronDown } from 'react-icons/fa';

const courses = {
  "Fall 2024":[
    ["CMSC416: Parellel Programming"],
    ["CMSC430: Compilers"],
    ["BMGT431: Data Science:Logistic Regression"],
    ["CMSC389P: Mastering the PM Interview"]
  ]
  ,"Spring 2024": [
    ["CMSC414: Networks and Security", "https://planetterp.com/course/CMSC414"],
    ["CMSC420: Data Structures", "https://planetterp.com/course/CMSC420"],
    ["BMGT430: Data Science: Linear Regression"]
  ],
  "Fall 2023": [
    ["CMSC433: Design and Analysis of Computer Algorithms"],
    ["CMSC320: Intro. to Data Science"],
    ["CMSC389T: Intro. to Git, Github and Project Management"]
    
  ],
  "Spring 2023": [
    ["CMSC351: Algorithms", "https://planetterp.com/course/CMSC351"],
    ["CMSC330: Org. of Prog. Languages", "https://planetterp.com/course/CMSC330"],
    ["CMSC389O: The Coding Interview", "https://planetterp.com/course/CMSC389O"],
    ["MATH241: Calculus III", "https://planetterp.com/course/MATH241"],
  ],
  "Fall 2022": [
    ["CMSC216: Intro. to Computer Systems", "https://planetterp.com/course/CMSC216"],
    ["CMSC250: Discrete Structures", "https://planetterp.com/course/CMSC250"],
    ["MATH240: Intro. to Linear Algebra", "https://planetterp.com/course/MATH240"],
  ],
  "Spring 2022": [
    ["CMSC132: Object-Oriented Prog. II", "https://planetterp.com/course/CMSC132"],
    ["MATH141: Calculus II", "https://example.com/math141"]
  ],
  "Fall 2021": [
    ["CMSC131: Object-Oriented Prog. I", "https://planetterp.com/course/CMSC131"],
    ["MATH140: Calculus I", "https://planetterp.com/course/MATH140"]
  ]
};



const RelevantCoursework = () => {
  const [selectedSemester, setSelectedSemester] = useState("Fall 2024");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <section className="bg-gray text-white py-12" id="coursework">
      <div className="container mx-auto px-6 lg:px-8">
        <h2 className="text-4xl text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-pink-600 to-purple-300 mb-12 font-extrabold">
          Relevant Coursework
        </h2>
        <div className="relative mb-8">
          {/* Mobile Dropdown */}
          <button
            onClick={toggleDropdown}
            className="block w-full py-2 px-4 text-left bg-transparent border border-white font-bold text-white rounded-md focus:outline-none focus:ring-3 focus:ring-offset-2 focus:ring-blue-500 lg:hidden flex justify-between items-center"
          >
            {selectedSemester}
          </button>
          {isDropdownOpen && (
            <ul className="absolute z-10 mt-2 w-full bg-black rounded-md shadow-lg">
              {Object.keys(courses).map((semester) => (
                <li key={semester}>
                  <button
                    onClick={() => {
                      setSelectedSemester(semester);
                      setIsDropdownOpen(false);
                    }}
                    className="block w-full py-2 px-4 text-left text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-500"
                  >
                    {semester}
                  </button>
                </li>
              ))}
            </ul>
          )}

          {/* Desktop Tabs */}
          <div className="hidden lg:flex justify-center space-x-4">
            {Object.keys(courses).map((semester) => (
              <button
                key={semester}
                onClick={() => setSelectedSemester(semester)}
                className={`py-2 px-4 whitespace-nowrap ${
                  selectedSemester === semester
                    ? "text-green-500 border-b-2 font-semibold border-green-500"
                    : "text-white font-semibold hover:text-white transition"
                }`}
              >
                {semester}
              </button>
            ))}
          </div>
        </div>

        {/* Coursework Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses[selectedSemester].map(([course, link], index) => (
            <a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center p-4 px-6 py-3 font-medium text-black transition duration-300 ease-out border-2 border-gray-900 rounded-lg shadow-md bg-transparent hover:bg-gray-200 hover:text-black"
            >
              {/* Remove the icons and animations */}
              <span className="relative font-semibold">{course}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelevantCoursework;
