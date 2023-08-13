// src/DSAComponent.js
import React, { useState } from 'react';
import dsaTopics from '../../utils/data';
import { BsQuestionCircle, BsX } from 'react-icons/bs';
import { FaCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const DSAComponent = () => {

    const backgroundPNG='https://static.vecteezy.com/system/resources/previews/010/869/741/original/faq-concept-illustration-people-looking-through-magnifying-glass-at-interrogation-point-searching-solutions-useful-information-customer-support-solving-problem-free-png.png'
    const img='https://cdn.mindbowser.com/wp-content/uploads/2022/09/22101719/Data-Analytics-Trends-For-2023-Beyond-Banner.png'
    const [showQuestions, setShowQuestions] = useState(false);
    const [questions, setQuestions] = useState([]);
  
    const handleShowQuestions = (topicQuestions) => {
      setQuestions(topicQuestions);
      setShowQuestions(true);
    };
  
    const handleCloseQuestions = () => {
      setShowQuestions(false);
    };
  
    return (
        <div>
        <div className="bg-gray-100 shadow-sm min-h-screen p-8"
        style={{ backgroundImage: `url(${backgroundPNG})`, backgroundPosition: 'center' }}>
            <h1 className="text-3xl font-bold mb-8">DSA Topics</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {dsaTopics.map((topic, index) => (
                <div key={index} className="bg-white shadow-lg rounded-lg">
                <div className="p-6 h-full flex flex-col justify-between">
                    <div>
                    <h2 className="text-xl font-bold mb-4">{topic.title}</h2>
                    <p className="text-gray-600">{topic.description}</p>
                    </div>
                    <button
                    className="mt-4 bg-gray-400 text-white py-2 px-4 rounded hover:bg-blue-600 flex items-center"
                    onClick={() => handleShowQuestions(topic.questions)}
                    >
                    <BsQuestionCircle className="mr-2" />
                    View Questions
                    </button>
                </div>
                </div>
            ))}
            </div>
            
    
            {showQuestions && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                
                <div className="bg-white p-6 rounded-lg relative w-[800px]">
                
                <button
                    className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
                    onClick={handleCloseQuestions}
                >
                    <BsX size={24} />
                </button>
                <h2 className="text-xl font-bold mb-4">Important Questions</h2>
                <div className="flex flex-col">
                    {questions.map((question, index) => (
                    <div key={index} className="flex items-center mb-2">
                        
                        <Link to={'/dsa-problem'+`/${question.replace(/ /g, '-')}`} className="flex items-center">
                        <FaCheck className="mr-2 text-green-500" />
                        <span className='text-blue-600' >{question}</span>
                    </Link>
                    </div>
                    ))}
                </div>
                </div>
            </div>
            )}
        </div>
        
    
      </div>
    );
  };
  
  export default DSAComponent;