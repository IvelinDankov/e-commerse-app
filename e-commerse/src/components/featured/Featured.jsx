import { NavLink } from "react-router-dom";
import classes from "./Featured.module.css";
import { FeaturedItem } from "./FeaturedItem";

const DUMMY_ITEMS = [
  {
    id: "i1",
    title: "Shark",
    description: "Men's cabretta white golf glove",
    // image: '..\src\assets\featured-images\Paste image.png',
    image: "../../src/assets/featured-images/Paste image.png",
    hot: true,
    price: 5,
  },
  {
    id: "i2",
    title: "Greg Norman",
    description: "Men's Shark Logo",
    image: "../../src/assets/featured-images/T-shirt.png",
    hot: true,
    price: 10,
  },
  {
    id: "i3",
    title: "Greg Norman",
    description: "Men's Shark Logo",
    image: "../../src/assets/featured-images/T-shirt.png",
    hot: true,
    price: 10,
  },
  {
    id: "i4",
    title: "Greg Norman",
    description: "Men's Shark Logo",
    image: "../../src/assets/featured-images/T-shirt.png",
    hot: true,
    price: 10,
  },
  {
    id: "i5",
    title: "Greg Norman",
    description: "Men's Shark Logo",
    image: "../../src/assets/featured-images/T-shirt.png",
    hot: true,
    price: 10,
  },
];

export default function Featured() {
  return (
    <section className={classes.featuredSection}>
      <div className={classes.featuredBox}>
        <div className={classes.header}>
          <h2>Featured</h2>
          <div className={classes.points}>
            <NavLink to='/' className={({isActive}) => isActive ? classes.active : null} end></NavLink>
            <NavLink  to='/' className={({isActive}) => isActive ? classes.active : null}></NavLink>
            <NavLink  to='/' className={({isActive}) => isActive ? classes.active : null}></NavLink>
          </div>
        </div>

        <ul>
          {DUMMY_ITEMS.map((item) => (
            <FeaturedItem key={item.id} item={item} />
          ))}
        </ul>
      </div>
    </section>
  );
}
