import React from 'react'
import { Outlet } from 'react-router'
import Header from './components/Header'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar/Sidebar'

function DefaultLayout() {
  return (<>
    <Header />
    <div className='flex'>
      <Sidebar />
      <div className='flex-1'>
        <Outlet />
      </div>
    </div>
    <Footer />
  </>
  )
}

export default DefaultLayout