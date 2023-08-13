import React, { useState } from 'react';
import axios from 'axios';
import { FaSpinner } from 'react-icons/fa';

const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [resume, setResume] = useState(null);
  const [message, setMessage] = useState('');
  const [mobileNo,SetMobileNo]=useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('resume', resume);
    formData.append('mobileNo', mobileNo);
    setIsSubmitting(true);

    axios.post('http://127.0.0.1:5000/submit_form', formData)
      .then(response => {
        setMessage(response.data.message);
        setIsSubmitted(true);
       
      })
      .catch(error => {
        console.error('Error:', error);
        setMessage('An error occurred while submitting the form. Please try again later.');
      });
  };

  return (
    <div className="">
      {isSubmitted ? (
        <div className='bg-white max-w-md mx-auto border rounded-md mt-3'>
          <div><img  src='https://www.revechat.com/wp-content/uploads/2023/06/Thank-you.jpg' alt='thank you'/></div>
          <div className='mx-auto p-4'>
          <h2>Thank You!</h2>
          <p>Your application has been submitted successfully! We will get back to you soon.</p>
          </div>
          
        </div>
      ) :(<div className="max-w-md mx-auto p-4 border rounded-md bg-slate-300">
      <h2 className="text-2xl font-bold mb-4">Apply for Internship</h2>
      <form onSubmit={handleFormSubmit} encType="multipart/form-data">
        <label className="block mb-1" htmlFor="name">Name:</label>
        <input className="w-full px-4 py-2 border mb-1 rounded border-gray-300" type="text" id="name" name="name" required value={name} onChange={(e) => setName(e.target.value)} />

        <label className="block mb-1" htmlFor="email">Email:</label>
        <input className="w-full px-4 py-2 mb-1 border rounded border-gray-300" type="email" id="email" name="email" required value={email} onChange={(e) => setEmail(e.target.value)} />

        <label className="block mb-1" htmlFor="mobileNo">Mobile Number:</label>
        <input className="w-full px-4 py-2 mb-1 border rounded border-gray-300" type="tel" id="mobileNo" name="mobileNo" required value={mobileNo} onChange={(e) => SetMobileNo(e.target.value)} />

        <label className="block mb-1" htmlFor="resume">Upload Resume:</label>
        <input className="w-full px-4 py-2 mb-1 border rounded border-gray-300" type="file" id="resume" name="resume" accept=".pdf,.doc,.docx" required onChange={(e) => setResume(e.target.files[0])} />

        <button className="w-full bg-blue-500 text-white py-2 my-2 px-4 rounded hover:bg-blue-600 transition duration-200" type="submit">
        {isSubmitting ? (
              <span className="flex items-center">
                <FaSpinner className="animate-spin mr-2" />
                Submitting...
              </span>
            ) : (
              'Submit'
            )}
          
          </button>
      </form>
    </div>)}
    </div>
    
  );
};

export default App;
