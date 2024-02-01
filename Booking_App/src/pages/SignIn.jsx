import React, { useState } from 'react';
import axios from "axios"

const SignIn = () => {
  // State to store user input
  const [UserName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle form submission
   const signin = async (e) => {
    e.preventDefault();
    // axios.get("http://localhost:4000/test")
    await axios.post("http://localhost:4000/signin" , {
      UserName,
      email ,
      password ,
    })
      .then(response => {
        console.log(response.data);
        // Add your registration logic here
      })
      .catch(error => {
        alert("Sign up failed Please Try agian later ❌")
        console.error('Error:', error);
      });
      alert("Sign up Sucessfull now you can Proceed 🟢🟢")
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">SignIn</h2>
        <form onSubmit={signin}>

        <div className="mb-4">
            <label htmlFor="UserName" className="block text-gray-600 text-sm font-medium mb-2">
              UserName
            </label>
            <input
              type="UserName"
              id="UserName"
              name="UserName"
              value={UserName}
              onChange={(e) => setUserName(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div> 

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
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200">Sign in</button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;