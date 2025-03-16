
import classes from './Blog.module.css'

// e-commerse\src\assets\blog-images\blog-cup.png
import blogShoe from "../../../src/assets/blog-images/blog-shoe.png";
import blogShoes from "../../../src/assets/blog-images/blog-shoes.png";
import blogCup from "../../../src/assets/blog-images/blog-cup.png";

export default function Blog() {
  return (
    <section className={classes.blogSection}>
      <div className={classes.blogWrapper}>
        <header className={classes.blogHeader}>
          <h2>Latest Articles</h2>
          <a href="#">View More</a>
        </header>
        <ul className={classes.blogItems}>
          <li>
            <img src={blogShoe} alt="product" />
            <div className={classes.blogSection}>
              <h4>Air Jordan x Travis Scott Event</h4>
              <a href="">Read More &rarr;</a>
            </div>
          </li>
          <li>
            <img src={blogShoes} alt="product" />
            <div className={classes.blogSection}>
              <h4>The timeless classics on the green</h4>
              <a href="">Read More &rarr;</a>
            </div>
          </li>
          <li>
            <img src={blogCup} alt="product" />
            <div className={classes.blogSection}>
              <h4>The 2026 Ryder Cup</h4>
              <a href="">Read More &rarr;</a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
