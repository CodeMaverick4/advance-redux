import axios from "axios"
import { removeItem, setItems } from "./cartSlice";

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