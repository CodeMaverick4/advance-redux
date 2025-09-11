import axios from "axios"
import { decrementQuantityBy1, incrementQuantityBy1, removeItem, setItems } from "./cartSlice";

export const loadCartItems = () => {
    return (async (dispatch) => {
        try {
            const res = await axios.get("https://todo-app-75d12-default-rtdb.firebaseio.com/cart.json");
            console.log(res.data);
            let arr = [];
            for (let key in res.data) {
                arr.push({ id: key, ...res.data[key] });
            }
            console.log(arr)

            dispatch(setItems({ items: arr, totalItems: arr.length }))

        } catch (err) {
            alert(err.message);
        }
    })
}


export const deleteCartItems = (id) => {
    return async (dispatch) => {
        try {
            const res = await axios.delete(`https://todo-app-75d12-default-rtdb.firebaseio.com/cart/${id}.json`);            
            dispatch(removeItem({id}))
        } catch (err) {
            alert(err.message);
        }
    }
}

export const updateCartItem = (status,item) => {
// export const incrementCartItems = (status,item) => {
    return async (dispatch) => {
        try {
            const res = await axios.put(`https://todo-app-75d12-default-rtdb.firebaseio.com/cart/${item.id}.json`,item);            
            if(status){
                dispatch(incrementQuantityBy1({id:item.id}))
            }else{
                dispatch(decrementQuantityBy1({id:item.id}))
            }
            
        } catch (err) {
            alert(err.message);
        }
    }
}