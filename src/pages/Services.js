import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { add, sub } from '../redux/cartSlice'
import { useDispatch } from 'react-redux'


function Services() {
    const [products, setProducts] = useState([])
    const dispatch = useDispatch()

    const getAllProducts = async()=>{
        const response = await fetch ('https://fakestoreapi.com/products')
        const data = await response.json()
        setProducts(data)
    }

    useEffect(()=>{
        getAllProducts()
    }, [])

    const addToCart=(products)=>{
        dispatch(add(products))
    }


    // const navigate = useNavigate()
  return (
    <div className='container'>
        <div className='row'>
                {
                    products.map((item)=>{
                        return(
                            <div className='col-md-3 mt-5'>
                            <div className='card shadow'>
                                <div className='card-body'>
                                    <img src={item.image} alt='' width={150} height={150} />
                                    <h6>{item.category}</h6>
                                    <button className='btn btn-primary' onClick={addToCart}>Add</button>
                                    <button className='btn btn-danger' onClick={()=>{
                                        dispatch(sub(item.id))
                                    }}>Remove</button>
                                </div>
                            </div>
                            </div>
                        )
                    })
                }
        </div>
      {/* <h1>Services page</h1>
      <button className='btn btn-danger' onClick={()=>navigate('/')}>Go to Home Page</button> */}
    </div>
  )
}

export default Services
