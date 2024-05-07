import {useSelector, useDispatch} from "react-redux"
import HomeListItem from "./HomeListItem"
import { setProduct } from "../../features/sllices/productSllice"
import s from "../Home/categories/categories.module.scss"
import welcomeImg from "../Home/welcomeImg.svg"

const HomeList = (props) => {
    const dispatch = useDispatch()
   const { list, categoriesActive } = useSelector((state) => state.product)
   let category = "";
   if (categoriesActive.productsList) {
    category = categoriesActive.productsList[0].category

   }
   const ProductCollection = list.map(item => {
    return (
        <HomeListItem key={item.id} id={item.id} name={item.name} price={item.price} photo={item.photo}/>
    )
})
    return (
        <div>
            <img className={s.welcomeImg} src={welcomeImg} alt="home welcome"/>
            <hr className={s.hr}></hr>
            <p className={s.title}>{category}</p>
            <div className={s.product}>
            {ProductCollection}
            </div>
        </div>

    )
}

export default HomeList