import classes from "./AccountNav.module.css";

import avatarImg from "../../../src/assets/avatar-image/avatar-1.jpg";
import { NavLink } from "react-router-dom";
import Button from "../ui/Button.jsx";

export default function AccountNav() {
  return (
    <aside>
      <div className={classes.avatarImageBox}>
        <img className={classes.avatarImg} src={avatarImg} alt="avatar" />
        <h3>Sofia Haverz</h3>
      </div>
      <div className={classes.avatarContent}>
        <ul className={classes.avatarList}>
          <li className={classes.avatarItem}>
            <NavLink
              to="/account"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Account
            </NavLink>
          </li>
          <li className={classes.avatarItem}>
            <NavLink
              to="address"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Address
            </NavLink>
          </li>
          <li className={classes.avatarItem}>
            <NavLink
              to="orders"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Orders
            </NavLink>
          </li>
          <li className={classes.avatarItem}>
            <NavLink
              to="wishlist"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Wishlist
            </NavLink>
          </li>
          <li className={classes.avatarItem}>
            <Button textOnly>Log Out</Button>
          </li>
        </ul>
      </div>
    </aside>
  );
}
