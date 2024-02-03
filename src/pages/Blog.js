import React from 'react'
import { useParams } from 'react-router-dom'

function Blog() {
    const {id} = useParams()
  return (
    <div>
      <h1>Blog page</h1>
      <h2>My name is {id}</h2>
    </div>
  )
}

export default Blog
