import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Drawer from '../components/drawer/Drawer'

const RootLayout = () => {
  return (
    <div className='App'>
      <Navbar/>
      <Drawer/>
      <Outlet/>
    </div>
  )
}

export default RootLayout