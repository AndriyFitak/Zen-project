import { configureStore } from '@reduxjs/toolkit'
import productSllice from './sllices/productSllice'
import basketSlice from "./sllices/basketSlice";
const store = configureStore({
    reducer: {
        // slices here
        product: productSllice,
        basket: basketSlice
    }
})

export default store