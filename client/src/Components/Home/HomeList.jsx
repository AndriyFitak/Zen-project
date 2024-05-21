import {useSelector} from "react-redux"
import HomeListItem from "./HomeListItem"
import s from "../Home/categories/categories.module.scss"
import welcomeImg from "../Home/welcomeImg.svg"

const HomeList = () => {
   const { list, categoriesActive, filter, inSearch } = useSelector((state) => state.product)
   let category = "";
   if (categoriesActive.productsList) {
    category = categoriesActive.productsList[0].category

   }
   let ProductCollection
if (inSearch) {
    ProductCollection = filter.map(item => {
        return (
            <HomeListItem key={item._id} id={item._id} name={item.name} price={item.price} photo={item.photo}/>
        )
    })
} else {
     ProductCollection = list.map(item => {
        return (
            <HomeListItem key={item._id} id={item._id} name={item.name} price={item.price} photo={item.photo}/>
        )
    })
}
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