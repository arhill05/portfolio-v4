import "./Hero.scss";
import Stars from "../Stars";
import Content from "./Content";
import herobg from "./herobg.png";

function Hero() {
  return (
    <div className="hero">
      <Content />
      <div className="hero__background-container">
        <img
          className="hero__background-image"
          src={herobg}
          alt="City skyline"
        />
      </div>
      <div className="hero__stars-container">
        <Stars />
      </div>
    </div>
  );
}

export default Hero;
