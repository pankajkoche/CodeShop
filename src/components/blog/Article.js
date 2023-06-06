import Parser from 'html-react-parser';
import React, { useState } from 'react';

import CodeBlock from './CodeBlock';
import axios from 'axios';
import VideoPlayer from '../courses/YouTubePlayer';
import YoutubeVideoPlayer from '../courses/YouTubePlayer';
import YouTubePlayer from '../courses/YouTubePlayer';


const Article = (blog) => {
  const videoSrc = 'https://www.youtube.com/watch?v=CoGX2rskhUU';
  
  const videoId =  "8c54E0kPWtc"
  const [code, setCode] = useState("");
  const [codeString, setCodeString] = useState("");

  const handleConvertClick = () => {
    const escapedCode = code.replace(/\\/g, "\\\\").replace(/"/g, "\\\"").replace(/\n/g, "\\n");
    setCodeString(`"${escapedCode}"`);
  };

 
  const paragraphsAndCode = [
    { type: 'paragraph', content: 'Lorem ipsum dolor sit amet.' },
    { type: 'paragraph', content: 'Consectetur adipiscing elit.' },
    { type: 'code', content: 'const square = x => x * x;\n\nconsole.log(square(5)); // 25' },
    { type: 'paragraph', content: 'Sed do eiusmod tempor incididunt.' },
  ];

  console.log("Article",blog.blog)
  var parse = require('html-react-parser');
  var data=parse('   <div><li>hi</li> <li>by</li></div>');
  return(
  <article className="  bg-white pt-3 pb-10 p-8 lg:ml-5 ">
    <div className="m-3 mb-7">
    <h2 className="text-center font-bold font-serif text-2xl">Article</h2>
    {blog.blog.map((n) => (
      <div className="mb-3 font-sans font-normal text-sm">
           <p>{n.para}</p>
          <img src={n.img}/>
      </div>
   
      
    ))
  }
{parse(`  <div>
          <li>hi</li> 
          <li>by</li> 
         <code>print(pankaj)<code/>
      </div>
`)}
{blog.blog.map((item, index) => {
        if (item.type === 'paragraph') {
          return <p key={index}>{item.content}</p>;
        } else if (item.type === 'code') {
          return <CodeBlock key={index} code={item.content} />;
        }
      })}

    </div>
    

    <div className="max-w-xl mx-auto my-8 p-4 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Code to String Converter</h1>
      <div className="flex flex-col">
        <label htmlFor="code" className="text-gray-700 font-bold mb-2">Enter Code:</label>
        <textarea
          id="code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="resize-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          rows={8}
        />
      </div>
      <button
        onClick={handleConvertClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
      >
        Convert to String
      </button>
      <div className="flex flex-col mt-4">
        <label htmlFor="code-string" className="text-gray-700 font-bold mb-2">Code String:</label>
        <textarea
          id="code-string"
          readOnly
          value={codeString}
          className="resize-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          rows={3}
        />
      </div>
    </div>

    <div className="sm:w-[400px]">
      <VideoPlayer videoId="q454VcBpTvA" />
    </div>

  </article>
);
}
export default Article 