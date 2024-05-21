// HomeListItem.jsx
import React from "react";
import s from "../Home/categories/categories.module.scss";
import { useDispatch } from "react-redux";
import { addToBasket } from "../../features/sllices/basketSlice";

const HomeListItem = ({ id, name, price, photo }) => {
  const dispatch = useDispatch();

  const handleAddToBasket = () => {
    const product = { id, name, price, photo };
    console.log(product);
    dispatch(addToBasket(product));
  };

  return (
    <div className={s.product_card}>
      <img className={s.product_photo} src={photo} alt={name} />
      <p className={s.product_Name}>{name}</p>
      <p className={s.product_price}>{price} грн</p>
      <button className={s.product_btnAdd} onClick={handleAddToBasket}>
        Додати в кошик
      </button>
    </div>
  );
};

export default HomeListItem;
