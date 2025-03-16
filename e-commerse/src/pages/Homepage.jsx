import Banner from "../components/banner/Banner";
import Blog from "../components/blog/Blog";
import Featured from "../components/featured/Featured";
import Hero from "../components/hero/Hero";
import Newsletter from "../components/newsletter/Newsletter";
import ShopByCategory from "../components/shop-by-category/ShopByCaregory";
import ShopCollection from "../components/shop-collection/shopCollection";

export default function HomePage() {
    return <>
    <Hero />
    <Featured />
    <ShopByCategory />
    <Banner />
    <ShopCollection/>
    <Blog/>
    <Newsletter/>
    </> 
}