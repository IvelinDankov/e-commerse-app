import classes from "./FeaturedItem.module.css";
import StarRating from "./StarRating.jsx";

export function FeaturedItem({ item }) {
  return (
    <li className={classes.item}>
      {item.hot === true && <p className={classes.hot}>hot</p>}
      <img src={item.image} alt="an item for sell" />
      <StarRating noOfStars={5} />
      <p> {item.description} </p>
      <p> {item.price} </p>
    </li>
  );
}
