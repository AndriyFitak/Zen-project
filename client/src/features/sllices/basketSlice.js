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
  localStorage.setItem("basket", JSON.stringify(basket));
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    // Додавання продукту до кошика
    addToBasket: (state, action) => {
      const product = action.payload;
      const existingProduct = state.basket.find((item) => item.id === product.id);

      if (existingProduct) {
       
        existingProduct.quantity += product.quantity || 1;
      } else {
        
        state.basket.push({
          ...product,
          quantity: product.quantity || 1,
        });
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
