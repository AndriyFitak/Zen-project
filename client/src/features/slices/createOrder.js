import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createOrder } from '../../api/orders';

const initialState = {
    list: [
        {
            imgSrc: 'asdkjasd',
            productName: 'Cool product',
            productPrice: 100,
            initialPrice: 100,
            count: 1,
            id: 1
        }
    ],
    isLoading: false,
    isError: false,
    isOpenModal: false,
    totalPrice: 0
}

export const orderCreate = createAsyncThunk(
    'order/create',
    async (orderData) => {
        const data = createOrder(orderData);
        return data;
    }
)

const placeAnOrder = createSlice(
    {
        name: 'createOrders',
        initialState,
        reducers: {
            finishPrice: state => {
                let finishPrice = 0;
                state.list.forEach(item => {
                    finishPrice = finishPrice + item.initialPrice * item.count;
                    state.totalPrice = finishPrice;
                    return state;
                });
            },
            changeIsOpenModal: state => {
                state.isOpenModal = !state.isOpenModal;
                return state;
            },
            changeCount: (state, action) => {
                const { id, operation } = action.payload;

                const foundProduct = state.list.find(item => item.id === id);
                if (!foundProduct) return state;

                if (operation === 'minus') {
                    if (foundProduct.count > 1) {
                        foundProduct.count--;
                        foundProduct.productPrice = foundProduct.initialPrice * foundProduct.count;
                    }
                } else {
                    foundProduct.count++;
                    foundProduct.productPrice = foundProduct.initialPrice * foundProduct.count;
                }
                return state;
            }
        },
        extraReducers: builder => {
            builder
                .addCase(orderCreate.pending, state => {
                    state.isLoading = true;
                })
                .addCase(orderCreate.fulfilled, (state, action) => {
                    state.isLoading = false;
                })
                .addCase(orderCreate.rejected, state => {
                    state.isError = true;
                })
        }
    }
);

export const { finishPrice, changeCount, changeIsOpenModal } = placeAnOrder.actions;

export default placeAnOrder.reducer;