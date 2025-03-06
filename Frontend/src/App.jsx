import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router"
import Home from "./pages/Home";
import Layout from "./components/Layout";
import { TeacherProvider } from "./context/TeachersContext";
import TeacherDetail from "./components/TeacherDetail/TeacherDetail";
import ReviewPage from "./pages/ReviewPage";
import { ToastContainer } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css"; 
import AddFaculty from "./pages/AddFaculty";
import AboutUs from "./pages/Aboutus";
// import AdminPanel from "./pages/AdminPanel";


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
        },
        {
          path:"/add-review",
          element: <ReviewPage/>
        },
        {
          path:"/add-faculty",
          element: <AddFaculty/>
        },
      // {
      //   path:"/admin",
      //   element: <AdminPanel />,
        
      // },
      {
        path:"/about-us",
        element:<AboutUs/>
      }
      ]
    },

  ])
  return (
   <>
   <TeacherProvider>

   <div className="overflow-hidden">
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
   <RouterProvider router={router}/>
   </div>
   </TeacherProvider>
   </>
  );
};

export default App;

