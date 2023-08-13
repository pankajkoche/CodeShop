// ProblemCard.js
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import {GrFormNextLink} from 'react-icons/gr'
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const ProblemCard = ({ problem }) => {
  const { title, problemStatement, sampleInput, sampleOutput,explanation,img,approaches,next} = problem;

  const formatApproachCode = (code) => {
    const lan ="python"
    return (
        
        <div>
    <SyntaxHighlighter language={lan} style={vscDarkPlus}>
                {code}
    </SyntaxHighlighter>
        </div>
 ) };
 
  return (
    <div className="bg-white rounded-md shadow-md p-4 md:mx-4">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <p className="mb-4">{problemStatement}</p>
      <div className="bg-gray-100 rounded-md p-2 mb-4">
        <h3 className="font-semibold mb-2">Sample Input:</h3>
        {JSON.stringify(sampleInput, null,1)}
        
      </div>
      <div className="bg-gray-100 rounded-md p-2">
        <h3 className="font-semibold mb-2">Sample Output:</h3>
        {JSON.stringify(sampleOutput, null,1)}
        <p className="my-2">{explanation}</p>
        <img src={img}/>



      </div>
      <div className="bg-white rounded-md p-2 my-3">
        <h3 className="font-semibold mb-2">Approaches:</h3>
        {approaches.map((approach, index) => (
          <div key={index}>
            <h4 className="font-semibold mb-2">{approach.name}</h4>
            <p className='py-4'>{approach.description}</p>
           
            {approach.img.map((image,index)=>(
              <img key={index} className="w-[500px] mb-3" src={image}/>
            ))}
            
            <p className='py-4'>{approach.explanation}</p>
            {formatApproachCode(approach.code)}

            <h4 className=' font-semibold mb-2'>Time Complexity:</h4>
            <p className='mb-2'>{approach.TC}</p>
            <h4 className=' font-semibold mb-2'>Space Complexity:</h4>
            <p className='mb-2'>{approach.SC}</p>

          </div>

        ))}
      </div>
      <div className='flex  justify-end'>
      
      <Link to={'/dsa-problem'+`/${next.replace(/ /g, '-')}`} className="flex  items-center text-blue-700 py-2 px-4 rounded">
      {next}
          <AiOutlineArrowRight className="ml-2 " />
          
        </Link>
       
      </div> 
      
    </div>
  );
};

export default ProblemCard;
