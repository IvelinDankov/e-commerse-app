import { Link } from "react-router-dom";
import classes from "./Footer.module.css";

import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <div className={classes.footerWrapper}>
        <div className={classes.footerFrame}>
          <div className={classes.footerInfo}>
            <h5>3legant</h5>
            <p>
              <span>More than just a game.</span>It's a lifestyle<span></span>
            </p>
            <p className={classes.socialLinks}>
              <Link to="https://www.instagram.com/">
                <FaInstagram />
              </Link>
              <Link>
                <FaFacebookF />
              </Link>
              <Link>
                <FaYoutube />
              </Link>
            </p>
          </div>
          <div className={classes.footerLinks}>
            <h5>Page</h5>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/shop">Shop</Link>
              </li>
              <li>
                <Link to="/product">Product</Link>
              </li>
              <li>
                <Link to="/">Articles</Link>
              </li>
              <li>
                <Link to="/">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className={classes.footerPrivacy}>
            <h5>Info</h5>
            <ul>
              <li>
                <Link to="#">Shipping Policy</Link>
              </li>
              <li>
                <Link to="#">Return & Refund</Link>
              </li>
              <li>
                <Link to="#">Support</Link>
              </li>
              <li>
                <Link to="#">FAQs</Link>
              </li>
            </ul>
          </div>
          <div  className={classes.footerAddress}>
            <h5>Office</h5>
            <address>
              <p>43111 Hai Trieu street</p>
              <p> District 1, HCMC,</p>
              <p>Vietnam</p>
              <p>84-745-3237</p>
            </address>
          </div>
        </div>
        <div className={classes.footerButtonBar}>
          <p> </p>
        </div>
      </div>
    </footer>
  );
}
