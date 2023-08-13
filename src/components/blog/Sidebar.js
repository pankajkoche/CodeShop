import { Link } from 'react-router-dom';
import React, { useState, useEffect} from 'react';

import {CgPentagonRight} from 'react-icons/cg'
const Sidebar = (subject) => 
{
  const sub=subject;
  const cat=1
  

  const[data,setData]=useState([]);

  // API CALL
  useEffect(()=>{
    const fetchData = async ()=>{
      try{
        const encodedCategory = encodeURIComponent(sub)
        const res=await fetch(`https://learner01-001-site1.atempurl.com/api/posts/category/${cat}`);
        if(res.ok){
          const data=await res.json();
          setData(data);
          console.log('data---',data)
        }
        else{
          throw new console.error('Request failed');
        }
      }
      catch(error){
        console.error(error);
      }
    };
    fetchData();
  },[]);

  
  const id = 1;
  
return (

  <aside >
    <div className=" lg:overflow-y-auto lg:h-screen">
    <h3 className="text-center font-semibold mr-4 text-orange-600">Python </h3>
    {data.map((n) => (
      
      <Link className='flex items-center mb-2' to={`/${n.title.replace(/ /g, '-')}`}
       state={{id:`${n.id}`}}
      >
        <CgPentagonRight className='fill-pink-600 bg-red-300 mr-2'/><p>{n.title}</p></Link>

    ))
  }
  </div>
  </aside>
);
}

export default Sidebar;