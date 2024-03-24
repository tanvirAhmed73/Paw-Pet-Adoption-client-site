import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Components/Layout/Layout';
import HomeMain from './Components/HomePage/HomeMain';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children : [
      {
        path : '/',
        element: <HomeMain></HomeMain>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
