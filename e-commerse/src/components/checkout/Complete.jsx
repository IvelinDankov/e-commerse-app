import { FaCheck } from "react-icons/fa";
import classes from "./Complete.module.css";

import golfPuterImg from "../../../src/assets/items-images/golf-puter.jpg";
import Button from "../ui/Button";
import { Link } from "react-router-dom";

export default function Complete() {
  return (
    <section>
      <div className={`sectionWrapper ${classes.sectionWrapper}`}>
        <div className={classes.checkoutProgress}>
          <h2>Complete!</h2>
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
            <span className={classes.checkoutProgressNum}>
              <FaCheck />
            </span>{" "}
            <p>Checking details</p>{" "}
          </div>
          <div className={classes.checkoutProgressBar}>
            {" "}
            <span className={classes.progressActive}>3</span>{" "}
            <p>Order complete</p>{" "}
          </div>
        </div>

        {/* Congratulations */}

        <div className={classes.completeContainer}>
            <h5>Thank you! 🎉</h5>
            <h3>Your order has bin received</h3>
            <ul className={classes.completeList}>
                <li className={classes.completeItem}>
                    <span>1</span>
                    <img src={golfPuterImg} alt="item img" />
                </li>
                <li className={classes.completeItem}>
                    <span>2</span>
                    <img src={golfPuterImg} alt="item img" />
                </li>
                <li className={classes.completeItem}>
                    <span>3</span>
                    <img src={golfPuterImg} alt="item img" />
                </li>
            </ul>
            <div className={classes.completeDetails}>
                <p><span>Order code:</span> <span  className={classes.completeDetailsInfo}># 0123456</span> </p>
                <p> <span>Date:</span> <span className={classes.completeDetailsInfo}>October 19, 2023</span> </p>
                <p> <span>Total:</span> <span className={classes.completeDetailsInfo}>$ 1350</span> </p>
                <p> <span>Payment Method: </span> <span className={classes.completeDetailsInfo}>Credit Cart</span> </p>
                <Link addToCart={true} to='/'>Go back Home</Link>
            </div>
        </div>

      </div>
    </section>
  );
}
