
import classes from "./Button.module.css";

export default function Button({children, textOnly, className, watchlist, addToCart, ...props}) {
    
    let cssClasses;

    if (textOnly) {
        cssClasses = classes.textBtn
    } else if (watchlist) {
        cssClasses = classes.watchlist
    } else if (addToCart){
        cssClasses = classes.addToCart
    } else {
        cssClasses = ' ' + classes.button
    }



    return <button className={cssClasses} {...props}>
            {children}
    </button>
}