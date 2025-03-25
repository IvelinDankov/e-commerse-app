import { Outlet } from "react-router-dom";
import MainNavigation from "../components/mainNavigation/MainNavigation.jsx";
import { SignUpProgressProvider } from "../store/SignUpProgress.jsx";
import Login from "../components/signup/Login.jsx";
import Signup from "../components/signup/Signup.jsx";
import ShoppingCart from "./ShoppingCart.jsx";
import { useDispatch, useSelector } from "react-redux";
import CheckoutPage from "./CheckoutPage.jsx";
import CartProgressContext from "../store/cartProgress.jsx";
import CartLayout from "./CartLayout.jsx";
import { useEffect } from "react";
import { fetchCartData, sendCartData } from "../store/cart-slice.jsx";

let isInitial = true;

export default function RootLayout() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  let showCart = useSelector((state) => state.ui.cartIsVisible);
  const showCheckoutPage = useSelector((state) => state.ui.checkoutIsVisible);


  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    if (cart.changed) {
      
      dispatch(sendCartData(cart));
    }

  }, [cart, dispatch]);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);


  return (
    <>
     
        <SignUpProgressProvider>
          <Login />
          <Signup />
          <MainNavigation />

          {showCart ? <CartLayout /> : <Outlet />}

          {/* { <ShoppingCart {cartProgressCtx.progress === 'cart'} /> && <Outlet />} */}
          {/* {showCheckoutPage ? !showCart : <CheckoutPage /> } */}
        </SignUpProgressProvider>
    </>
  );
}
