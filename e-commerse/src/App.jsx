import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import HomePage, { loader as homePageLoader } from "./Pages/Homepage.jsx";
import ProductPage from "./Pages/ProductPage.jsx";
// import RootLayout from "./Pages/RootLayout.jsx";
import { ShopPage } from "./pages/Shop.jsx";
import ShopLayout from "./pages/ShopLayout.jsx";
import ShoppingCart from "./pages/ShoppingCart.jsx";
import CheckoutPage from "./pages/CheckoutPage.jsx";
import Complete from "./pages/ComplatePage.jsx";
import SignUp from "./pages/SignUpPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RootLayout from "./pages/RootLayout.jsx";
import MyAccountPage from "./pages/MyAccountPage.jsx";
import AccountLayout from "./pages/AccountLayout.jsx";
import AccountAddressPage from "./pages/AccoutAddressPage.jsx";
import OrderHistoryPage from "./pages/OrdersHistoryPage.jsx";
import WishListPage from "./pages/WishListPage.jsx";
import ContantPage from "./pages/ContactPage.jsx";

const router = createBrowserRouter([
  {
    path: "",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage />, loader: homePageLoader },
      {
        path: "shop",
        element: <ShopLayout />,
        children: [
          { index: true, element: <ShopPage /> },
          { path: ":productId", element: <ProductPage /> },

          { path: "product", element: <ProductPage /> },
        ],
      },
      { path: "contact", element: <ContantPage /> },
      { path: "cart", element: <ShoppingCart /> },
      { path: "cart/checkout", element: <CheckoutPage /> },
      { path: "cart/complete", element: <Complete /> },
      { path: "signup", element: <SignUp /> },
      { path: "login", element: <LoginPage /> },
      {
        path: "account",
        element: <AccountLayout />,
        children: [
          { index: true, element: <MyAccountPage /> },
          { path: "address", element: <AccountAddressPage /> },
          { path: "orders", element: <OrderHistoryPage /> },
          { path: "wishlist", element: <WishListPage /> },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
