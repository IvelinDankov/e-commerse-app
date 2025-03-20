import classes from "./Signup.module.css";

import golfPuterImg from "../../../src/assets/signup-image/login.jpg";

import Modal from "../modal/Modal.jsx";
import Button from "../ui/Button.jsx";
import { useContext } from "react";
import SignUpProgressContext from "../../store/SignUpProgress.jsx";

export default function Login() {
  const userProgressCtx = useContext(SignUpProgressContext)
  function handleClose() {
    userProgressCtx.hideLogIn();
  }

  function handleSignup() {
    userProgressCtx.showSignUp();
  }

  return (
    <Modal open={userProgressCtx.progress === "login" ? handleSignup : null} onClose={userProgressCtx.progress === '' ? handleClose : null}>
      <div className={classes.container}>
        <p className={classes.imgBox}>
          <img src={golfPuterImg} alt="decoration image" />
        </p>
        <div className={classes.content}>
          <h2>Login</h2>
          <p>
            Don't have account?{" "}
            <Button textOnly onClick={handleSignup} className={classes.signupBtn}>
              Sign Up
            </Button>
          </p>
          <p className={classes.inputBox}>
            <input type="email" placeholder="Email address" name="email" />
            <input type="password" placeholder="Password" name="password" />
          </p>
          <p className={classes.inputCheck}>
            <input type="checkbox" name="terms" id="terms" />
            Remember me
          </p>
          <Button className={classes.closeBtn}  onClick={handleClose} textOnly>
            Close
          </Button>
          <Button addToCart> Sign In </Button>
        </div>
      </div>
    </Modal>
  );
}
