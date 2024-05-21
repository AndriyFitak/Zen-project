import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getOrders } from '../../api/orders';

const initialState = {
    list: [

    ],
    isLoading: false,
    isError: false,
    phoneNumber: localStorage.getItem('phoneNumber') || ''
}

export const ordersGet = createAsyncThunk(
    'orders/get',
    async (userData) => {
        const data = getOrders(userData);
        return data;
    }
)

const getOrder = createSlice(
    {
        name: 'getOrders',
        initialState,
        reducers: {},
        extraReducers: builder => {
            builder
                .addCase(ordersGet.pending, state => {
                    state.isLoading = true;
                })
                .addCase(ordersGet.fulfilled, (state, action) => {
                    state.isLoading = false;
                    state.list = action.payload.ordersList;
                })
                .addCase(ordersGet.rejected, state => {
                    state.isError = true;
                })
        }
    }
);

export default getOrder.reducer;