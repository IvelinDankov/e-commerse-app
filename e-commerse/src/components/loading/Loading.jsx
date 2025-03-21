import classes from "./Loading.module.css";

export default function Loading() {
    return <div className={classes.loadingContainer}>
        <p className={classes.loadingText}>Update...</p>
    </div>
}