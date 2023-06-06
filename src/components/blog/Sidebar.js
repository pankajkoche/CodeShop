import { Link } from 'react-router-dom';
import React, { useState } from 'react';

import {CgPentagonRight} from 'react-icons/cg'
const Sidebar = (sTopics,subject) => 
{
  

  console.log("sidebar",sTopics.topics[1].id)
  
  
return (

  <aside >
    <div className=" lg:overflow-y-auto lg:h-screen">
    <h3 className="text-center font-semibold mr-4 text-orange-600">Python </h3>
    {sTopics.topics.map((n) => (
      <Link className='flex items-center mb-2' to={`/g/${n.subject}/${n.id}`}>
        <CgPentagonRight className='fill-pink-600 bg-red-300 mr-2'/><p>{n.title}</p></Link>
      
    ))
  }
  </div>
  </aside>
);
}

export default Sidebar;