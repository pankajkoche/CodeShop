
import React, {useState} from 'react';

import {Link} from 'react-router-dom'
import { AnimatePresence, motion } from "framer-motion";
import {GiHamburgerMenu} from 'react-icons/gi'
import {ImCross} from 'react-icons/im'
import {MdShoppingCart} from 'react-icons/md'


const Header = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    const handleClose =()=> setNav(!nav)

  return (
    <div className='w-screen md:h-[56px] h-[60px]  z-20 bg-green-300 fixed drop-shadow-lg'>
      <div className=' flex justify-between items-center w-full h-full'>  
        <div className='flex items-center'>
            <div>
        <Link to={'/'} className='flex item-center gap-2 px-3'>
                
            <p className='text-headingColor text-xl font-bold '>CodeShop</p>
            </Link>
            </div>
        </div>
        <div  className='ml-auto mr-2'>
        <motion.ul 
                initial={{opacity:0,x:200}} 
                animate={{opacity:1, x:0}}
                exit={{opacity:0,x:200}}  className='hidden md:flex  text-sm items-center gap-6 '>
          <li><Link to="/" smooth={true} duration={500}>Home</Link></li>
          <li><Link to="/products" smooth={true} offset={-50} duration={500}>Product</Link></li>
          <li><Link to="/about" smooth={true} offset={-100} duration={500}>About Us</Link></li>
          <li><Link to="/contact" smooth={true} offset={-50} duration={500}>Contact</Link></li>
          </motion.ul >
        </div>
        
        <div className='hidden md:flex pr-4'>
        <motion.div className='relative flex items-center justify-center px-2' >
                <MdShoppingCart/> 
                <div className='w-5 h-5 rounded-full bg-red-500 flex items-center justify-center'>
                <p className='text-xs text-white font-semibold'>2</p>
                </div>
           </motion.div>
           <Link to="/login">
           <button className=' rounded-md px-3 py-1 mr-4 bg-orange-600'>
            Sign In
          </button>
          
           </Link>
        
        </div>
        <div className='md:hidden mr-4' onClick={handleClick}>
            {!nav ? <GiHamburgerMenu className='w-5' /> : <ImCross className='w-5' />}
          
        </div>
      </div>

      <ul className={!nav ? 'hidden' : 'absolute bg-white w-full px-8 md:hidden'}>
      <li><Link to="/" smooth={true} duration={500}>Home</Link></li>
          <li><Link to="products" smooth={true} offset={-50} duration={500}>Product</Link></li>
          <li><Link to="about" smooth={true} offset={-100} duration={500}>About Us</Link></li>
          <li><Link to="contact" smooth={true} offset={-50} duration={500}>Contact</Link></li>
          <div className='relative flex items-center justify-center' >
                <MdShoppingCart/> 
                <div className='w-5 h-5 rounded-full bg-red-500 flex items-center justify-center'>
                <p className='text-xs text-white font-semibold'>2</p>
                </div>
           </div>

        <div className='flex flex-col my-4'>
        <button className=' rounded-md px-3 py-1 mr-4 bg-blue-700'>
            Sign In
          </button>
        </div>
      </ul>
    </div>
  );
};

export default Header;