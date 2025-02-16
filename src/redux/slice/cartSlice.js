import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],

  totalAmount: 0,

  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );
      state.totalQuantity += 1;
      if (!existingItem) {
        state.cartItems.push({
          id: newItem.id,
          productName: newItem.productName,
          imgUrl: newItem.imgUrl,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
        // state.totalAmount += newItem.price;
      } else {
        existingItem.quantity += 1;
        existingItem.totalPrice += newItem.price;
      }
      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );
      console.log(state.cartItems);
      console.log(state.totalQuantity);
      console.log(newItem);
    },

    removeItem: (state, action) => {
      const id = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);
    
      if (existingItem) {  // if quantity is 1, remove the item from the cart  
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
        state.totalQuantity =state.totalQuantity - existingItem.quantity
      } 
      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
        
      );
      
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
