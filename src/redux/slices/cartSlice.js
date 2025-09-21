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
                const remainProducts = state.filter(item => item.id != existingProduct.id)
                state = [...remainProducts, existingProduct]
            } else {
                //add item to cart
                state.push({ ...action.payload, quantity: 1, totalPrice: action.payload.price })
            }
        },
        //remove from cart-when delete btn clicked in cart component
        removeCartItem: (state, action) => {
            return state.filter(item => item.id != action.payload)
        },
        //increment quantity
        incrementQuantity: (state, action) => {
            //find product in state
            const existingProduct = state?.find(item => item.id == action.payload)
            if (existingProduct) {
                existingProduct.quantity++
                existingProduct.totalPrice = existingProduct.quantity * existingProduct.price
                const remainingProducts = state?.filter(item => item.id != action.payload)
                state = [...remainingProducts, existingProduct]
            }

        },
        //decrement quantity
        decrementQuantity: (state, action) => {
            //find product in state
            const existingProduct = state?.find(item => item.id == action.payload)
            if (existingProduct) {
                existingProduct.quantity--
                existingProduct.totalPrice = existingProduct.quantity * existingProduct.price
                const remainingProducts = state?.filter(item => item.id != action.payload)
                state = [...remainingProducts, existingProduct]
            }

        },
        //empty cart
        emptyCart: (state) => {
            return state = []
        }
    }
})
export const { addToCart, removeCartItem, incrementQuantity, decrementQuantity, emptyCart } = cartSlice.actions
export default cartSlice.reducer