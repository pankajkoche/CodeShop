import React from 'react'

import {
    FaFacebook,
    FaInstagram,
    
} from 'react-icons/fa'
import { 
    BsLinkedin,
    BsYoutube
} from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='w-full mt-24 bg-slate-900 text-gray-300 py-y px-2  bottom-0'>
        <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8'>
            <div>
                <h6 className='font-bold uppercase pt-2'>Solutions</h6>
                <ul>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Analytics</li>
                    
                </ul>
            </div>
           
            <div>
                <h6 className='font-bold uppercase pt-2'>Company</h6>
                <ul>
                    <li className='py-1'>About</li>
                    
                    <li className='py-1'>Partners</li>
                </ul>
            </div>
            <div>
                <h6 className='font-bold uppercase pt-2'>Legal</h6>
                <ul>
                    <li className='py-1'>Claims</li>
                    <li className='py-1'>Privacy</li>
                    <li className='py-1'>Terms</li>
                    
                </ul>
            </div>
            <div className='col-span-2 pt-8 md:pt-2'>
                <p className='font-bold uppercase'>contact us</p>
                <form className='flex flex-col sm:flex-row'>
                    <input className='w-full p-2 mr-4 rounded-md mb-4' type="email" placeholder='Enter email..'/>
                    <button className='p-2 mb-4'>sent</button>
                </form>
            </div>
        </div>

        <div className='flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500'>
        <p className='py-4'>CodeShop, All rights reserved</p>
        <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
            <a href='https://instagram.com/code.shop001?igshid=YmMyMTA2M2Y=' target="_blank">

                <FaInstagram className='fill-pink-600' />
            </a>
            <a href='https://www.youtube.com/@codeshop8625' target="_blank">
                <BsYoutube className='fill-red-800'/>
            </a>
            <a href='' target="_blank">
            <FaFacebook />
            </a>
            
            <a href='' target="_blank">
             <BsLinkedin />
            </a>
            
           
            
        </div>
        </div>
    </div>
  )
}

export default Footer