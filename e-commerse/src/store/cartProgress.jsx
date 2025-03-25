import { createContext, useState } from "react";

const CartProgressContext = createContext({
  progress: "",
  showCart: () => {},
  hideCart: () => {},
  showCheckout: () => {},
  hideCheckout: () => {},
  showMsg: () => {},
  hideMsg: () => {},
});

export function cartProgressProvider({ children }) {
  const [cartProgress, setCartProgress] = useState("");

  function showCart() {
    setCartProgress("cart");
  }
  function hideCart() {
    setCartProgress("");
  }
  function showCheckout() {
    setCartProgress("checkout");
  }
  function hideCheckout() {
    setCartProgress("");
  }
  function showMsg() {
    setCartProgress("msg");
  }
  function hideMsg() {
    setCartProgress("");
  }

  const cartProgressCtx = {
    progress: cartProgress,
    showCart,
    hideCart,
    showCheckout,
    hideCheckout,
    showMsg,
    hideMsg,
  };
  return (
    <CartProgressContext.Provider value={cartProgressCtx}>
      {children}
    </CartProgressContext.Provider>
  );
}

export default CartProgressContext;
