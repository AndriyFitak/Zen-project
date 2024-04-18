const HomeListItem = (props) => {
    return (
        <li>
            <img src={props.photo} alt="" />
            <p>{props.name}</p>
            <p>{props.price}</p>
        </li>
    )
}
export default HomeListItem