import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductPageComponent from "../components/product-page/ProductPageComponent.jsx";

export default function ProductPage() {
  const [item, setItems] = useState([]);
  //   const id = params.productId
  const params = useParams();
  const productId = params.productId;

  useEffect(() => {
    fetch(
      "https://golf-shop-application-default-rtdb.europe-west1.firebasedatabase.app/golf.json"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setItems(data.find((item) => item.id === productId));
      });
  }, []);

 

  return (
    <ProductPageComponent item={item}/>
  );
}
