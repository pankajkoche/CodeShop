import React from 'react';
import fullStack from '../images/fullStack.png'
import { AnimatePresence, motion } from "framer-motion";
const PaidCourses = () => {

    return (

        <div className='h-screen'>
            <div className='flex  '>
                <div className='flex flex-col rounded-lg shadow-md  m-6
                                bg-white w-70'>
                    <img src={fullStack} className="h-20 w-40 m-5 "/>
                    <p className='text-center '>full stack Development</p>
                    <p className='text-center '>320 RS</p>
                </div>
            </div>
        </div>
    );
};

export default PaidCourses;