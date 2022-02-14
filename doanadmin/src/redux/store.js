import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userRedux";
import productReducer from "./productRedux";
import brandReducer from "./brandRedux";


export default configureStore({
    reducer:{
        user: userReducer,
        product: productReducer,
        brand: brandReducer
    }
})