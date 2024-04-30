import { configureStore } from '@reduxjs/toolkit'

import placeAnOrder from './slices/createOrder'
import yourOrders from './slices/yourOrders'

const store = configureStore({
    reducer: {
        createOrder: placeAnOrder,
        yourOrders: yourOrders
    }
})

export default store