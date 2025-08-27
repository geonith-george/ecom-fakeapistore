import { createSlice } from "@reduxjs/toolkit";

export interface ProductType {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating?: {
    rate: number;
    count: number;
  };
}

const initialState: ProductType[] = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
      console.log([...state]);
    },
    removeCartItem: (state, action) => {
      return state.filter(item => item.id !== action.payload.id);
    }
  }
})

export const { addToCart, removeCartItem } = cartSlice.actions;
export default cartSlice.reducer;