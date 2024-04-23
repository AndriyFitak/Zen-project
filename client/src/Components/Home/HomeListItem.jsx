import s from "../Home/categories/categories.module.scss"

const HomeListItem = (props) => {
    return (
            <div className={s.product_card}>
                <img className={s.product_photo} src={props.photo} alt="" />
                <p className={s.product_Name}>{props.name}</p>
                <p className={s.product_price}>{props.price} uah</p>
            </div>
    )
}
export default HomeListItem