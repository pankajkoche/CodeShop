import React, { useState } from 'react';
import ML from '../../images/ai.png'; // Replace with your ML image path or URL
import WhatYouLearnImage from '../../images/what_you_learn.png'; // Replace with the provided image URL
import { motion } from 'framer-motion';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { FiChevronRight } from 'react-icons/fi'

const CourseInfo = () => {
  const course = {
    title: 'Learn Python: The Complete Python Programming Course',
    description:
      'Learn A-Z everything about Python, from the basics to advanced topics like Python GUI, Python Data Analysis, and more!',
    learn: [
      'Create your own Python programs',
      'Become an experienced Python programmer',
      'Parse the web and create your own games',
      'And much more...',
    ],
    content: [
      {
        title: 'Basics of Low Level Design',
        subtopics: [
          'Introduction to Object-Oriented Programming',
          'Class & Objects, Encapsulation, Inheritance, Abstraction, Polymorphism',
          'Operator overloading, Association, Aggregation, and Composition',
          'Class diagram as a Visual Tool',
          'Procedural vs OO Programming',
        ],
      },
      {
        title: 'Understanding Constructors',
        subtopics: [
          'Default and Parameterized Constructor',
          'Copy Constructor',
          'this Keyword and Operations',
        ],
      },
      {
        title: 'What are UML Diagrams & Types',
        subtopics: [
          'Introduction to UML & Object Diagram',
          'Activity Diagram, Sequence Diagram',
          'State Diagram',
        ],
      },
      {
        title: 'Learning Core Design Principle',
        subtopics: ['SOLID & GRASP', 'DRY & KISS'],
      },
      {
        title: 'Additional Topic 1',
        subtopics: [
          'Subtopic 1',
          'Subtopic 2',
          'Subtopic 3',
          'Subtopic 4',
          'Subtopic 5',
        ],
      },
    ],
  };

  const [showAllSections, setShowAllSections] = useState(false);

  const toggleShowAllSections = () => {
    setShowAllSections(!showAllSections);
  };

  const getSectionsToShow = () => {
    if (showAllSections) {
      return course.content;
    }
    return course.content.slice(0, 4);
  };

  return (
    <div className="mt-5">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full rounded-lg -mt-5" id="home">
        <div className="py-1 flex-1 flex flex-col p-5 pt-6 md:p-8">
          <h1 className="text-3xl  font-bold">{course.title}</h1>
          <p>{course.description}</p>
          <div className="flex mt-4 md:mt-6">
            <div className="mr-4">
              <p className="text-2xl font-bold">{course.offerPrice}</p>
              <p className="text-gray-600 line-through">{course.price}</p>
            </div>
            <button className="bg-orange-400 p-2 rounded-lg font-bold">Buy Course</button>
          </div>
        </div>

        <div className="py-2 flex flex-col relative">
          <motion.img
            src={ML}
            className="ml-auto w-full md:w-60 mx-8 rounded-lg -mb-10 m-2 lg:w-auto h-50 lg:h-60"
            alt="Course"
            whileHover={{ scale: 0.99 }}
          />
        </div>
      </section>

      <div className="mt-10">
        <div className="flex md:flex-row flex-col-reverse items-center justify-center">
          <div className="md:w-1/2">
            <div className="flex items-center justify-center">
              <img
                src={WhatYouLearnImage}
                className="w-[150px] md:w-[300px] "
                alt="What You'll Learn"
              />
            </div>
          </div>

          <div className="md:w-1/2 mt-6 md:mt-0 shadow-md ">
            <div className="bg-transparent p-4">
              <h2 className="text-xl font-bold">What You'll Learn</h2>
              <ul className="list-disc pl-6 mt-4">
                {course.learn.map((item, index) => (
                  <li key={index} className="text-gray-700 mb-2 flex items-center">
                    <AiOutlineCheckCircle className="mr-2 text-green-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-20 md:mx-[160px]">
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <h2 className="text-xl font-bold py-4 px-6 bg-blue-200 text-blue-800">Course Content</h2>
            <div className="mx-auto">
              <table className="w-full">
                <tbody>
                  {getSectionsToShow().map((section, sectionIndex) => (
                    <React.Fragment key={sectionIndex}>
                      <tr className="bg-gray-100">
                        <td className="py-3 px-4 text-gray-700 font-bold" colSpan="2">
                          {section.title}
                        </td>
                      </tr>
                      {section.subtopics.map((subtopic, subIndex) => (
                        <tr
                          key={subIndex}
                          className={subIndex % 2 === 0 ? 'bg-gray-50' : ''}
                        >
                          <td className="py-3 pl-6 pr-2 text-gray-700 flex items-center">
                            <FiChevronRight className="mr-2 text-blue-500" />
                            {subtopic}
                          </td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
              <div className="text-center py-4">
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
                  onClick={toggleShowAllSections}
                >
                  {showAllSections ? 'Show Less' : 'Show More'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseInfo;
