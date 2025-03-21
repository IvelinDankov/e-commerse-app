import { FaStar } from "react-icons/fa";
import classes from "./StarRating.module.css";
import { useState } from "react";

export default function StarRating({ noOfStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(getCurrentIndex) {
    setRating(getCurrentIndex);
  }

  function handleMouseEnter(getCurrentIndex) {
    setHover(getCurrentIndex);
  }
  function handleMouseLeave() {
    setHover(rating);
  }

  return (
    <div className={classes["star-rating"]}>
      {[...Array(noOfStars)].map((_, index) => {
        index++;
        return (
          <FaStar
            key={index}
            className={
              index <= (hover || rating) ? classes.active : classes.inactive
            }
            onMouseOver={() => handleMouseEnter(index)}
            onMouseOut={() => handleMouseLeave()}
            onClick={() => handleClick(index)}
          />
        );
      })}
    </div>
  );
}
