import React from "react";
import Navbar from "./components/NavBar/Navbar";
import Hero from "./components/Homepage/Hero";

const App = () => {
  return (
    <div className="app">
      <nav>
        <Navbar />
      </nav>

      <main>
        <Hero />
      </main>
    </div>
  );
};

export default App;

// const fingerprint = useFingerPrint();

//   const handleclick = async () => {
//     await axios.post('http://localhost:4000/user', {
//       fingerprint
//     });
// <button onClick={handleclick}
//         className='bg-blue-900 rounded-full p-2 text-white'>Create User</button>
