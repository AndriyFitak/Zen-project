import { configureStore } from '@reduxjs/toolkit'
import productSllice from './sllices/productSllice'
import basketSlice from "./sllices/basketSlice";
import createOrderSlice from './sllices/createOrderSlice';
import yourOrdersSlice from './sllices/yourOrdersSlice';

const store = configureStore({
    reducer: {
        product: productSllice,
        basket: basketSlice,
        createOrder: createOrderSlice,
        yourOrders: yourOrdersSlice
    }
})

export default store