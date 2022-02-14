import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartRedux";
import userReducer from "./userRedux";
import brandReducer from "./brandRedux";
import productReducer from "./productRedux";


export default configureStore({
    reducer:{
        cart: cartReducer,
        user: userReducer,
        brand: brandReducer,
        product: productReducer
    }
})