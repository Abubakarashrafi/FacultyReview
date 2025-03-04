import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import AdminPanel from "./pages/AdminPanel";
import AboutUs from "./pages/AboutUs";
import Layout from "./components/Layout";
import { TeacherProvider } from "./context/TeachersContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "admin", 
        element: <AdminPanel />,
      },
      {
        path: "about", 
        element: <AboutUs/>,
      },
    ],
  },
]);

const App = () => {
  return (
    <TeacherProvider>
      <div className="overflow-hidden">
        <RouterProvider router={router} />
      </div>
    </TeacherProvider>
  );
};

export default App;
