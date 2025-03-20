import Button from "../ui/Button.jsx";

import classes from "./AccountAddress.module.css";

export default function AccountAddress() {
  return (
    <main className={classes.addressContainer}>
      <h3>Address</h3>
      <div className={classes.addressBox}>
        <header className={classes.addressHeader}>
          <h4>Billing Address</h4> <Button textOnly>Edit</Button>
        </header>
        <p>Sofia ....</p>
        <p>tel....</p>
        <p> 345 Long Island, new york, United States </p>
      </div>
      <div className={classes.addressBox}>
        <header className={classes.addressHeader}>
          <h4>Billing Address</h4> <Button textOnly>Edit</Button>
        </header>
        <p>Sofia ....</p>
        <p>tel....</p>
        <p> 345 Long Island, new york, United States </p>
      </div>
    </main>
  );
}
