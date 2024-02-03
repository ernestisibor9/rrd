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
import { Provider } from 'react-redux'
import store from './redux/store.js'

function App() {
  return (
      <BrowserRouter>
      <Provider store={store}>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='services' element={<Services/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='blog/:id' element={<Blog/>}/>
        <Route path='other' element={<Other/>}/>
      </Routes>
      </Provider>
    </BrowserRouter>
  )
}

export default App
