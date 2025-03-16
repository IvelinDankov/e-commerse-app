
    import classes from "./Banner.module.css";
    import bannerImage from "../../../src/assets/banner-image/Banner-image.png";
import Button from "../ui/Button";

export default function Banner() {
    return <section className={classes.bannerSection}>
        <div className={classes.bannerWrapper}>
            <img src={bannerImage} alt="Golf field with balls and golt things" />
            <div className={classes.bannerContent}>
                <div className={classes.limited}>
                    <p>limited edition</p>
                    <h3>Hurry up! 30% OFF</h3>
                    <p>Find clubs that are right for your game</p>
                </div>
                <div className={classes.offer}>
                    <p>Offer expires in</p>
                    <p className={classes.timer}>
                        <span>02</span>
                        <span>12</span>
                        <span>45</span>
                        <span>05</span>
                    </p>
                </div>
                <Button>Shop now</Button>
            </div>
        </div>
    </section>
}