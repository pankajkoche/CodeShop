import React from 'react';
import { motion } from "framer-motion";

const coursesData = [
  {
    title: 'Web Development',
    imageSrc: 'https://miro.medium.com/v2/resize:fit:1200/0*M4bxiCIjcTK-2Xr6.jpeg',
    description: 'Learn to build modern web applications using HTML, CSS, and JavaScript.',
  },
  {
    title: 'Data Science',
    imageSrc: 'https://d1m75rqqgidzqn.cloudfront.net/wp-data/2019/09/11134058/What-is-data-science-2.jpg',
    description: 'Explore the world of data science and gain insights from complex datasets.',
  },
  {
    title: 'Web Development',
    imageSrc: 'https://miro.medium.com/v2/resize:fit:1200/0*M4bxiCIjcTK-2Xr6.jpeg',
    description: 'Learn to build modern web applications using HTML, CSS, and JavaScript.',
  },
  {
    title: 'Data Science',
    imageSrc: 'https://miro.medium.com/v2/resize:fit:1200/0*M4bxiCIjcTK-2Xr6.jpeg',
    description: 'Explore the world of data science and gain insights from complex datasets.',
  },
  {
    title: 'Web Development',
    imageSrc: 'https://miro.medium.com/v2/resize:fit:1200/0*M4bxiCIjcTK-2Xr6.jpeg',
    description: 'Learn to build modern web applications using HTML, CSS, and JavaScript.',
  },
  {
    title: 'Data Science',
    imageSrc: 'https://miro.medium.com/v2/resize:fit:1200/0*M4bxiCIjcTK-2Xr6.jpeg',
    description: 'Explore the world of data science and gain insights from complex datasets.',
  },
  // Add more course data as needed
];

const Courses = () => {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coursesData.map((course, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={course.imageSrc}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">{course.title}</h3>
                <p className="text-gray-700">{course.description}</p>
                <button className="bg-blue-500 text-white  px-4 py-2 mt-4 rounded-lg hover:bg-blue-600">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    );
  };
  
  export default Courses;
