import React from 'react'
import {createSlice} from "@reduxjs/toolkit"

const initialState= {
    cart: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        add: (state, action) => {
            // Your reducer logic here
            state.cart.push(action.payload)
        },
        sub: (state, action) => {
            // Your reducer logic here
            const updatedCart = state.cart.filter((item) => item.id !== action.payload);
            // Make sure to return the updated state
            return {
              ...state,
              cart: updatedCart,
            };
          },
    }
}) 

export const {add, sub} = cartSlice.actions
export default cartSlice.reducer

