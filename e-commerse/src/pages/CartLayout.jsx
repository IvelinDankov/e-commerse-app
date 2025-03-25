import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import ShoppingCart from "./ShoppingCart";
import CheckoutPage from "./CheckoutPage";

export default function CartLayout() {
    const showCart = useSelector(state => state.ui.cartIsVisible)
    const showCheckout = useSelector(state => state.ui.checkoutIsVisble)

    let renderComp;
    if (showCart && !showCheckout) {
        renderComp = <ShoppingCart />
    } else if (!showCart && showCheckout) {
        renderComp = <CheckoutPage />
    }

    return <>
        {renderComp}
       <Outlet />
    </>
}