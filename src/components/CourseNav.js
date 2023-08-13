import React from 'react';
import {Link} from 'react-router-dom'
const CourseNav = () => {
    return (
        <div className='w-full h-[40px] md:mt-[56px] mt-[60px] bg-gray-500 shadow-lg
         flex items-center justify-center md:gap-5 z-10 fixed text-white'>
            <ul
              className={`flex items-center w-full md:w-auto`}
            >
              <li className="my-2 md:my-0 md:mx-2 text-white ">
                <Link
                  to="/dsa"
                  className="block text-white hover:text-gray-900 px-2 py-1 rounded transition duration-300"
                >
                  DSA 
                </Link>
              </li>
              <li className="my-2 md:my-0 md:mx-2 ">
                <Link
                  to="/python"
                  state={{id:1}}
                  className="block text-white hover:text-gray-900 px-2 py-1 rounded transition duration-300"

                >
                  Python
                </Link>
              </li>
              <li className="my-2 md:my-0 md:mx-2 ">
                <Link
                  to="/java"
                  className="block text-white hover:text-gray-900 px-2 py-1 rounded transition duration-300"
                >
                  Java
                </Link>
              </li>
              <li className="my-2 md:my-0 md:mx-2 ">
                <Link
                  to="/dsa"
                  className="block text-white hover:text-gray-900 px-2 py-1 rounded transition duration-300"
                >
                  Projects 
                </Link>
              </li>
              <li className="my-2 md:my-0 md:mx-2 ">
                <Link
                  to="/dsa"
                  className="block text-white hover:text-gray-900 px-2 py-1 rounded transition duration-300"
                >
                  Interview Preparation
                </Link>
              </li>
              <li className="my-2 md:my-0 md:mx-2 ">
                <Link
                  to="/g/problems/add-two-Numbers"
                  className="block text-white hover:text-gray-900 px-2 py-1 rounded transition duration-300"
                >
                  Problems
                </Link>
              </li>
        </ul>
            
        </div>
    );
};

export default CourseNav;