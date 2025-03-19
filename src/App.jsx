import React from 'react'

import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Footer from './components/footer/Footer'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import LiveExams from './components/Examination/LiveExams/LiveExams'

function App() {
  const route = createBrowserRouter([
    {
      path:"/",
      element:<Dashboard/>,
      children:[
          {
            path:"/",
            element:<Home/>
          },
          {
            path:"/login",
            element:<Login/>
          },
          {
            path:"/register",
            element:<Register/>
          },
          {
            path:"/liveexams",
            element:<LiveExams/>
          },
          {
            path:"/footer",
            element:<Footer/>
          }
      ]
    },
    
  ])
  return <RouterProvider router={route}>
  </RouterProvider>
}

export default App
