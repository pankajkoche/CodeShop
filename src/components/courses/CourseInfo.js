import React from 'react';
import ML from '../../images/ai.png'
import { AnimatePresence, motion } from "framer-motion";
const CourseInfo = () => {
    return (
        <div className=''>
        <section
                className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full -mt-5 bg-sky-800 rounded-lg text-white"
                id="home">

            <div className='py-1 flex-1 flex flex-col   p-5 md:p-8'>
                <p className='text-3xl text-bold  '>Learn Python: The Complete Python Programming Course</p>
                <p>Learn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!</p>
                <button className='bg-orange-400 p-2 text-bold rounded-lg'>Buy Course</button> 
            </div>

            <div whileHover={{scale:0.99}} className="py-2 flex flex-col  relative">
            
                    <img
                src={ML}
                className="ml-auto w-full md:w-60 mx-8  rounded-lg shadow-md -mb-10 m-2
                bg-orange-400  lg:w-auto h-50
               lg:h-60" 
                alt="HomeCart"
                />   
            </div>
     
            

      </section>
      
      <div whileHover={{scale:0.99}} className='flex flex-col  shadow-md my-2 px-2 md:mx-[10rem] md:px-14 md:py-8 mt-10
                                bg-white f-full md:w-[700px] overflow-hidden'>
                   <div>
                        <p className='text-2xl text-blue-800 text-bold '>What you'll learn</p>
                        <li className=''>Create their own Python Programs</li>
                        <li className=''>Become an experienced Python Programmer</li>
                        <li className=''>Parse the Web and Create their own Games</li>
                    </div>
                    <div>
                        <button>Buy Course</button>
                    </div>
        </div>

        <div className='flex flex-col  shadow-md my-2 px-2 md:mx-[10rem] md:px-14 py-8
                                bg-white f-full md:w-[700px] overflow-hidden'>
        <p className='text-2xl text-bold '>Course content</p>
        <hr></hr>

        
            <li>Introduction to python</li>
            <li>Python Application</li>
            <li>your first program</li>
            <li>Introduction to python</li>
            <li>Python Application</li>
            <li>your first program</li>
        
            <li>Introduction to python</li>
            <li>Python Application</li>
            <li>your first program</li>
        
            <li>Introduction to python</li>
            <li>Python Application</li>
            <li>your first program</li>
        
        
        </div>
      </div>
    );
};

export default CourseInfo;