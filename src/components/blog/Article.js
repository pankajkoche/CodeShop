import Parser from 'html-react-parser';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';


const Article = (bid) => {
  
  const [isLoading, setIsLoading]=useState(true);
  const[data,setData]=useState([]);
  const location = useLocation();
  const path= location.pathname.split("/")[1]
  const url="https://learner01-001-site1.atempurl.com/api/posts/"+bid.bid
  

// API CALL
useEffect(()=>{
  
  const fetchData = async ()=>{
    try{
      const res=await fetch(url);
      if(res.ok){
        const data=await res.json();
        setData(data);
        console.log('data---',data)
      }
      else{
        throw new console.error('Request failed');
      }
      setIsLoading(false)
    }
    catch(error){
      console.error(error);
    }
  };
  fetchData();
},[path]);

  var parse = require('html-react-parser');
  
  return(
  <article className="bg-white pt-3 md:pb-10 md:p-8 lg:ml-5 ">
    <div className="m-3 mb-7 ">
      {isLoading ? (
        <p>Loading...</p>
      ) :(
        parse(`<h2 className=" font-bold font-serif text-2xl">${data.title}</h2>
        
              <hr/>
              
              <div className="mb-3">
              ${data.content}
                         
            `          
      )
      )}
  
    </div>
    
  </article>
);
}
export default Article 