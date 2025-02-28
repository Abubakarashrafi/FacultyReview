import { useState } from 'react'
import axios from 'axios'
import useFingerPrint from './hooks/useFingerPrint'
function App() {

  const fingerprint = useFingerPrint();

  const handleclick = async () => {
    await axios.post('http://localhost:4000/user', {
      fingerprint
    });


  }
  return (
    <>
      <button onClick={handleclick}
        className='bg-blue-900 rounded-full p-2 text-white'>Create User</button>



    </>
  )
}

export default App
