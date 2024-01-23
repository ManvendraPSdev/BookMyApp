import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import axios from "axios";

const SignIn = () => {
  // State to store user input
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle login form submission
  const signin = (e) => {
    e.preventDefault();
    axios.post("http://localhost:4000/signin", {
      email,
      password,
    })
    .then(response => {
      console.log(response.data);
      // Add your login logic here
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">LOGIN</h2>
        <form onSubmit={signin}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 text-sm font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600 text-sm font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200">login</button>
        </form>

        {/* Link to the Registration Page */}
        <p className="mt-4 text-gray-600 text-sm">
          Create a new account? <Link to="/signin" className="text-blue-500">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
