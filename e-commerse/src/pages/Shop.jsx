



import Footer from "../components/footer/Footer";
import Newsletter from "../components/newsletter/Newsletter";
import Header from "../components/shop-page/Header";
import ShopList from "../components/shop-page/ShopList";

export function ShopPage() {
 

  return (
    <>
     <Header/>
      <main>
       <ShopList/>
       <Newsletter />
      </main>
       <Footer/>
    </>
  );
}
