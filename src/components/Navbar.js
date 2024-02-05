import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Navbar() {
    // const cartObj = useSelector(store=>store.cartSlice.cart)

  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Alabian</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link to = '/' class="nav-link active" aria-current="page">Home</Link>
        </li>
        <li class="nav-item">
          <Link to ='about' class="nav-link">About</Link>
        </li>
        <li class="nav-item">
          <Link to = 'services' class="nav-link">Services</Link>
        </li>
        <li class="nav-item">
          <Link to = 'contact' class="nav-link">Contact</Link>
        </li>
        <li class="nav-item">
          <Link to = 'blog/ben' class="nav-link">Blog</Link>
        </li>
        {/* <li class="nav-item">
          <Link to = 'other' class="nav-link">{cartObj.length}</Link>
        </li> */}
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
