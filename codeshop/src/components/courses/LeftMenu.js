import React, { useEffect, useState } from 'react';
import {BsSearch}  from 'react-icons/bs'
import axios from 'axios'
import { Link } from 'react-router-dom';

const LeftMenu = () => {
    const [isOpen, setIsopen] =useState(true)
    
    const[posts, setPosts] =useState([]);

    useEffect(()=>{
        const fetchPosts= async ()=>{
            const res = await axios.get('http://localhost:5000/api/posts')
            setPosts(res.data)
            console.log(res.data)

        }
        fetchPosts()
    },[])

    return (
        <>
        {!isOpen ?
            (
              <svg
              onClick={() => setIsopen(!isOpen)}
              className="fixed  z-30 flex items-center cursor-pointer mx-[10px] "
              fill="#2563EB"
              viewBox="0 0 100 80"
              width="40"
              height="40"
              >
              <rect width="100" height="10"></rect>
              <rect y="30" width="100" height="10"></rect>
              <rect y="60" width="100" height="10"></rect>
              </svg>):
            (
                <>
                <button
                className="flex text-4xl text-white items-center cursor-pointer fixed mx-[165px] md:mx-[240px] z-50"
                onClick={() =>  setIsopen(!isOpen)}
              >
                <h2 className='text-red-600 '>X</h2>
              </button>
                <div className='p-1 text-sm border-r ${isOpen ? md:flex :} 
                        rounded-lg bg-blue-100  w-[180px] md:w-[500px]'>
                    <div className='space-y-4'>
                        <button className='flex items-center space-x-2 hover:text-orange-500'>
                            <BsSearch className='h-5 w-5'/>
                            <p>Search</p>
                        </button>
                        <hr className='border-t-[0.1px] border-gray-200' />

                        {/* topic link*/}
                        <div className='space-y-4 px-4 overflow-y-scroll scrollbar-hide h-screen w-190 md:w-250' >
                            {
                                posts.map((p)=>(
                                    <p>{p.title}</p>
                                )
                                )
                            }
                        </div>
                    </div>

                </div>
                </>
                )}
        
        </>
    );
};

export default LeftMenu;