

import { IoCloseOutline } from "react-icons/io5";

import golfShoe from "../../assets/items-images/Golf-shoe.jpg";

import classes from "./WishList.module.css";

export default function WishList() {
    return <main>
        <h3>Your Wishlist</h3>
            <header className={classes.wishlistHeader}>
                <p>Product</p>
                <p>Price</p>
                <p>Action</p>
            </header>
        <ul className={classes.wishlistList}>
            <li className={classes.wishlistItem}>
                <div className={classes.wishlistProductBox}>
                <button className={classes.wishlistBtn}> <IoCloseOutline/> </button>
                <p className={classes.wishlistImgBox}>
                    <img className={classes.wishlistImg} src={golfShoe} alt="item-image" />
                </p>
                <h5>Tray Table</h5>

                </div>
                <p className={classes.wishlistPrice}>$ 19.00</p>
                <button className={classes.wishlistActionBtn} addToCart> Add to cart </button>
            </li>
            <li className={classes.wishlistItem}>
                <div className={classes.wishlistProductBox}>
                <button className={classes.wishlistBtn}> <IoCloseOutline/> </button>
                <p className={classes.wishlistImgBox}>
                    <img className={classes.wishlistImg} src={golfShoe} alt="item-image" />
                </p>
                <h5>Tray Table</h5>

                </div>
                <p className={classes.wishlistPrice}>$ 19.00</p>
                <button className={classes.wishlistActionBtn} addToCart> Add to cart </button>
            </li>
        </ul>
    </main>
}