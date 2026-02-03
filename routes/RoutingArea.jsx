import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from '../App'

import FlipKart from '../Flipkart/FlipKart'
import Deshboard from '../Components/Deshboard'

const RoutingArea = () => {
    const ways = createBrowserRouter([
      {path:"/" , element:<App/>, children:[
        {path:"/" , element:<FlipKart/>},
        {path:"/Deshboard" , element:<Deshboard/>},
        
    
      ] }
    ])
  return (
    <RouterProvider router={ways}/>

  )
}

export default RoutingArea