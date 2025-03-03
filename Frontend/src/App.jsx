import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router"
import Home from "./pages/Home";
import Layout from "./components/Layout";
import { TeacherProvider } from "./context/TeachersContext";
import TeacherDetail from "./components/TeacherDetail/TeacherDetail";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",

      element: <Layout />,
      children:[
        {
          index:true,
          element:<Home/>
        },
        {
          path:"/teacher/:id",
          element: <TeacherDetail/>
        }
      ]
    },

  ])
  return (
   <>
   <TeacherProvider>

   <div className="overflow-hidden">

   <RouterProvider router={router}/>
   </div>
   </TeacherProvider>
   </>
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
