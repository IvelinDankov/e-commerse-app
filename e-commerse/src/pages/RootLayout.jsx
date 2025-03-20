import { Outlet } from "react-router-dom";
import MainNavigation from "../components/mainNavigation/MainNavigation.jsx";
import { SignUpProgressProvider } from "../store/SignUpProgress.jsx";
import Login from "../components/signup/Login.jsx";
import Signup from "../components/signup/Signup.jsx";

export default function RootLayout() {
  return (
    <>
      <SignUpProgressProvider>
        <Login />
        <Signup />
        <MainNavigation />
        <Outlet />
      </SignUpProgressProvider>
    </>
  );
}
