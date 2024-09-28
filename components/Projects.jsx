import React from 'react'
import Image from 'next/image'
import { FaGithub } from 'react-icons/fa'
import { FaExternalLinkAlt } from 'react-icons/fa'

const projects = [
  {
    name: 'Shell Junior',
    image: '/images/shelljr.png',
    description: 'An exploration project where my group and I used machine learning to analyze the PlanetTerp dataset, featuring 26,000 entries. We leveraged Python tools like NumPy and nltk to engineer features and perform sentiment analysis, developing a model that predicts student GPAs with 73% accuracy by considering course levels and sentiment scores from reviews.',
    skills: ['C','Linux'],
    
  },
  {
    name: 'Image Classification',
    image: '/images/CNN.jpg',
    description: 'Developed and trained a CNN model using Keras and TensorFlow to classify images across diverse object categories, such as frogs, cats, dogs, automobiles, and shoes, showcasing proficiency in deep learning techniques.Utilized the Adam optimizer to improve the model\'s performance, achieving high accuracy in object recognition and categorization across multiple categories.',
    githubLink: 'https://github.com/Vanshikashah318/ImageClassification_CNN',
    skills: ['Python', 'Tensorflow', 'Numpy'],

  },
  {
    name: 'Spending Suggestor',
    image: '/images/Spend.jpeg',
    description: 'This project analyzes your transaction histories from CSV files to extract valuable spending insights. By integrating OpenAI’s API, it delivers personalized financial recommendations, helping users make more informed decisions. The backend is designed with a serverless architecture using AWS Lambda for smooth operation, while AWS S3 ensures secure and efficient file storage and retrieval, making the entire process seamless and optimized for cloud-based environments.',
    skills: ['AWS Lambda', 'AWS S3','Python','OpenAI API']
  },
]

const Projects = () => {
  return (
    <div className="container mx-auto p-4 bg-gray" id='projects'>
      <h2 className="text-5xl text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-500 to-blue-500 mb-4 font-extrabold">Projects</h2>
      <p className="text-base font-semibold lg:text-lg text-gray-300 mb-8">
        Here are some of the projects I have worked on.    
     </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="border border-gray-700 shadow-lg rounded-lg overflow-hidden mb-8 transition-transform transform">
            <div className="relative">
              <Image 
                src={project.image} 
                alt={project.name} 
                width={500} 
                height={200} 
                className="w-full h-48 object-cover" 
              />
              <div className="p-6">
                <h2 className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 mb-4 font-extrabold">{project.name}</h2>
                <p className="text-gray-300 mb-4 font-semibold">{project.description}</p>
                <div className="mb-4">
                  {project.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex} 
                      className="inline-block bg-white border border-white text-black font-semibold uppercase text-sm px-3 py-1 rounded-full mr-2 mb-2 transition transform">
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center mt-4">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-100 transition-transform transform hover:scale-110">
                    <FaGithub size={24} />
                  </a>
                  {/* {project.liveDemo && (
                    <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-black transition duration-300 ease-out border-2 border-gray-900 rounded-full shadow-md group">
                      <span className="absolute inset-0 flex items-center justify-center w-full h-full text-black duration-300 -translate-x-full bg-white group-hover:translate-x-0 ease">
                        <FaExternalLinkAlt className="mr-2" />
                        Live Demo
                      </span>
                      <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">
                        <FaExternalLinkAlt className="mr-2" />
                        Live Demo
                      </span>
                      <span className="relative invisible font-extrabold">Live Demo</span>
                    </a>
                  )} */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
