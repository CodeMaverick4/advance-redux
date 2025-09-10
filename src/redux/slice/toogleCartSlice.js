import { createSlice } from "@reduxjs/toolkit"

const toogleCartSlice = createSlice({
    name: "toogleCart",
    initialState: false,
    reducers:{
        toogleCart:(state)=>!state
    }
})

export const {toogleCart} = toogleCartSlice.actions
export default toogleCartSlice.reducer