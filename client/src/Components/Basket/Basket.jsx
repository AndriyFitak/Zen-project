import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadBasket, removeFromBasket, updateQuantity } from "../../features/sllices/basketSlice";

import "./basket.css"; // Враховуючи існуючі стилі

const Basket = () => {
  const dispatch = useDispatch();
  const { basket } = useSelector((state) => state.basket);

  useEffect(() => {
    dispatch(loadBasket()); // завантаження кошика з LocalStorage при першому запуску
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(removeFromBasket(id)); // видалення товару з кошика
  };

  const handleIncreaseQuantity = (id) => {
    dispatch(updateQuantity({ id, change: 1 })); // збільшення кількості
  };

  const handleDecreaseQuantity = (id, quantity) => {
    if (quantity > 1) {
      dispatch(updateQuantity({ id, change: -1 })); // зменшення кількості
    } 
  };

  const totalPrice = basket.reduce((acc, item) => acc + item.price * item.quantity, 0); // розрахунок загальної вартості кошика

  return (
    <div className="container">
      <div className="page">
        <p className="basket-text">Basket</p>
        <hr className="hr-line" />
        <div className="page-products">
          {basket.map((item) => (
            <div className="product-card" key={item.id}>
              <img className="product-img" src={item.photo} alt={item.name} />
              <p className="product_Name">{item.name}</p>
              <p className="price-text">Price: {item.allPrice} грн</p>
              <div className="quantity">
                <button className="plus-minus-btn" onClick={() => handleIncreaseQuantity(item.id)}>+</button>
                <p>{item.quantity}</p>
                <button className="plus-minus-btn" onClick={() => handleDecreaseQuantity(item.id, item.quantity)}>-</button>
              </div>
              <div className="order-delete-btns">
                <button className="order-btn">Замовити</button>
                <button className="delete-btn" onClick={() => handleDelete(item.id)}>Видалити</button>
              </div>
            </div>
          ))}
          
        </div>
        <div className="total-price">
          <p>Загальна ціна: <span className="total-price-value">{totalPrice} грн</span></p>
          <button className="order-all-btn">Замовити все</button>
        </div>
      </div>
    </div>
  );
};

export default Basket;
