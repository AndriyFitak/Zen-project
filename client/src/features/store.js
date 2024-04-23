import { configureStore } from '@reduxjs/toolkit'
import productSllice from './sllices/productSllice'

const store = configureStore({
    reducer: {
        // slices here
        product: productSllice
    }
})

export default store