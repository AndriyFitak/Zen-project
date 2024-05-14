
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getProduct } from "../../Components/api/product"
import searchProduct from "../search"

const initialState = {
    categories: ["Drinks", "Sweets", "Baking"],
    categoriesActive: "Drinks",
    list: [
        
    ],
    filter: [],
    searchValue: "",
    inSearch: false
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
    reducers: {
        changeCategory: (state, action) => {
            state.categoriesActive = action.payload
            state.list = state.list.filter((el) => el.categories ===  action.payload)
        },
        changeSearch: (state, action) => {
            state.searchValue = action.payload
            if (action.payload.length !== 0) {
                state.inSearch = true
            } else {
                state.inSearch = false
            }
        },
        startSearch: (state) => {
           state.filter = searchProduct(state.list, state.searchValue)
        }
    },
    extraReducers: builder => {
        builder.addCase(setProduct.fulfilled, (state, action) => {
            state.isOpenProduct = true
            state.list = action.payload.productsList
            state.categoriesActive = action.payload
        })
},
    
})

export const {changeCategory, changeSearch, startSearch} = productSlice.actions

export default productSlice.reducer