import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './index.css'
import Layout from './Layout.jsx'
import AboutSection from './components/About/AboutSection.jsx'
import CarsShowcase from './components/Cars/CarsShowcase.jsx'
import EventsNewsSection from './components/EventsAndNews/EventsNewsSection.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<CarsShowcase />} />
      <Route path='about' element={<AboutSection />} />
      <Route path='event_news' element={<EventsNewsSection />} />
      <Route path='event_news' element={<EventsNewsSection />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)