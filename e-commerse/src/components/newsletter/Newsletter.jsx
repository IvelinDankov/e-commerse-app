
import Button from "../ui/Button";
import classes from "./Newsletter.module.css";

import { Form } from "react-router-dom";

import { SlEnvolope } from "react-icons/sl";


export default function Newsletter() {
    return <section className={classes.newsletterSection}>
        <div className={classes.newsletterWrapper}>
            <h3>Join Our Newsletter</h3>
            <p>Sign up for deals, new products and promotions</p>
            <Form action="" className={classes.newsletterForm}>
                <p>
                    <SlEnvolope/>
                    <input type="email" />
                    <Button className={classes.button} textOnly>Sign up</Button>
                </p>
            </Form>
        </div>
    </section>
}