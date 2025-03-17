import Button from "../ui/Button";
import classes from "./NotificationBar.module.css";
import { LuTicketPercent } from "react-icons/lu";
import { IoCloseOutline } from "react-icons/io5";
import { useState } from "react";

export default function NotificationBar() {
  const [closeNot, setCloseNot] = useState(true)

  function handleClose() {
    setCloseNot(false)
  }

  return (
    <>{closeNot && <div className={classes.notification}>
      <div className={classes["notification__wrapper"]}>
        <div className={classes.invisible}>&nbsp;</div>
        <div className={classes["notification__content"]}>
          <LuTicketPercent />
          <p>30% off storewide — Limited time!</p>
          <Button textOnly={true}>Get started &rarr;</Button>
        </div>
        <Button textOnly={true} onClick={handleClose} >
          <IoCloseOutline />
        </Button>
      </div>
    </div>}
    </>
    
    
  );
}
