
import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSignInClick = () => {
    axios.post('/api/login', {
      username,
      password,
    })
    .then(response => {
      console.log(response);
      // Redirect the user to the dashboard or home page
    })
    .catch(error => {
      console.error(error);
      // Display an error message to the user
      alert('something is wrong! try again')
    });
  };

  return (
    <div className="flex flex-col justify-center">
      <div className="flex justify-center">
        <h1 className="text-3xl font-bold text-gray-800">CodeShop</h1>
      </div>
      <div className="flex justify-center mb-8">
        <p className="text-gray-600">Your one-stop shop for all things code!</p>
      </div>
      <div className="flex justify-center">
        <form className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-xl font-bold mb-4">Login to your account</h2>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" value={username} onChange={handleUsernameChange} />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={handleSignInClick}>
              Sign In
            </button>
            <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
