import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaSearch, FaUser, FaCaretDown, FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Flex from '../../layouts/Flex';
import Popup from "../../Popup";


const HeaderBottom = () => {
    //const products = useSelector((state) => state.orebiReducer.products);
  const [show, setShow] = useState(false);
  const [showUser, setShowUser] = useState(false);
  const navigate = useNavigate();
  const ref = useRef();
  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (ref.current.contains(e.target)) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  }, [show, ref]);

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showSearchBar, setShowSearchBar] = useState(false);

    return (
        <div className="w-full bg-[#F5F5F3] relative">
            <div className="max-w-container mx-auto">
                <Flex className="flex flex-col lg:flex-row items-start lg:items-center justify-between w-full px-4 pb-4 lg:pb-0 h-full lg:h-24">
                <div
                    onClick={() => setShow(!show)}
                    ref={ref}
                    className="flex h-14 cursor-pointer items-center gap-2 text-primeColor"
                >
                    <HiOutlineMenuAlt4 className="w-5 h-5" />
                    <p className="text-[14px] font-normal">Tutorials</p>

                    {show && (
                    <motion.ul
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="absolute top-36 z-50 bg-black w-auto text-[#767676] h-auto p-4 pb-6"
                    >
                        <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                        <Link
                            to="/python"
                            state={{id:1}}
                            className="block text-white hover:text-gray-900 px-2 py-1 rounded transition duration-300"

                          > Python</Link>
                       
                        </li>
                        <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                        Java
                        </li>
                        <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                        IOT
                        </li>
                        <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                        Javascript
                        </li>
                        <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400  hover:border-b-white hover:text-white duration-300 cursor-pointer">
                        HTML
                        </li>
                        <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400  hover:border-b-white hover:text-white duration-300 cursor-pointer">
                        CSS
                        </li>
                    </motion.ul>
                    )}
                </div>
              <div className="flex flex-row">
                <  motion.ul
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className=" "
                    >
                       
                       <Link className="px-2"
                            to="/python"
                            state={{id:1}}
                          > Python</Link>
                           <Link className="px-2"
                            to="/python"
                            state={{id:1}}
                          > Python</Link>
                          <Link className="px-2"
                            to="/python"
                            state={{id:1}}
                          > Python</Link>
                           <Link className="px-2"
                            to="/python"
                            state={{id:1}}
                          > Python</Link>
                          <Link className="px-2"
                            to="/python"
                            state={{id:1}}
                          > Python</Link>
                        
                    </motion.ul>
              </div>
                
                <div className="relative w-full lg:w-[600px] h-[50px] text-base text-primeColor bg-white flex items-center gap-2 justify-between px-6 rounded-xl">
                <input
                  className="flex-1 h-full outline-none placeholder:text-[#C4C4C4] placeholder:text-[14px]"
                  type="text"
                  
                  placeholder="Search your products here"
                />
                <FaSearch className="w-5 h-5" />
                </div>

            <Popup/>
            
            </Flex>

            </div>
            
        </div>
    );
};

export default HeaderBottom;