"use client";
import React, { useState } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

const courses = {
  "Spring 2024": [
    ["CMSC424: Database Design", "https://planetterp.com/course/CMSC424"],
    ["CMSC434: Human Computer Interaction", "https://planetterp.com/course/CMSC434"],
    ["CMSC388J: Python and Flask Web Dev.", "https://aspear.cs.umd.edu/388j"],
    ["CMSC320: Intro. to Data Science", "https://cmsc320.github.io/"],
    ["DATA110: App. of R for Data Science", "https://planetterp.com/course/DATA110"],
    ["DATA120: Python Prog. for Data Science", "https://planetterp.com/course/DATA120"],
  ],
  "Fall 2023": [
    ["CMSC451: Design and Analysis of Computer Algorithms", "https://planetterp.com/course/CMSC451"],
    ["CMSC421: Intro. to Artificial Intelligence", "https://planetterp.com/course/CMSC421"],
    ["CMSC335: Web App. Dev. with JavaScript", "https://planetterp.com/course/CMSC335"],
    ["CMSC389T: Intro. to Git, Github and Project Management", "https://planetterp.com/course/CMSC89T"],
    ["CMSC389P: Mastering the PM Interview", "https://planetterp.com/course/CMSC389P"],
  ],
  "Spring 2023": [
    ["CMSC351: Algorithms", "https://planetterp.com/course/CMSC351"],
    ["CMSC330: Org. of Prog. Languages", "https://planetterp.com/course/CMSC330"],
    ["CMSC389O: The Coding Interview", "https://planetterp.com/course/CMSC389O"],
    ["MATH206: Intro. To MATLAB", "https://planetterp.com/course/MATH206"],
    ["MATH241: Calculus III", "https://planetterp.com/course/MATH241"],
  ],
  "Fall 2022": [
    ["CMSC216: Intro. to Computer Systems", "https://planetterp.com/course/CMSC216"],
    ["CMSC250: Discrete Structures", "https://planetterp.com/course/CMSC250"],
    ["MATH240: Intro. to Linear Algebra", "https://planetterp.com/course/MATH240"],
    ["FIRE298: FIRE Semester 3", "https://www.fire.umd.edu/about"],
  ],
  "Summer 2022": [
    ["STAT400: Applied Probability & Statistics I", "https://planetterp.com/course/STAT400"],
  ],
  "Spring 2022": [
    ["CMSC132: Object-Oriented Programming II", "https://planetterp.com/course/CMSC132"],
    ["MATH141: Calculus II", "https://example.com/math141"],
    ["FIRE198: FIRE Semester 2", "https://www.fire.umd.edu/about"],
  ],
  "Fall 2021": [
    ["CMSC131: Object-Oriented Programming I", "https://planetterp.com/course/CMSC131"],
    ["MATH140: Calculus I", "https://planetterp.com/course/MATH140"],
    ["FIRE120: FIRE Semester 1", "https://www.fire.umd.edu/about"],
  ],
};

const RelevantCoursework = () => {
  const [selectedSemester, setSelectedSemester] = useState("Spring 2024");

  return (
    <section className="bg-black text-white py-12" id='coursework'>
      <div className="container mx-auto px-6 lg:px-8">
        <h2 className="text-4xl text-center text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-500 to-yellow-500 mb-12 font-extrabold">Relevant Coursework</h2>
        <div className="flex justify-center space-x-4 overflow-x-auto mb-8">
          {Object.keys(courses).map(semester => (
            <button
              key={semester}
              onClick={() => setSelectedSemester(semester)}
              className={`py-2 px-4 whitespace-nowrap ${selectedSemester === semester ? "text-red-500 border-b-2 font-semibold border-red-500" : "text-white font-semibold hover:text-white transition"}`}
            >
              {semester}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses[selectedSemester].map(([course, link], index) => (
            <a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-black transition duration-300 ease-out border-2 border-gray-900 rounded-lg shadow-md group bg-transparent hover:bg-white hover:text-black"
            >
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-black duration-300 -translate-x-full bg-white group-hover:translate-x-0 ease">
                <FaExternalLinkAlt className="mr-2" />
                {course}
              </span>
              <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">
                <FaExternalLinkAlt className="mr-2" />
                {course}
              </span>
              <span className="relative invisible font-semibold">{course}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelevantCoursework;
