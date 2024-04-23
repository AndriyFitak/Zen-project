import { useDispatch } from "react-redux";
import {  setProduct } from "../../../features/sllices/productSllice";
import s from "./categories.module.scss"

const CategoriesListItem  = (props)=> {
    const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setProduct(props.text));
  };
  return (
    <li>
      <button
        onClick={handleClick}
        className={`${props.isActive ? s.btn_active : s.btn}`}
      >
        {props.text}
      </button>
    </li>
  );
}

export default CategoriesListItem