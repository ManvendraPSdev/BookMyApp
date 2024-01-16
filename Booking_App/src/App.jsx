import './App.css'
import { Route, Routes } from 'react-router-dom'
import IndexPage from './pages/IndexPage'
import LoginPage from './pages/Login'
import SignInPage from './pages/SignIn'
import Layout from './Layout'
import axios from 'axios'

axios.defaults.baseURL = 'https://localhost:4000' ;


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signin" element={<SignInPage />} />

      </Route>
    </Routes>
  )
}

export default App







// import './App.css';
// import { Route, Routes } from 'react-router-dom';
// import IndexPage from './pages/IndexPage';
// import LoginPage from './pages/Login';  // Update the import statement
// import Layout from './Layout';
// import axios from 'axios';

// axios.defaults.baseURL = 'https://localhost:4000';

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Layout />}>
//         <Route index element={<IndexPage />} />
//         <Route path="/login" element={<LoginPage />} />
//       </Route>
//     </Routes>
//   );
// }

// export default App;







// import './App.css';
// import { Route, Routes } from 'react-router-dom';
// import IndexPage from './pages/IndexPage';
// // import LoginPage from './pages/LoginPage'; // Update the file name to match the actual file name
// import LoginPage from './pages/Loginpage';

// import RegisterPage from './pages/RegisterPage';
// import Layout from './Layout';
// import axios from 'axios';

// axios.defaults.baseURL = 'http://localhost:4000'; // Corrected baseURL

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Layout />}>
//         <Route index element={<IndexPage />} />
//         <Route path="/login" element={<LoginPage />} />
//       </Route>
//     </Routes>
//   );
// }

// export default App;
