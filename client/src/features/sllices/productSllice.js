import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getProduct } from "../../Components/api/product"

const initialState = {
    categories: [ "Sweets", "Baking"],
    categoriesActive: "Drinks",
    list: [
        
    ]
}

export const setProduct = createAsyncThunk(
    "product/set",
    async (productsCategory)=> {
        const data = getProduct(productsCategory)
        return data
    }
)

const productSlice = createSlice({
    name: "product",
    initialState,
    extraReducers: builder => {
        builder.addCase(setProduct.fulfilled, (state, action) => {
            state.isOpenProduct = true
            state.list = action.payload.productsList
        })
    },
    changeCategory: (state, action) => {
        state.categoriesActive = action.payload
        state.list = state.list.filter((el) => el.categories ===  action.payload)
    }
})

export const {changeCategory} = productSlice.actions

export default productSlice.reducer