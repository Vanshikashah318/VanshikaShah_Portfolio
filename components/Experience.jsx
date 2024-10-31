"use client";
import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaExternalLinkAlt } from 'react-icons/fa';

const experiences = [
  {
    title: 'Software Developer and Analyst @AiVantage',
    date: 'June 2024 - Present',
    description: [
      'Automated personalized email campaigns with Python, enhancing targeting and personalization using LDA and KMeans for data segmentation.',
      'Improved processing efficiency with the Knee library and refined personalization through OpenAI API prompt engineering.',
      'Trained an LSTM and RNN model on 30,000+ inputs for product testing, achieving 89% accuracy in sentiment analysis and reducing manual analysis time by 60%.'
    ],
    links: [],
  },
  {
    title: 'Software Engineer Intern @LeoTechnosoft',
    date: 'May 2024 - Aug 2024',
    description: [
      'Improved database efficiency and quality by developing MySQL queries to eliminate spam bot data.',
      'Streamlined data categorization with optimized MySQL queries, significantly reducing processing time.'
    ],
    links: [],
  },
  {
    title: 'Undergraduate Research Assistant @MIND Lab, University of Maryland, College Park',
    date: 'September 2024 - Present',
    description: [
      'Conducted research in breathing analytics under faculty supervision, analyzing patterns in data collected from wearable breathing devices to derive insights on physiological and health indicators, contributing to advancements in preventative health monitoring and personalized healthcare solutions.',
  
    ],
    links: ["https://mindlab.cs.umd.edu/breathing-analysis"],
  },
  {
    title: 'Software Developer @Umee',
    date: 'October 2024 - Present',
    description: [
      'Creating a newsfeed for users to post, view, and comment, with media (photos/videos) securely stored in S3 and linked through DynamoDB for smooth, scalable access.',
      'Building an interactive commenting system using AWS, integrating GraphQL and AppSync to link and retrieve comments by post ID, ensuring secure storage and efficient fetching for a responsive user experience on the newsfeed.'
  
    ],
    links: [],
  },
  {
    title: 'CMSC330 @University Of Maryland, College Park',
    date: 'Jan 2023 - Present',
    description: [
      'Enhanced learning for over 900 students through office hours, significantly impactingstudent engagement and improving course completion rates. ',
      'Developed and designed multiple projects and course materials in Python, OCaml, and Rust, while also providing support in grading exams and quizzes.',
    ],
  },
  {
    title: 'Undergraduate Compuuter Science Tutor, Iribe Initiative for Diversity and Inclusion',
    date: 'Jan 2022 - Dec 2022',
    description: [
      'Delivered tutoring to students in Java, C, and Assembly language, helping them grasp concepts through clear explanations and practical problem-solving, leading to a substantial improvement in their academic success.',
      'Facilitated group study sessions with a small cohort of students, promoting collaborative learning and enhancing comprehension of course materials.',
    ],
  },
];

const ExperienceCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Next Slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === experiences.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Previous Slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? experiences.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="container mx-auto p-4 bg-gray" id="experience">
      <h2 className="text-5xl text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 mb-4 font-extrabold">
        Experience
      </h2>
      <div className="relative overflow-hidden">
        <div className="flex items-center justify-center space-x-4">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-2 z-10 p-2 bg-transparent rounded-full text-white focus:outline-none"
          >
            <FaChevronLeft size={24} />
          </button>

          {/* Carousel Cards */}
          <div className="flex space-x-6 overflow-x-auto snap-x snap-mandatory scroll-smooth">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className={`${
                  index === currentIndex ? 'block' : 'hidden'
                } min-w-full snap-center transition-all duration-500 ease-in-out transform`}
              >
                <div className="flex-shrink-0 w-full lg:w-1/3 mx-auto">
                  <div className="border border-gray-700 shadow-lg rounded-lg overflow-hidden transition-transform transform">
                    <div className="p-6">
                      <h3 className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-purple-400 font-extrabold mb-4">
                        {experience.title}
                      </h3>
                      <p className="text-gray-400 font-semibold mb-2">
                        {experience.date}
                      </p>
                      <ul className="text-gray-300 font-semibold list-disc list-inside mb-4">
                        {experience.description.map((desc, i) => (
                          <li key={i}>{desc}</li>
                        ))}
                      </ul>
                      {experience.links && (
                        <div className="mt-4">
                          {experience.links.map((link, linkIndex) => (
                            <a
                              key={linkIndex}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-black transition duration-300 ease-out border-2 border-gray-900 rounded-full shadow-md group mb-2 block"
                            >
                              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-black duration-300 -translate-x-full bg-white group-hover:translate-x-0 ease">
                                <FaExternalLinkAlt className="mr-2" />
                                {link.name}
                              </span>
                              <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">
                                <FaExternalLinkAlt className="mr-2" />
                                {link.name}
                              </span>
                              <span className="relative invisible font-extrabold">
                                {link.name}
                              </span>
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-2 z-10 p-2 bg-transparent rounded-full text-white hover:bg-gradient -r from-black to-slate-800 focus:outline-none"
          >
            <FaChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Dots Indicators */}
      <div className="flex justify-center mt-4">
  {experiences.map((_, idx) => (
    <svg
      key={idx}
      onClick={() => setCurrentIndex(idx)}
      className={`cursor-pointer h-6 w-6 mx-2 transition-all duration-500 ease-in-out ${
        currentIndex === idx ? 'fill-purple-300' : 'fill-gray-600'
      }`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.782 1.4 8.175L12 18.896l-7.334 3.849 1.4-8.175L.132 9.21l8.2-1.192z" />
    </svg>
  ))}
</div>
    </div>
  );
};

export default ExperienceCarousel;
