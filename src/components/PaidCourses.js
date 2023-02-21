import React from 'react';
import fullStack from '../images/fullStack.png'
import Game from '../images/game.png'
import DSA from '../images/DSA.png'
import Python from '../images/python.png'
import { AnimatePresence, motion } from "framer-motion";
const PaidCourses = () => {

    return (

        <div className='h-auto'>
            <div>learn with us</div>

            <div className='flex flex-wrap '>

                <motion.div whileHover={{scale:0.90}} className='flex flex-col w-full rounded-lg shadow-md  m-6
                                bg-white w-70 sm:w-52 overflow-hidden'>
                    <img src={fullStack} className=" "/>
                    <p className='text-center '>full stack Development</p>
                    <p className='text-center '>320 RS</p>
                </motion.div>

                <motion.div whileHover={{scale:0.90}}  className='flex flex-col w-full rounded-lg shadow-md  m-6
                                bg-green-200 w-70 sm:w-52 overflow-hidden'>
                    <img src={DSA} className=" "/>
                    <p className='text-center '>DSA</p>
                    <p className='text-center '>320 RS</p>
                </motion.div>
                <motion.div whileHover={{scale:0.90}} className='flex flex-col w-full rounded-lg shadow-md  m-6
                                bg-blue-300 w-70 sm:w-52 overflow-hidden'>
                    <img src={Game} className=""/>
                    <p className='text-center '>Game Development</p>
                    <p className='text-center '>320 RS</p>
                </motion.div>

                <motion.div whileHover={{scale:0.90}}  className='flex flex-col w-full rounded-lg shadow-md  m-6
                                bg-red-200 w-70 sm:w-52 overflow-hidden'>
                    <img src={Python } className=" "/>
                    <p className='text-center '>Python</p>
                    <p className='text-center '>320 RS</p>
                </motion.div>

                

                <motion.div whileHover={{scale:0.90}} className='flex flex-col w-full rounded-lg shadow-md  m-6
                                bg-orange-200 w-70 sm:w-52 overflow-hidden'>
                    <img src={fullStack} className=" "/>
                    <p className='text-center '>full stack Development</p>
                    <p className='text-center '>320 RS</p>
                </motion.div>

                <motion.div whileHover={{scale:0.90}} className='flex flex-col w-full rounded-lg shadow-md  m-6
                                bg-yellow-200 w-70 sm:w-52 overflow-hidden'>
                    <img src={fullStack} className=" "/>
                    <p className='text-center '>full stack Development</p>
                    <p className='text-center '>320 RS</p>
                </motion.div>
            </div>
        </div>
    );
};

export default PaidCourses;