import Responsive from "../../util/Carousel.jsx";
import classes from "./Featured.module.css";
import { FeaturedItem } from "./FeaturedItem.jsx";





export default function Featured({ items }) {
  return (
    <section className={classes.featuredSection}>
      <div className={classes.featuredBox}>
        <div className={classes.header}>
          <h2>Featured</h2>
        </div>
        <ul className={classes.featuredList}>
        <Responsive>
          {items.map((item, index) => (
            <FeaturedItem key={item.id} item={item} />
          ))}
        </Responsive>
        </ul>

      </div>
    </section>
  );
}
