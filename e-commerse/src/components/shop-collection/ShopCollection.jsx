import classes from "./ShopCollection.module.css";

// e-commerse\src\assets\collection-images\junior-set.png
import juniorsSet from "../../../src/assets/collection-images/junior-set.png";
import menSet from "../../../src/assets/collection-images/men-set.png";
import womenSet from "../../../src/assets/collection-images/women-set.png";
import { Link } from "react-router-dom";

export default function ShopCollection() {
  return (
    <section className={classes.shopCollectionSecion}>
      <div className={classes.shopCollectionWrapper}>
        <h2>Shop Collection</h2>
        <ul className={classes.shopCollectioContainer}>
          <li>
            <img src={juniorsSet} alt="juniors set sticts" />
            {/* <div className={classes.info}>
                        <h4>Juniors Set</h4>
                        <a to="./collection">Collections &arr;</a>
                    </div> */}
            <div className={classes.info}>
              <h4>Juniors Set</h4>
              <Link to="#">Collections &rarr;</Link>
            </div>
          </li>
          <li>
            <img src={menSet} alt="mens set sticts" />
            <div className={classes.info}>
              <h4>Men's Set</h4>
              <Link to="#">Collections &rarr;</Link>
            </div>
          </li>
          <li>
            <img src={womenSet} alt="women set sticts" />
            <div className={classes.info}>
              <h4>Women's Set</h4>
              <Link to="#">Collections &rarr;</Link>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
