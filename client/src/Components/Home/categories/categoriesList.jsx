import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
import CategoriesListItem from "../categories/categoriesListItem"
import {  setProduct } from "../../../features/sllices/productSllice"

const CategoriesList = () => {
    const dispatch = useDispatch()
    const {categories, categoriesActive, list} = useSelector(state => state.product)
    if (list.length === 0) {
        dispatch(setProduct(categoriesActive))
    }
    return (
        <ul>
            {
                categories.map(item => 
                    <CategoriesListItem key={item} text={item} isActive={item === categoriesActive}/>
                )
            }
        </ul>
    )
}

export default CategoriesList