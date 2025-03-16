import classes from "./Navigation.module.css";
import { Link, NavLink } from "react-router-dom";
import NavInfo from "./NavInfo";
import { useState } from "react";
import { LuTicketPercent } from "react-icons/lu";
import { FaRegUserCircle, FaSearch, FaShoppingBag } from "react-icons/fa";

export default function Navigation() {
  const [isHover, setIsHover] = useState(false);

  function handleMouseHover() {
    setIsHover(true);
  }

  function handleMouseOut() {
    setIsHover(false);
  }

  return (
    <>
      <div className={classes.nav}>
        <div className={classes["nav__wrapper"]}>
            <Link to='/'>
          <p className={classes.logo}>
            3legant<span>.</span>
          </p>
            </Link>
          <nav>
            <ul className={classes.navItem}>
              <li className={classes.navList}>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? classes.active : undefined
                  }
                  end
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  onMouseOver={handleMouseHover}
                  onMouseOut={handleMouseOut}
                  to="/Shop"
                  className={({ isActive }) =>
                    isActive ? classes.active : undefined
                  }
                >
                  Shop <span>&#x2039;</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Product"
                  className={({ isActive }) =>
                    isActive ? classes.active : null
                  }
                >
                  Product <span>&#x2039;</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Contact Us"
                  className={({ isActive }) =>
                    isActive ? classes.active : undefined
                  }
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className={classes.iconBox}>
            <FaSearch />
            <FaRegUserCircle />
            <div className={classes.shopBag}>
            <FaShoppingBag />
              <p className={classes.shopCouter}>
                <span>3</span>
              </p>
            </div>
          </div>
        </div>
        {isHover && <NavInfo  />}
      </div>
    </>
  );
}
