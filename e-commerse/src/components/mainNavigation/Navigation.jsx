import classes from "./Navigation.module.css";
import { Link, NavLink } from "react-router-dom";
import NavInfo from "./NavInfo.jsx";
import { useContext, useState } from "react";
import { FaRegUserCircle, FaSearch, FaShoppingBag } from "react-icons/fa";
import SignUpProgressContext from "../../store/SignUpProgress.jsx";
import { uiAction } from "../../store/ui-slice.jsx";
import { useDispatch, useSelector } from "react-redux";

export default function Navigation() {
  const cartQuantity = useSelector(state => state.cart.totalQuantity)

  const [isHover, setIsHover] = useState(false);

  const dispatch = useDispatch();

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

  function handleCartClick() {
    dispatch(uiAction.toggle());
    dispatch(uiAction.checkoutPage())
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
            <button onClick={handleLogin} className={classes.iconBoxBtn}>
              <FaRegUserCircle />
            </button>
            <button onClick={handleCartClick} className={classes.shopBag}>
              <FaShoppingBag />
            </button>
            <p className={classes.shopCounter}>
              <span> {cartQuantity} </span>
            </p>
          </div>
        </div>
        {isHover && <NavInfo />}
      </div>
    </>
  );
}
