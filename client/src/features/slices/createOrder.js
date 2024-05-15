import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createOrder } from '../../api/orders';

const initialState = {
    list: JSON.parse(localStorage.getItem('basket')) || [],
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
                    finishPrice = item.price * item.quantity;
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
                    if (foundProduct.quantity > 1) {
                        foundProduct.quantity--;
                        foundProduct.allPrice = foundProduct.price * foundProduct.quantity;
                    }
                } else {
                    foundProduct.quantity++;
                    foundProduct.allPrice = foundProduct.price * foundProduct.quantity;
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