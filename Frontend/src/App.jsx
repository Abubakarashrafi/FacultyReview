
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
import AdminPanel from "./pages/AdminPanel"
import AboutUs from "./pages/AboutUs" // Import the AboutUs component
import Layout from "./components/Layout"
import { TeacherProvider } from "./context/TeachersContext"

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
        path: "about", // Add the about route
        element: <AboutUs />,
      },
      // Add placeholder routes for the other navbar items
      {
        path: "add-reviews",
        element: <div className="p-8 text-center">Add Reviews Page (Coming Soon)</div>,
      },
      {
        path: "my-reviews",
        element: <div className="p-8 text-center">My Reviews Page (Coming Soon)</div>,
      },
    ],
  },
])

const App = () => {

import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router"
import Home from "./pages/Home";
import Layout from "./components/Layout";
import { TeacherProvider } from "./context/TeachersContext";
import TeacherDetail from "./components/TeacherDetail/TeacherDetail";

const App = () => {
  return (
    <TeacherProvider>
      <div className="overflow-hidden">
        <RouterProvider router={router} />
      </div>
    </TeacherProvider>
  )
}

export default App

