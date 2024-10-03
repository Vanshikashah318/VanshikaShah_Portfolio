import React from 'react'
import Image from 'next/image';

const education = [
  ["University of Maryland, College Park (2021 - 2025)", "/images/umd.png", "https://umd.edu/"], 
  ["St Mary's School, Pune", "/images/smslogo.jpeg", "https://www.smspune.com/"]
];

const Education = () => {
  return (
    <div className="py-16 w-full">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {education.map(([ed, image, link], index) => (
            <div key={index} className="px-2">
              <a href={link} className="block" target='_blank' rel="noopener noreferrer">
                <div className="flex items-center bg-transparent border border-white text-white p-6 rounded-lg shadow-lg transition transform hover:scale-105 hover:text-white hover:shadow-2xl">
                  <Image src={image} alt={ed} width={50} height={50} className="rounded-full mr-4" />
                  <h3 className="text-lg text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-pink-400 to-purple-300 font-extrabold">{ed}</h3>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Education
