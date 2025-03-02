import React from 'react'
import { Outlet } from 'react-router'
import Navbar from './NavBar/Navbar'
import Footer from './Footer/Footer'
function Layout() {
  return (
      <div>
          <Navbar />
          <main>
              <Outlet /> 
          </main>
          <Footer />
      </div>
  )
}

export default Layout