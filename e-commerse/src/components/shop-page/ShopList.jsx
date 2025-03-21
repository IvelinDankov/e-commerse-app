import { useState, useEffect } from "react";
import classes from "./ShopList.module.css";
import ShopItem from "./ShopItem";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { IoGrid } from "react-icons/io5";
import { CiGrid2V } from "react-icons/ci";
import { CiGrid2H } from "react-icons/ci";
import Loading from "../loading/Loading";

export default function ShopList() {
  const [items, setItems] = useState([]);
  const [loading, setLoadingState] = useState(false);
  const [count, setCount] = useState(8);

  useEffect(() => {
    async function fetchData() {
      setLoadingState(true);
      const response = await fetch(
        "https://golf-shop-application-default-rtdb.europe-west1.firebasedatabase.app/golf.json"
      );

      if (response.status === 401 || response.status === 422) {
        return response;
      }

      if (!response.ok) {
        setLoadingState(false);
        throw new Response(
          JSON.stringify({ message: "Could not fetch data!" }, { status: 404 })
        );
      }

      const resData = await response.json();

      setLoadingState(false);
      return setItems(resData);
    }

    fetchData();
  }, []);

  let initialItems = items.slice(0, count);

  const handleMore = () => {
    setCount(count + 8);
    initialItems.slice(0, count);
  };
  /*   Golf Clubs
Golf Balls
Golf Bags
Cloting & Rainwair
Footwear
Accessories */

  return (
    <section>
      <header className={classes.shopListHeader}>
        <form action="">
          <p className={classes.shopListFormWrapper}>
            <label htmlFor="categories">categories</label>
            <select htmlFor="categories">
              <option value="GolfClubs">Golf Clubs</option>
              <option value="GolfBugs">Golf Bugs</option>
              <option value="Cloting / Rainwear">Cloting / Rainwear</option>
              <option value="Footwear">Footwear</option>
              <option value="Accessories">Accessories</option>
            </select>
          </p>
          <p className={classes.shopListFormWrapper}>
            <label htmlFor="categories">Price</label>
            <select htmlFor="Price">
              <option value="allPrice">All Price</option>
              <option value="hundred">0 - 100</option>
              <option value="twoHundred">101 - 200</option>
              <option value="twoHundredFiveHundred">201 - 500</option>
            </select>
          </p>
          <div className={classes.shopListActions}>
            <p className={classes.shopListFormWrapper}>
              <select htmlFor="Price">
                <option value="allPrice">Sort by</option>
                <option value="hundred">0 - 100</option>
                <option value="twoHundred">101 - 200</option>
                <option value="twoHundredFiveHundred">201 - 500</option>
              </select>
            </p>
            <button>
              <BsFillGrid3X3GapFill />
            </button>
            <button>
              <IoGrid />
            </button>
            <button>
              <CiGrid2V />
            </button>
            <button>
              <CiGrid2H />
            </button>
          </div>
        </form>
      </header>
      <ul className={classes.shopList}>
        {loading && <Loading />}
        {!loading &&
          initialItems.map((item) => <ShopItem key={item.id} item={item} />)}
        <div className={classes.actions}>
          <button onClick={handleMore} className={classes.showMore}>
            Show More
          </button>
        </div>
      </ul>
    </section>
  );
}
