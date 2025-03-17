import { useState, useEffect } from "react";
import classes from "./ShopList.module.css";
import ShopItem from "./ShopItem";

export default function ShopList() {
  const [items, setItems] = useState([]);
  const [loading, setLoadingState] = useState(false)

  useEffect(() => {
    async function fetchData() {
        setLoadingState(true)
      const response = await fetch(
        "https://golf-shop-application-default-rtdb.europe-west1.firebasedatabase.app/golf.json"
      );

      if (response.status === 401 || response.status === 422) {
        return response
      }

      if (!response.ok) {
        throw new Response(
          JSON.stringify({ message: "Could not fetch data!" }, { status: 404 })
        );
      }

      const resData = await response.json();

      setLoadingState(false)
      return setItems(resData);
    }

    fetchData();

  }, []);

  if (items.length > 8) {
    items.length = 8
  }

  return ( 
    <section>

    <ul className={classes.shopList}>
        {loading && <p >Gold items Loading...</p>}
      {!loading && items &&
        items.length > 0 &&
        items.map((item) => (
          <ShopItem  key={item.is} item={item}/>
        ))}
    </ul>
    </section>
  );
}
