import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from './pages/Home'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import About from './pages/About'
import Navbar from './components/Navbar'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"
import Other from './pages/Other.js'


function App() {
  return (
      <BrowserRouter>

      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='services' element={<Services/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='blog' element={<Blog/>}/>
        <Route path='other' element={<Other/>}/>
      </Routes>

    </BrowserRouter>
  )
}

export default App
