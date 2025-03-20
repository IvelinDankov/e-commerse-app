import classes from "./ShoppingCart.module.css";

import golfClub from "../../../src/assets/items-images/golf-club.jpg";
import Button from "../ui/Button";
import CheckoutPage from "../../pages/CheckoutPage";

export default function ShoppingCartComponent() {

    function handleCheckout() {
        return <CheckoutPage/>
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
            <li className={classes.cartItem}>
              <div className={classes.cartItemBox}>
                <img src={golfClub} alt="an product image" />
                <div>
                  <h4> Product title </h4>
                  <button>Remove</button>
                </div>
              </div>
              <div className={classes.cartItemActions}>
                <button>-</button>
                <p>2</p>
                <button>+</button>
              </div>
              <div className={classes.cartItemPrice}>
                <p>$19</p>
              </div>
              <div className={classes.cartItemSubtotal}>
                <p> $38</p>
              </div>
            </li>
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
                <label htmlFor="express">Express shipping


                </label>
              </p>
              <p className={classes.formGroup}>

                <input type="radio" name="shipping" id="pickup" />
                <label htmlFor="pickup">Pick Up</label>
              </p>
            <div  className={classes.formGroupSubtotal}>
              {" "}
              <p>Subtotal</p> <p>$123</p>
            </div>
            <hr />
            <div  className={classes.formGroupTotal}>
              <p>Total</p> <p>$1345</p>
            </div>
            <Button onClick={handleCheckout} addToCart={true}>Checkout</Button>
            </form>
          </article>
        </div>
      </div>
    </section>
  );
}
