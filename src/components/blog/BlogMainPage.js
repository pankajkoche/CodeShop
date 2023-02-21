
import React, { useState } from 'react';
import '../../components/styles/BlogMainPage.css'
import Ads from './Ads';
import Article from './Article';
import Sidebar from './Sidebar';
import { useLocation } from 'react-router-dom';
import data from '../../utils/data.json'

const BlogMainPage = () => {

  const location = useLocation();
  const tile =location.pathname.split("/")[2]; 
  console.log("data",data[1].topics)
  console.log("content",data[1].content)

  const topics = data[1].topics
  var x = data[1].content
  
 
  var blog=x[0][tile]

  console.log("blog",blog)
  
  console.log("tile",tile)
  
  
    return (
    
      <div className="container">
            <div className="left-column col-20 ">
              <Sidebar topics={topics}/>
            </div>
            <div className="middle-column col-60"> 
              <Article blog={blog}/>
            </div>
            <div className="right-column col-20">
              <Ads/>
            </div>

    </div>
    );
};

  


export default BlogMainPage;