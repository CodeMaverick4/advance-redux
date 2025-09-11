import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: { items: [], totalItems: 0, showCart: false },
    reducers: {
        setItems: (state, action) => {
            state.items = action.payload.items 
            state.totalItems = action.payload.totalItems
            state.showCart = false
        },
        addItem: (state, action) => {
            const newItem = action.payload.item;
            const existingItem = state.items.find(item => item.title === newItem.title);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ ...newItem, quantity: 1 });
            }

            state.totalItems += 1;
        },

        removeItem: (state, action) => {
            const id = action.payload.id;
            const existingItem = state.items.find(item => item.id === id);

            if (existingItem) {
                state.totalItems -= existingItem.quantity;
                state.items = state.items.filter(item => item.id !== id);
            }

            if (state.totalItems <= 0) {
                state.showCart = false;
            }
        },

        incrementQuantityBy1: (state, action) => {
            const title = action.payload;
            const item = state.items.find(item => item.title === title);

            if (item) {
                item.quantity += 1;
                item.total = item.price * item.quantity 
                // state.totalItems += 1;
            }
        },

        decrementQuantityBy1: (state, action) => {
            const title = action.payload;
            const item = state.items.find(item => item.title === title);

            if (item) {
                item.quantity -= 1;
                item.total = item.price * item.quantity 

                // // remove item completely if quantity reaches 0
                // if (item.quantity <= 0) {
                //     state.items = state.items.filter(i => i.title !== title);
                // }

                // if (state.totalItems <= 0) {
                //     state.showCart = false;
                // }
            }
        },

        toogleCart: (state) => {
            state.showCart = !state.showCart;
        },
    },
});

export const { addItem, removeItem, incrementQuantityBy1, decrementQuantityBy1, toogleCart,setItems } = cartSlice.actions;

export default cartSlice.reducer;
