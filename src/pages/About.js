import React from 'react'
import { useNavigate } from 'react-router-dom'

function About() {
    const navigate = useNavigate()
  return (
    <div>
      <h1>About us a page</h1>
      <button className='btn btn-warning' onClick={()=>navigate('/contact')}>Contact</button>
    </div>
  )
}

export default About
