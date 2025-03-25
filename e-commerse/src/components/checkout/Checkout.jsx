import { useMemo, useState } from "react";
import classes from "./Checkout.module.css";

import { FaCheck } from "react-icons/fa6";
import Select from "react-select";
import countryList from "react-select-country-list";
import Button from "../ui/Button";

import golfPuterImg from "../../../src/assets/items-images/golf-puter.jpg";
import Complete from "../../pages/ComplatePage";
import { Form } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CurrencyFormatter } from "../../util/CuurencyConvertor";
import { cartActions } from "../../store/cart-slice";

export default function Checkout() {
  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);

  const dispatch = useDispatch()

  const items = useSelector(state => state.cart.items)
  const totalPrice = useSelector(state => state.cart.totalPrice
  )

  const changeHandler = (value) => {
    setValue(value);
  };


  function handleRemoveItem(id) {
    dispatch(cartActions.removeItemFromCart(id))
  }

  function handleAddItem(item) {
    dispatch(cartActions.addItemToCart(item))
  }

    // function handlePlaceOrder(e) {
    //   e.preventDefault()
    //   return <Complete />
    // }


  return (
    <section className={classes.checkoutSection}>
      <div className={classes.checkoutWrapper}>
        <div className={classes.checkoutProgress}>
          <h2>Check Out</h2>
          <div className={classes.checkoutProgressBar}>
            {" "}
            <span className={classes.checkoutProgressNum}>
              {" "}
              <FaCheck />{" "}
            </span>
            <p>Shopping cart</p>{" "}
          </div>
          <div className={classes.checkoutProgressBar}>
            {" "}
            <span className={classes.progressActive}>2</span>{" "}
            <p>Checking details</p>{" "}
          </div>
          <div className={classes.checkoutProgressBar}>
            {" "}
            <span>3</span> <p>Order complete</p>{" "}
          </div>
        </div>
        <div className={classes.contactInformationContainer}>
          <Form action='/cart/complete'  className={classes.contactInformatinForm
          }>
            <div className={classes.contactInformation}>
              <h3>Contact Information</h3>
              <div  className={classes.groupFlex}>
                <p className={classes.group}>
                  <label htmlFor="">first name</label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First name"
                  />
                </p>
                <p className={classes.group}>
                  <label htmlFor="last-name">last name</label>
                  <input type="text" placeholder="Last name" name="lastName" />
                </p>
              </div>
              <p className={classes.group}>
                <label htmlFor="phone-number">phone number</label>
                <input
                  type="number"
                  placeholder="Phone number"
                  name="phoneNumber"
                />
              </p>
              <p className={classes.group}>
                <label htmlFor="email">email address</label>
                <input type="email" placeholder="Your email" name="email"  />
              </p>
            </div>
            <div className={classes.shippingAddress}>
              <h3>Shipping Address</h3>
              <p className={classes.group}>
                <label htmlFor="street">street address</label>
                <input type="text" placeholder="Street Address" name="address" />
              </p>
              <p className={classes.group}>
                <label htmlFor="country">country</label>
                <Select
                  options={options}
                  value={value}
                  onChange={changeHandler}
                />
              </p>
              <p className={classes.group}>
                <label htmlFor="town/city">town/city</label>
                <input type="text" placeholder="Town / City" name="city" />
              </p>
              <div className={classes.groupFlex}>
                <p className={classes.group}>
                  <label htmlFor="state">state</label>
                  <input type="text" placeholder="state" name="state" />
                </p>
                <p className={classes.group}>
                  <label htmlFor="zip code">zip code</label>
                  <input type="text" placeholder="Zip Code" name="zip" />
                </p>
              </div>
                <p className={classes.groupCheck}>
                  <input type="checkbox" name="zip" />
                  <label htmlFor="zip code">
                    Use a different billing address (optional)
                  </label>
                </p>
            </div>
            <div className={classes.payment}>
              <h3>Payment method</h3>
              <p className={classes.groupRadio}>
                <input type="radio" id="cart" name="payment" />
                <label htmlFor="cart">Pay by Card Credit</label>
              </p>
              <p className={classes.groupRadio}>
                <input type="radio"  id="paypal" name="payment" />
                <label htmlFor="paypal">Paypal</label>
              </p>
              <p className={classes.group}>
                <label htmlFor="cardNumber">card number</label>
                <input type="number" />
              </p>
              <div className={classes.groupFlex}>
                <p className={classes.group}>
                  <label htmlFor="expiration date">expiration date</label>
                  <input type="text" value="MM/YY" placeholder="mm/yy" />
                </p>
                <p className={classes.group}>
                  <label htmlFor="cvc">cvc</label>
                  <input type="number" placeholder="CVC code" />
                </p>
              </div>
            </div>
            <Button addToCart={true}> Place Order </Button>
          </Form>
          {/* CARD */}
          <div className={classes.orderSummaryBox}>
            <h3>Order summary</h3>
            <ul className={classes.orderSummaryList}>
              {items && items.map(item => <li key={item.id} className={classes.orderSummaryItem}>
                <p className={classes.orderSummaryImgbox}>
                  <img className={classes.orderSummaryImg} src={item.image} alt="oreder image" />
                </p>
                <div>
                <h4 className={classes.orderSummaryTitle}> {item.title} </h4>
                <div className={classes.orderSummaryActionBox}>
                  <button onClick={() => handleRemoveItem(item.id)} className={classes.orderSummaryBtn}>-</button>
                  <p className={classes.orderSummaryQty}> {item.quantity} </p>
                  <button onClick={() => handleAddItem(item)} className={classes.orderSummaryBtn}>+</button>
                </div>

                </div>
                <p className={classes.orderSummarySum}> {CurrencyFormatter(item.totalPrice) } </p>
              </li>)}
              
            </ul>
            <div className={classes.orderSummaryInfoBox}>
              <p>Shipping</p>
              <p className={classes.free}>Free</p>
            </div>
            <div className={classes.orderSummaryInfoBox}>
              <p>Subtotal</p>
              <p> 99 </p>
            </div>
            <div className={classes.orderSummaryInfoBox}>
              <p>Total</p>
              <p> {CurrencyFormatter(totalPrice) } </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
