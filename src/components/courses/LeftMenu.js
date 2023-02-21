import React, { useEffect, useState } from 'react';
import {BsSearch}  from 'react-icons/bs'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { BsFilterLeft} from "react-icons/bs";
import { ImCancelCircle} from "react-icons/im"

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
        <div>
                <span
            className="text-4xl bg-black text-white   rounded-sm cursor-pointer"
            onclick="Open()"
             >
            <BsFilterLeft/>
              </span>
        <div
            className="sidebar fixed  bottom-0 lg:left-0 left-[-300px] p-2 w-[300px] overflow-y-auto text-center bg-gray-900"
        >
            <div classNameName="text-gray-100 text-xl">
            <div className="p-2.5 mt-1 flex items-center">
                
                <h1 className="font-bold text-gray-200 text-[15px] ml-3">Python</h1>
                <ImCancelCircle className='"bi bi-x text-white cursor-pointer ml-28 lg:hidden' onclick="Close()" />
                
                
            </div>
            <div className="my-2 bg-gray-600 h-[1px]"></div>
            </div>
            <div
            className="p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700 text-white"
            >
            <i className="bi bi-search text-sm"></i>
            <input
                type="text"
                placeholder="Search"
                className="text-[15px] ml-4 w-full bg-transparent focus:outline-none"
            />
            </div>
            <div
            className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
            >
            <i className="bi bi-house-door-fill"></i>
            <span className="text-[15px] ml-4 text-gray-200 font-bold">Home</span>
            </div>
            <div
            className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
            >
            <i className="bi bi-bookmark-fill"></i>
            <span className="text-[15px] ml-4 text-gray-200 font-bold">Bookmark</span>
            </div>
            <div className="my-4 bg-gray-600 h-[1px]"></div>
            <div
            className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
            onclick="dropdown()"
            >
            <i className="bi bi-chat-left-text-fill"></i>
            <div className="flex justify-between w-full items-center">
                <span className="text-[15px] ml-4 text-gray-200 font-bold">Chatbox</span>
                <span className="text-sm rotate-180" id="arrow">
                <i className="bi bi-chevron-down"></i>
                </span>
            </div>
            </div>
            <div
            className="text-left text-sm mt-2 w-4/5 mx-auto text-gray-200 font-bold"
            id="submenu"
            >
            <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">
                Social
            </h1>
            <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">
                Personal
            </h1>
            <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">
                Friends
            </h1>
     </div>
     <div
       className="p-2.5 mt-3 flex flex-col items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
     >
       <i className="bi bi-box-arrow-in-right"></i>
       <span className="text-[15px] ml-4 text-gray-200 font-bold">Logout</span>
       
     </div>
   </div>
   </div>
    );
};

export default LeftMenu;