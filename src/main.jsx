import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider,} from "react-router-dom";
import './index.css'
import Layout from './components/Layout/Layout';
import Home from './components/Home';
import Contact from './components/Contact';
import Photography from './components/Photography';
import Questions from './components/Questions';
import EventPage from './components/Card/EventPage';
import About from './components/About';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>} />
      <Route path='about-us' element={<About/>} />
      <Route path='photography/:eventName' element={<EventPage/>} />
      <Route path='photography' element={<Photography/>} />
      <Route path='Questions' element={<Questions/>} />
      <Route path='contact' element={<Contact/>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
