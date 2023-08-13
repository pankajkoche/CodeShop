
import React, { useState } from 'react';
import Ads from './Ads';
import Article from './Article';
import Sidebar from './Sidebar';
import { useLocation } from 'react-router-dom';




const BlogMainPage = () => {

  
  const location = useLocation();
  const path= location.pathname.split("/")[1]
  const id = location.state?.id;
  
    return (
    
      <div className="flex flex-col md:flex-row">
           
          <div className="hidden lg:block w-1/5 "><Sidebar  subject={path}/></div>
          <div className="flex w-full lg:w-3/5 "><Article bid={id}/></div>
          <div className="flex lg:block w-1/5 "><Ads/></div>
    </div>

    
    );
};

  


export default BlogMainPage;