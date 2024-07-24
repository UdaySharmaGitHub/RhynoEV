import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {About} from './components/AboutUs/About.jsx'
import {Products} from './components/Products/Products.jsx'
import {Contactus} from './components/ContactUs/Contactus.jsx'
import {Prebooknow} from './components/PreBookNow/Prebooknow.jsx'
import {Rental} from './components/Rental/Rental.jsx'
import { MouseFollower } from "react-mouse-follower";

import './index.css'
import {Route,RouterProvider, createBrowserRouter,createRoutesFromElements  } from 'react-router-dom'
import {Home} from './components/Home/Home.jsx'
import { Error404 } from './components/Error404/Error404.jsx'

// Creating Routing of Pages
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='products' element={<Products/>}/>
      <Route path='contact-us' element={<Contactus/>}/>
      <Route path='prebooknow' element={<Prebooknow/>}/>
      <Route path='rental' element={<Rental/>}/>
      <Route path='error' element={<Error404/>}/>
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <MouseFollower />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
