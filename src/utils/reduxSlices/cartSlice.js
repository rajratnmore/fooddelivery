import {createSlice, current} from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const cartSlice = createSlice({
    name : "cart",
    initialState : {
        items : []
    },
    reducers : {
        addItem : (state, action) => {
            // mutating the state here
            state.items.push(action.payload);
        },
        removeItem : (state, action) => {
            const {items} = current(state);
            
            /* state.items = items.filter((item) => item.card.info.id !== action.payload.card.info.id); */

                // We can either use above statement or below statements. Above statement directly modifies the state and below statement returns a new state which is replaced with original state internally.
            
            /*  const cardList = items.filter((item) => item.card.info.id !== action.payload.card.info.id); 
                return { items : cardList}; */

            const cardList = items.filter((item) => item.card.info.id !== action.payload.card.info.id); 
            return { items : cardList};
        },
        clearCart : (state) => {
            state.items.length = 0;
        }
    }
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;