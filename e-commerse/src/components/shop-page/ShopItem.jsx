import { Link } from "react-router-dom";
import { CurrencyFormatter } from "../../util/CuurencyConvertor.js";
import StarRating from "../featured/StarRating.jsx";
import Button from "../ui/Button.jsx";
import classes from "./ShopItem.module.css";

import { FaHeart } from "react-icons/fa";
// e-commerse\src\assets\items-images\golf-driver.jpg
// import img from "../../../src/assets/items-images/golf-puter.jpg";
// import img from "../../../src/assets/items-images/golf-rolley.jpg";

export default function ShopItem({ item }) {
  return (
    <li className={classes.shopItem}>
      <Link to={item.id}>
        <img
          className={classes.shopItemImg}
          src={item.image}
          alt={item.title}
        />
      </Link>
      <div className={classes.shopItemContent}>
        <div>
          <StarRating />
        </div>
        <h5> {item.title} </h5>
        <p> {CurrencyFormatter(item.price)} </p>
        <p> {item.description} </p>
        <div className={classes.shipItemActions}>
          <Button addToCart={true}> Add to cart </Button>
          <Button watchlist={true}>
            <FaHeart /> Watchlist
          </Button>
        </div>
      </div>
    </li>
  );
}
