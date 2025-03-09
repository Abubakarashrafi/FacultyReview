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
import AboutUs from "./pages/AboutUs";
import AdminPanel from "./pages/Admin";
import TeacherEdit from "./pages/TeacherEdit"
import MyReview from "./pages/MyReview";


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
     
      {
        path:"/about-us",
        element:<AboutUs/>
      },
        {
          path: "/admin",
          element: <AdminPanel />,
        },
            {
              path:"/admin/edit/:id",
              element:<TeacherEdit/>
            },
            {
              path:"/My-review",
              element:<MyReview/>
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

