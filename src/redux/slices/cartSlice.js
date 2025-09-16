import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        //add to cart - when add to cart btn clicked from view & wishlist
        addToCart: (state, action) => {
            //find product in state
            const existingProduct = state?.find(item => item.id == action.payload.id)
            if (existingProduct) {
                //increment quuantity
                existingProduct.quantity++
                existingProduct.totalPrice = existingProduct.quantity * existingProduct.price
                //get remaining products other than existing
                const remainProducts =state.filter(item=>item.id!=existingProduct.id)
                state=[...remainProducts,existingProduct]
            } else {
                //add item to cart
                state.push({ ...action.payload, quantity: 1, totalPrice: action.payload.price })
            }
        }
        //remove from cart
        //increment quantity
        //decrement quantity
        //empty cart
    }
})
export const {addToCart}=cartSlice.actions
export default cartSlice.reducer