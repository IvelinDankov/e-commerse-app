import { Link, NavLink } from "react-router-dom";
import classes from "./ContactUs.module.css";
import Button from "../ui/Button";

import { MdNavigateNext } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

import { FaStore } from "react-icons/fa";

import contactUsImg from "../../assets/contact-image/contact-us.jpg";

export default function ContactUs() {
  return (
    <section>
      <div className={`sectionWrapper ${classes.sectionWrapper}`}>
        <nav className={classes.contactNavigation}>
          <ul className={classes.contactNavigationList}>
            <li className={classes.contactNavigationItem}>
              <NavLink to="/" className={({isActive}) => isActive ? classes.active :undefined}>Home</NavLink>
            </li>
            <MdNavigateNext />
            <li className={classes.contactNavigationItem}>
              <NavLink to="/contact" className={({isActive}) => isActive ? classes.active :undefined}>Contact Us</NavLink>
            </li>
          </ul>
        </nav>
        <div  className={classes.contactNavigationBox}>
          <h2>
            We believe in Your passion in Sport. We are also passionate about
            golf.
          </h2>
          <p>
            Have questions or need assistance? We’re here to help! Whether you
            need information about our services, booking a tee time, or any
            other inquiries, feel free to reach out. Our friendly team is ready
            to assist you. Contact us today, and we’ll get back to you promptly!
          </p>
        </div>

        <div  className={classes.contactNavigationFeature}>
          <div>
            <img className={classes.contactNavigationFeatureImgBox} src={contactUsImg} alt="decoration" />
          </div>
          <article className={classes.contactNavigationFeatureArticle}>
            <h3>About Us</h3>
            <p>3legant is a gift store based in Hcmc Bulgaria</p>
            <p>Our custumers service is always prepared to support you. </p>
            <Link textOnly to="/shop">Shop Now &rarr;</Link>
          </article>
        </div>
        <div className={classes.contactNavigationInfoContainer}>
          <h3>Contact Us</h3>
          <div className={classes.contactNavigationInfoCart}>
            <FaStore />
            <p>address</p>
            <address>
              234 Hai Trieu, Ho Chi Min city,
              <span>BG</span>
            </address>
          </div>
          <div className={classes.contactNavigationInfoCart}>
            <BsTelephoneFill />
            <p>contact us</p>
            <a href="tel:+359 123 123 123">+359 123 123 123</a>
          </div>
          <div className={classes.contactNavigationInfoCart}>
            <MdEmail/>
            <p>email</p>
            <a href="mailto:">velin80@web.de</a>
          </div>
        </div>
      </div>
    </section>
  );
}
