import Button from "../ui/Button";
import classes from "./MyAccount.module.css";

export default function MyAccount() {
  return (
    <main>
      <h3>Account Details</h3>
      <form action="">
        <p className={classes.formGroup}>
          <label htmlFor="">first name</label>
          <input type="text" name="firstName" placeholder="First name" />
        </p>
        <p className={classes.formGroup}>
          <label htmlFor="">last name</label>
          <input type="text" name="lastName" placeholder="Last name" />
        </p>
        <p className={classes.formGroup}>
          <label htmlFor="">display name</label>
          <input type="text" name="displayname" placeholder="Display name" />
          <span>
            This will be how your name will be displayed in the account section
            and in rewiews
          </span>
        </p>
        <p className={classes.formGroup}>
          <label htmlFor="">email</label>
          <input type="emal" name="email" placeholder="Email" />
        </p>

        <h3>Password</h3>
        <p className={classes.formGroup}>
          <label htmlFor="">old password</label>
          <input
            type="password"
            placeholder="Old Password"
            name="oldPassword"
          />
        </p>
        <p className={classes.formGroup}>
          <label htmlFor="">new password</label>
          <input
            type="password"
            placeholder="New password"
            name="newPassword"
          />
        </p>
        <p className={classes.formGroup}>
          <label htmlFor="">repeat password</label>
          <input
            type="password"
            placeholder="Repeat new password"
            name="repeatPassword"
          />
        </p>
        <Button addToCart>Save Changes</Button>
      </form>
    </main>
  );
}
