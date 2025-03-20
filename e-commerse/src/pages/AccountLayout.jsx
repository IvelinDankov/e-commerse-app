import { Outlet } from "react-router-dom";
import AccountNav from "../components/account/AccountNav.jsx";

import classes from "./AccountLayout.module.css";
import Footer from "../components/footer/Footer.jsx";

export default function AccountLayout() {
  return (
    <>
      <section>
        <div className={`sectionWrapper ${classes.sectionWrapper}`}>
          <h2>My Account</h2>

          {/* account starting here */}
          <div className={classes.accountContainer}>
            <AccountNav />
            <Outlet />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
