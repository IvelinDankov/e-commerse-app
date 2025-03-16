import { Form } from "react-router-dom";
import Button from "../ui/Button";
import classes from "./Hero.module.css";

export default function Hero() {
  return (
    <div className="heroWrapper">
      <div className={classes.heroContainer}>
        <div>
        <div className={classes.textContent}>
            <h1 className={classes.mainHeading}>
                More than just a game. It's a lifestyle
            </h1>
            <p>Whether you’re just starting out, have played your whole life or you're a Tour pro, your swing is like a fingerprint.</p>
            <Form action='/shop'>

            <Button >Shopping Now</Button>
            </Form>
        </div></div>
      </div>
    </div>
  );
}
