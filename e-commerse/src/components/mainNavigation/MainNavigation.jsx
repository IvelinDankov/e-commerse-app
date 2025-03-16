import NotificationBar from "./NotificationBar.jsx";
import classes from "./MainNavigation.module.css";
import Navigation from "./Navigation.jsx";
export default function  MainNavigation() {
    return <header className={classes.header}>
        <NotificationBar />
        <Navigation />
    </header>
}