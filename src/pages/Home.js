import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate()
  return (
    <div>
        
      <h1>Home page</h1>
      <button className='btn btn-primary' onClick={()=>navigate('about')}>Go to About Page</button>
      <button className='btn btn-primary' onClick={()=>navigate('about')}>Go to Out Page</button>
      <button className='btn btn-primary' onClick={()=>navigate('about')}>Go to About Page</button>
      <button className='btn btn-primary' onClick={()=>navigate('about')}>Go to About Page</button>
      <button className='btn btn-primary' onClick={()=>navigate('about')}>Go to About Page</button>

      <button className='btn btn-primary' onClick={()=>navigate('about')}>Go to About Page</button>
      <button className='btn btn-primary' onClick={()=>navigate('about')}>Go to About Page</button>
      <button className='btn btn-primary' onClick={()=>navigate('about')}>Go to About Page</button>


    </div>
  )
}

export default Home
