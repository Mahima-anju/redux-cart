import { configureStore } from "@reduxjs/toolkit";
import productReducer from './slices/Productslice';
import wishlistReducer from "./slices/Wishlistslice";
import cartReducer from "./slices/Cartslice";

const productStore=configureStore({
    reducer:{
        productReducer,
        wishlistReducer,
        cartReducer
    }
})

export default productStore