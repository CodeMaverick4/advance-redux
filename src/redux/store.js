import { configureStore } from "@reduxjs/toolkit"
import toogleCartReducer from "./slice/toogleCartSlice"
import cartReducre from "./slice/cartSlice"
const store = configureStore({
    reducer: {
        toogleCart: toogleCartReducer,
        cart:cartReducre
    }
})

export default store