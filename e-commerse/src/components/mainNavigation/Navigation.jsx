import classes from "./Navigation.module.css";
import { Link, NavLink } from "react-router-dom";
import NavInfo from "./NavInfo.jsx";
import { useContext, useState } from "react";
import { FaRegUserCircle, FaSearch, FaShoppingBag } from "react-icons/fa";
import SignUpProgressContext from "../../store/SignUpProgress.jsx";

export default function Navigation() {
  const [isHover, setIsHover] = useState(false);

  const progressCtx = useContext(SignUpProgressContext);

  function handleMouseHover() {
    setIsHover(false);
  }

  function handleMouseOut() {
    setIsHover(false);
  }

  function handleLogin() {
    progressCtx.showLogIn();
  }

  return (
    <>
      <div className={classes.nav}>
        <div className={classes["nav__wrapper"]}>
          <Link to="/">
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
                  to="/shop"
                  className={({ isActive }) =>
                    isActive ? classes.active : undefined
                  }
                >
                  Shop <span>&#x2039;</span>
                </NavLink>
              </li>
              {/* <li>
                <NavLink
                  to="/Product"
                  className={({ isActive }) =>
                    isActive ? classes.active : null
                  }
                >
                  Product <span>&#x2039;</span>
                </NavLink>
              </li> */}
              <li>
                <NavLink
                  to="/contact"
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
            <button className={classes.iconBoxBtn} onClick={handleLogin}>
              <FaRegUserCircle />
            </button>
            <Link to="cart" className={classes.shopBag}>
              <FaShoppingBag />
            </Link>
            <p className={classes.shopCounter}>
              <span>3</span>
            </p>
          </div>
        </div>
        {isHover && <NavInfo />}
      </div>
    </>
  );
}
