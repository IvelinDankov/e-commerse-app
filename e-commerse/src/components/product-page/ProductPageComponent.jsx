import { CurrencyFormatter } from "../../util/CuurencyConvertor";
import StarRating from "../featured/StarRating";
import classes from "./ProductPageComponent.module.css";

export default function ProductPageComponent({ item }) {
  return (
    <section className={classes.productPageSection}>
      <div className={classes.productPageWrapper}>
        <div className={classes.imageContainer}>
            <img src={item.image} alt={item.title} />
            <img src={item.image} alt={item.title} />
            <img src={item.image} alt={item.title} />
            <img src={item.image} alt={item.title} />
        </div>
        <div className={classes.productPageContentContainer}>
          <div className={classes.productPageRating}>
            <StarRating />
          </div>
          <h3> {item.title} </h3>
          <p className={classes.productPageDescription}> {item.description} </p>
          <p> {CurrencyFormatter(item.price) } </p>
          <span className={classes.productPageLine}></span>
          <div className={classes.offer}>
            <p>Offer expires in</p>
            <p className={classes.timer}>

              <span>02</span>
              <span>12</span>
              <span>45</span>
              <span>05</span>
              <span>Days</span>
              <span>Hours</span>
              <span>Minutes</span>
              <span>Seconds</span>
            </p>
          </div>
          <span className={classes.productPageLine}></span>
          <div className={classes.productPageMeasurments}>
            <p>Measurements</p>
            <span> L </span>
            <span> M </span>
            <span> XL </span>
          </div>
          <div className={classes.productPageActionsContainer}>
            <div className={classes.productPageActions}>
              <button>-</button>
              <p>1</p>
              <button>+</button>
              <button> Watchlist</button>
            </div>
            <button  className={classes.addToCartBtn}> Add to Cart </button>
          </div>
        </div>
      </div>
    </section>
  );
}
