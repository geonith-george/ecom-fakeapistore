import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "../features/cart/components/cartSlice";

export const store = configureStore({
    reducer: {
        cart: CartReducer,
        // wishList: WishListReducer,
    }
})