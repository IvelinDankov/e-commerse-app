import Modal from "../modal/Modal.jsx";

import classes from "./Signup.module.css";

import golfPuterImg from "../../../src/assets/signup-image/signup.jpg";
import Button from "../ui/Button.jsx";
import { useContext } from "react";
import SignUpProgressContext from "../../store/SignUpProgress.jsx";

export default function Signup() {
  const userContext = useContext(SignUpProgressContext);

  function handleClose() {
    userContext.hideSignUp();
  }

  function handleLogIn() {
    userContext.showLogIn()
  }

  return (
    <Modal open={userContext.progress === "signup" } onClose={userContext.progress === '' ? handleClose : null}>
      <div className={classes.container}>
        <p className={classes.imgBox}>
          <img src={golfPuterImg} alt="decoration image" />
        </p>
        <div className={classes.content}>
          <h2>Sign Up</h2>
          <p>
            Already have account? <Button textOnly={true} onClick={handleLogIn}>Log In</Button>
          </p>
          <p className={classes.inputBox}>
            <input type="text" placeholder="Your name" name="yourName" />
            <input type="text" placeholder="Username" name="username" />
            <input type="email" placeholder="Email address" name="email" />
            <input type="password" placeholder="Password" name="password" />
          </p>
          <p className={classes.inputCheck}>
            <input type="checkbox" name="terms" id="terms" />I agree with
            Privacy Policy and Terms of Use
          </p>
          <Button className={classes.closeBtn} onClick={handleClose} textOnly>
            Close
          </Button>
          <Button addToCart> Sign Up </Button>
        </div>
      </div>
    </Modal>
  );
}
