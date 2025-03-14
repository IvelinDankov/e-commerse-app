
import classes from "./Button.module.css";

export default function Button({children, textOnly, className, ...props}) {
    
    let cssClasses = textOnly ? classes.textBtn : classes.button;

    cssClasses += ' ' + className


    return <button className={cssClasses} {...props}>
            {children}
    </button>
}