import React from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Homepage from '../pages/Homepage';
import Event from '../pages/Event';
import FAQ from '../pages/FAQ';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage />
    },
    {
        path: "/Event",
        element:<Event/>
    },
    {
        path: "/FAQ",
        element:<FAQ/>
    },
]);

const Routing = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default Routing