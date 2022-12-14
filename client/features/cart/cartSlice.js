import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.items.find(item => item.id === action.payload.id)
      
      if(item) {
        item.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
    },
    deleteItem: (state, action) => {
      console.log(action)
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
    resetCart: state => {
      state.items = [];
    }
  }
})

export const { addToCart, deleteItem, resetCart } = cartSlice.actions

export default cartSlice.reducer