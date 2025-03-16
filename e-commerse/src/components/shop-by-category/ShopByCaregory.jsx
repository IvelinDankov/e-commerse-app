import classes from "./ShopByCategory.module.css";
// e-commerse\src\assets\category-images\Golf Clubs.png
const DUMMY_CATEGORIES = [
  {
    id: "c1",
    image: "../src/assets/category-images/Golf Clubs.png",
    title: "Golg Clubs",
  },
  {
    id: "c2",
    image: "../src/assets/category-images/Golf Balls.png",
    title: "Golg Balls",
  },
  {
    id: "c3",
    image: "../src/assets/category-images/Golf Bags.png",
    title: "Golf Bags",
  },
  {
    id: "c4",
    image: "../src/assets/category-images/Clothing & Rainwear.png",
    title: "Cloting & Rainwair",
  },
  {
    id: "c5",
    image: "../src/assets/category-images/Footwear.png",
    title: "Footwear",
  },
  {
    id: "c6",
    image: "../src/assets/category-images/Accessories.png",
    title: "Accessories",
  },
];

export default function ShopByCategory() {
  return (
    <section className={classes.categoresSection}>
      <div className={classes.categoresWrapper}>
        <h2> Shop By Categories</h2>
        <ul>
          {DUMMY_CATEGORIES.map((cat) => (
            <li key={cat.id}>
              {
                <>
                  <img src={cat.image} alt="category" />
                  <p> {cat.title} </p>
                </>
              }
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
