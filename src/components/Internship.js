import React, { useState } from 'react';

const InternshipRegistrationForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [resume, setResume] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('full_name', fullName);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('resume', resume);
    try {
      const response = await fetch('https://example.com/api/internship', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      console.log('API response:', data);
      // Clear the form after successful submission
      setFullName('');
      setEmail('');
      setPhone('');
      setResume(null);
    } catch (error) {
      console.error('API error:', error);
      alert("Something is wrong! try again")
    }
  };

  const handleFileChange = (event) => {
    setResume(event.target.files[0]);
  };

  return (
    <div className="max-w-lg mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Apply for Internship</h2>
      <form onSubmit={handleSubmit}>
        <label className="block mb-2">
          Full Name:
          <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
        </label>
        <label className="block mb-2">
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
        </label>
        <label className="block mb-2">
          Phone:
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
        </label>
        <label className="block mb-2">
          Resume:
          <div className="relative rounded-md shadow-sm">
            <input type="file" onChange={handleFileChange} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
            <button type="button" className="inline-flex items-center justify-center px-4  text-base font-medium text-white bg-indigo-400 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Choose File
            </button>
            <span className="ml-3">{resume && resume.name}</span>
          </div>
        </label>
        <button type="submit" className="inline-block px-4 py-2 text-base font-medium text-white bg-red-900 rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Submit</button>
      </form>
    </div>
  );
};

export default InternshipRegistrationForm;
