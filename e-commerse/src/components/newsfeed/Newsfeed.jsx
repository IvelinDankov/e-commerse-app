import classes from "./Newsfeed.module.css";

// e-commerse\src\assets\image-slide\img-1.png

import imgOne from "../../assets/image-slide/img-1.png";
import imgTwo from "../../assets/image-slide/img-2.png";
import imgThree from "../../assets/image-slide/img-3.png";
import imgFour from "../../assets/image-slide/img-4.png";
import imgFive from "../../assets/image-slide/img-5.png";
import imgSix from "../../assets/image-slide/img-6.png";

export default function Newsfeed() {
  return (
    <section className={classes.newsfeedSection}>
      <div className={classes.newsfeedWrapper}>
        <div className={classes.newsfeedTextbox}>
          <p className={classes.newsfeedSubheading}>newsfeed</p>
          <h3 className={classes.newsfeedHeading}>Instagram</h3>
          <dd className={classes.newsfeedDesc}>
            Follow us on social media for more discount & promos
          </dd>
          <span className={classes.newsfeedProfileText}>
            <i>@3legant_official</i>
          </span>
        </div>

        <div className={classes.imageSlide}>
          <img src={imgOne} alt="golf image one" />
          <img src={imgTwo} alt="golf image two" />
          <img src={imgThree} alt="golf image three" />
          <img src={imgFour} alt="golf image four" />
          <img src={imgFive} alt="golf image five" />
          <img src={imgSix} alt="golf image six" />
        </div>
      </div>
    </section>
  );
}
