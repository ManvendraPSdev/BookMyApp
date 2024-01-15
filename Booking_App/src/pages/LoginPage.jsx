// import React, { useState } from 'react';
// import axios from "axios"
// const RegisterPage = () => {
//   // State to store user input
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');




//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white p-8 rounded shadow-md w-96">
//         <h2 className="text-2xl font-semibold mb-4">Register</h2>
//         <form onSubmit={register}>
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-gray-600 text-sm font-medium mb-2">
//               Email Address
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full p-2 border rounded"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="password" className="block text-gray-600 text-sm font-medium mb-2">
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full p-2 border rounded"
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200">Register</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default RegisterPage;



// Import React and useState from 'react'
import React, { useState } from 'react';

// Define the LoginPage component
const Loginpage = () => {
  // State to store user input
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle form submission
  const loginUser = (e) => {
    e.preventDefault();

    // Perform login logic here
    console.log('Login clicked');

    // Add your authentication logic here
    // For example, make an axios request to your server
    axios.get('http://localhost:4000/test')
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  // Return the JSX for the component
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <form onSubmit={loginUser}>
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
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

// Export the LoginPage component
export default Loginpage;