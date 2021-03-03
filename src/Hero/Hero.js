import "./Hero.scss";
import Stars from "../Stars/Stars";
import HeroContent from "../HeroContent/HeroContent";
import herobg from "./herobg.png";

function Hero() {
  return (
    <div className="hero">
      <HeroContent />
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
