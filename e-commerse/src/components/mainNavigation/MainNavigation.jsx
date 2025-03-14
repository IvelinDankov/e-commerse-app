import NotificationBar from "./NotificationBar.jsx";
import classes from "./MainNavigation.module.css";
export default function  MainNavigation() {
    return <header className={classes.header}>
        <NotificationBar />
    </header>
}