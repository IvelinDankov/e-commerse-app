import { NavLink } from "react-router-dom";

import { IoIosArrowForward } from "react-icons/io";

import classes from "./Header.module.css";

export default function Header() {
  return (
    <header>
      <div className={classes.headerWrapper}>
        <p className={classes.headerLinks}>
          <NavLink to="/">Home</NavLink> <IoIosArrowForward />
          <NavLink to="/shop" style={{ color: "black" }}>
            Shop
          </NavLink>
        </p>
        <h2>Shop Page</h2>
        <p>Let's design page you always imaginared</p>
      </div>
    </header>
  );
}
