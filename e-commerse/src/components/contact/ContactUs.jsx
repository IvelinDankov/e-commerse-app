import { Link } from "react-router-dom";
import classes from "./ContactUs.module.css";
import Button from "../ui/Button";

export default function ContactUs() {
  return (
    <section>
      <div className={`sectionWrapper ${classes.sectionWrapper}`}>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </nav>
        <h2>
          We believe in Your passion in Sport. We are also passionate about
          golf.
        </h2>
        <p>
          Have questions or need assistance? We’re here to help! Whether you
          need information about our services, booking a tee time, or any other
          inquiries, feel free to reach out. Our friendly team is ready to
          assist you. Contact us today, and we’ll get back to you promptly!
        </p>

        <div>
            <div>
                <img src='' alt="decoration" />
            </div>
            <article>
                <h3>About Us</h3>
                <p>3legant is a gift store based in Hcmc Bulgaria</p>
                <p>Our custumers service is always prepared to support you. </p>
                <Button textOnly>Shop Now &rarr;</Button>
            </article>
        </div>
        <div>
            
            <h3>Contact Us</h3>
            <div>
                icon
                <p>address</p>
                <address>
                    234 Hai Trieu, Ho Chi Min city,
                    <span>BG</span>
                </address>
            </div>
            <div>
                icon
                <p>contact us</p>
                <a href="tel:+359 123 123 123">+359 123 123 123</a>
            </div>
            <div>
                icon
                <p>email</p>
                <a href="mailto:">velin80@web.de</a>
            </div>
        </div>
      </div>
    </section>
  );
}
