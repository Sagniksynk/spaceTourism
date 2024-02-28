import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import './index.css'
import Home from "./components/Home";
import Crew from "./components/Crew";
import Destination from "./components/Destination";
import Technology from "./components/Technology";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
  },
  {
    path: '/crew',
    element: <Crew/>,
  },
  
  {
    path: '/destination',
    element: <Destination/>,
  },
  
  {
    path: '/tech',
    element: <Technology/>,
  },
  
])


ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}  fallbackElement={<Error />}/>
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
)
