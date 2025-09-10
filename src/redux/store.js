import { configureStore } from "@reduxjs/toolkit"
import toogleCartReducer from "./slice/toogleCartSlice"
const store = configureStore({
    reducer: {
        toogleCart: toogleCartReducer
    }
})

export default store