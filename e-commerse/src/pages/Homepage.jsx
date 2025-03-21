import { useLoaderData } from "react-router-dom";
import Banner from "../components/banner/Banner";
import Blog from "../components/blog/Blog";
import Featured from "../components/featured/Featured";
import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";
import Newsfeed from "../components/newsfeed/Newsfeed";
import Newsletter from "../components/newsletter/Newsletter";
import ShopByCategory from "../components/shop-by-category/ShopByCaregory";
import ShopCollection from "../components/shop-collection/shopCollection";

export default function HomePage() {
  const data = useLoaderData();

  return (
    <>
      <Hero />
      <Featured items={data} />
      <ShopByCategory />
      <Banner />
      <ShopCollection />
      <Blog />
      <Newsletter />
      <Newsfeed />
      <Footer />
    </>
  );
}

export async function loader() {
  const response = await fetch(
    "https://golf-shop-application-default-rtdb.europe-west1.firebasedatabase.app/golf.json"
  );

  if (!response.ok) {
    throw new Response(
      JSON.stringify({ message: "Could not fetch golfItems" })
    );
  }

  return response;
}
