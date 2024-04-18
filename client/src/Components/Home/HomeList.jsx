import {useSelector, useDispatch} from "react-redux"
import HomeListItem from "./HomeListItem"
import { setProduct } from "../../features/sllices/productSllice"

const HomeList = (props) => {
    const dispatch = useDispatch()
   const { filterList, list, categoriesActive } = useSelector((state) => state.product)
   const handleGetProduct = () => {
    dispatch(setProduct(categoriesActive))

   }
   const ProductCollection = list.map(item => {
    return (
        <HomeListItem key={item.id} id={item.id} name={item.name} price={item.price} photo={item.photo}/>
    )
})
    return (
        <div>
            <button onClick={handleGetProduct}>Drinks</button>
            {ProductCollection}
        </div>
    )
}

export default HomeList