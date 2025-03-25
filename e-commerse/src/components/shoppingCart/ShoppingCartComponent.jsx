import classes from "./ShoppingCart.module.css";

import Button from "../ui/Button"
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import { CurrencyFormatter } from "../../util/CuurencyConvertor.js";
import { uiAction } from "../../store/ui-slice.jsx";

export default function ShoppingCartComponent() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  // const showCheckoutPage = useSelector((state) => state.ui.showCheckoutPage)
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  function handleCheckout() {
    dispatch(uiAction.checkoutPage())
    dispatch(uiAction.toggle())
  }

  function handleAddItem(item) {
    dispatch(cartActions.addItemToCart(item));
  }

  function handleRemoveItem(id) {
    dispatch(cartActions.removeItemFromCart(id));
  }

  function handleRemoveAllItems(id) {
    dispatch(cartActions.removeItemsFromCart(id))
  }

  return (
    <section className={classes.shoppingCartSection}>
      <div className={classes.shoppingCartWrapper}>
        <div className={classes.shoppingCartProgress}>
          <h2>Cart</h2>
          <div className={classes.shoppingCartProgressBar}>
            {" "}
            <span className={classes.progressActive}>1</span>{" "}
            <p>Shopping cart</p>{" "}
          </div>
          <div>
            {" "}
            <span>2</span> <p>Checking details</p>{" "}
          </div>
          <div>
            {" "}
            <span>3</span> <p>Order complete</p>{" "}
          </div>
        </div>
        <div className={classes.cartItemsContainer}>
          <ul className={classes.cartList}>
            <li className={classes.cartItem}>
              <p>Product</p>
              <p>Quantity</p>
              <p>Price</p>
              <p>Subtotal</p>
            </li>
            <hr />
            {items.map((item) => (
              <li key={item.id} className={classes.cartItem}>
                <div className={classes.cartItemBox}>
                  <img src={item.image} alt={item.title} />
                  <div>
                    <h4> {item.title} </h4>
                    <button onClick={() => handleRemoveAllItems(item.id)} className={classes.removeBtn}>Remove</button>
                  </div>
                </div>
                <div className={classes.cartItemActions}>
                  <button onClick={() => handleRemoveItem(item.id)}>-</button>
                  <p> {item.quantity} </p>
                  <button onClick={() => handleAddItem(item)}>+</button>
                </div>
                <div className={classes.cartItemPrice}>
                  <p> {CurrencyFormatter(item.price) } </p>
                </div>
                <div className={classes.cartItemSubtotal}>
                  <p> {CurrencyFormatter(item.totalPrice) }</p>
                </div>
              </li>
            ))}
          </ul>
          <article className={classes.cartSummary}>
            <h4>Cart Summary</h4>
            <form action="cart/checkout">
              <p className={classes.formGroup}>
                <input type="radio" name="shipping" id="free" />
                <label htmlFor="free">Free shipping</label>
              </p>
              <p className={classes.formGroup}>
                <input type="radio" name="shipping" id="express" />
                <label htmlFor="express">Express shipping</label>
              </p>
              <p className={classes.formGroup}>
                <input type="radio" name="shipping" id="pickup" />
                <label htmlFor="pickup">Pick Up</label>
              </p>
              <div className={classes.formGroupSubtotal}>
                {" "}
                <p>Subtotal</p> <p>$123</p>
              </div>
              <hr />
              <div className={classes.formGroupTotal}>
                <p>Total</p> <p> {CurrencyFormatter(totalPrice) } </p>
              </div>
              <Button  addToCart={true}>
                Checkout
              </Button>
            </form>
          </article>
        </div>
      </div>
    </section>
  );
}
