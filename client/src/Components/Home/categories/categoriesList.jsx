import { useDispatch, useSelector } from "react-redux"
import CategoriesListItem from "../categories/categoriesListItem"
import {  setProduct } from "../../../features/sllices/productSllice"
import s from '../categories/categories.module.scss'

const CategoriesList = () => {
    const dispatch = useDispatch()
    const {categories, categoriesActive, list} = useSelector(state => state.product)
    if (list.length === 0) {
        dispatch(setProduct(categoriesActive))
    }
    console.log(categoriesActive)
    return (
        <ul className={s.btnCategory}>
            {
                categories.map(item => 
                    <CategoriesListItem key={item} text={item} isActive={item === categoriesActive}/>
                )
            }
        </ul>
    )
}

export default CategoriesList