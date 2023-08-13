import React, { useState } from 'react';
import { RiCloseLine } from 'react-icons/ri';
import { FaReact } from 'react-icons/fa';

const Popup = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleMobileChange = (e) => {
    setMobile(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login/signup logic here
    if (isSignUp) {
      console.log('Sign Up clicked:', name, email, mobile, password);
    } else {
      console.log('Login clicked:', email, password);
    }
    // Reset form values
    setEmail('');
    setPassword('');
    setName('');
    setMobile('');
    onClose();
  };

  const handleSwitchMode = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 ${
        isOpen ? 'flex' : 'hidden'
      } bg-gray-900 bg-opacity-75`}
    >
      <div className="bg-white w-[400px] md:w-[500px] lg:w-[600px] p-8 rounded   shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">
            {isSignUp ? 'Sign Up' : 'Login'}
          </h2>
          <button
            className="text-gray-400 hover:text-gray-500"
            onClick={onClose}
          >
            <RiCloseLine size={24} />
          </button>
        </div>
        <div className="flex items-center justify-center mb-8">
          <FaReact size={64} className="text-blue-500" />
        </div>
        <form onSubmit={handleSubmit}>
          {isSignUp && (
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-3 py-2 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:border-blue-500"
                placeholder="Enter your name"
                value={name}
                onChange={handleNameChange}
              />
            </div>
          )}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:border-blue-500"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          {isSignUp && (
            <div className="mb-4">
              <label
                htmlFor="mobile"
                className="block text-sm font-medium text-gray-700"
              >
                Mobile Number
              </label>
              <input
                type="text"
                id="mobile"
                className="w-full px-3 py-2 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:border-blue-500"
                placeholder="Enter your mobile number"
                value={mobile}
                onChange={handleMobileChange}
              />
            </div>
          )}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:border-blue-500"
              placeholder="Enter your password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              {isSignUp ? 'Sign Up' : 'Sign In'}
            </button>
          </div>
        </form>
        <p className="text-center text-sm text-gray-700 mt-4">
          {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
          <button
            type="button"
            className="text-blue-500 hover:text-blue-700"
            onClick={handleSwitchMode}
          >
            {isSignUp ? 'Sign In' : 'Sign Up'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Popup;
