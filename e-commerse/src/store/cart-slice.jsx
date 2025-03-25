import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
    changed: false
  },
  reducers: {
    replaceCart: (state, action) => {
      state.totalQuantity = action.payload.totalQuantity,
      state.totalPrice = action.payload.totalPrice,
      state.items = action.payload.items || []
    },
    addItemToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      state.totalPrice += newItem.price;
      state.changed = true
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          image: newItem.image,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          title: newItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItemFromCart: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      state.totalPrice -= existingItem.price;
      state.changed = true
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
    removeItemsFromCart: (state, action) => {
      state.changed = true
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalPrice -= existingItem.quantity * existingItem.price;

      state.items = state.items.filter((item) => item.id !== id);
      state.totalQuantity -= existingItem.quantity;
    },
  },
});

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async() => {
      const response = await fetch("https://golf-shop-application-default-rtdb.europe-west1.firebasedatabase.app/cart.json")

      if (!response.ok) {
        throw new Error("Error");
        
      }

      const data = await response.json()
      return data
    }

    try {
      const cartData = await fetchData()
      dispatch(cartActions.replaceCart(cartData))
    } catch (err) {
      throw new Error("error", err.message);
      
    }
  }
}

export const sendCartData = (cart) => {
  return async () => {
    const sendRequest = async () => {
      const response = await fetch(
        "https://golf-shop-application-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({items: cart.items, totalQuantity: cart.totalQuantity, totalPrice : cart.totalPrice}),
        }
      );

      if (!response.ok) {
        throw new Error("Sending cart data failed!");
      }
    };

    try {
      await sendRequest();
    } catch (err) {
      throw new Error("error", err.message);
    }
  };
};

export const cartActions = cartSlice.actions;

export default cartSlice;
