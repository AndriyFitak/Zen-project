// basketSlice.js
import { createSlice } from "@reduxjs/toolkit";

// Функція для отримання кошика з LocalStorage
const loadBasketFromLocalStorage = () => {
  const data = localStorage.getItem("basket");
  if (data) {
    return JSON.parse(data);
  }
  return [];
};

// Початковий стан
const initialState = {
  basket: loadBasketFromLocalStorage(),
};

// Функція для збереження кошика в LocalStorage
const saveBasketToLocalStorage = (basket) => {

  const updatedBasket = basket.map((item) => ({
    ...item,
    allPrice: item.price * item.quantity,
    id: item.id
  }));
  localStorage.setItem("basket", JSON.stringify(updatedBasket));
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    // Додавання продукту до кошика
    addToBasket: (state, action) => {
      const product = action.payload;
      let isBasketItem = false;
      state.basket = state.basket.map((item) => {
        if (item.id === product.id) {
          isBasketItem = true;
          item.quantity += 1;
          item.allPrice = item.quantity * item.price; // Оновлення загальної ціни продукту
        }
        return item;
      });
      if (!isBasketItem) {
        state.basket = [
          ...state.basket,
          {
            ...product,
            quantity: 1,
            allPrice: product.price // Початкова ціна при додаванні товару
          },
        ];
      }
      saveBasketToLocalStorage(state.basket);
    },

    // Видалення продукту з кошика
    removeFromBasket: (state, action) => {
      const productId = action.payload;
      state.basket = state.basket.filter((item) => item.id !== productId);
      saveBasketToLocalStorage(state.basket);
    },

    // Оновлення кількості
    updateQuantity: (state, action) => {
      const { id, change } = action.payload;
      const product = state.basket.find((item) => item.id === id);
      if (product) {
        product.quantity += change;
        product.allPrice = product.quantity * product.price; // Оновлення загальної ціни продукту при зміні кількості
        if (product.quantity <= 0) {
          state.basket = state.basket.filter((item) => item.id !== id);
        }
      }
      saveBasketToLocalStorage(state.basket);
    },

    // Завантаження кошика
    loadBasket: (state) => {
      state.basket = loadBasketFromLocalStorage();
    },

    // Очистка кошика
    clearBasket: (state) => {
      state.basket = [];
      localStorage.removeItem("basket");
    },
  },
});

export const {
  addToBasket,
  removeFromBasket,
  updateQuantity,
  loadBasket,
  clearBasket,
} = basketSlice.actions;

export default basketSlice.reducer;
