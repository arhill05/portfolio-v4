import "./HeroContent.scss";
import profileImage from "./profile.webp";
import Age from "../Age/Age";
import Button from "../components/Button/Button";

function HeroContent() {
  function onGetInTouchClick() {
    console.log("get in touch");
  }
  return (
    <div className="hero-content">
      <h1 className="hero-content__name">Andrew Hill</h1>
      <div className="hero-content__info-card">
        <div className="info-card__profile-image-container">
          <img src={profileImage} alt="profile" />
        </div>
        <h2>Glad to see you!</h2>
        <p>
          I am a <Age birthday="1995-01-26"></Age> year old web developer
          located in Louisville, Kentucky. I have a passion for working with new
          technologies and take any opportunity I can get to lead an effort to
          adopt the latest and greatest.
        </p>
        <p>
          I'm currently most interested in Angular, NodeJS, and Express with
          some interest in ReactJS, but I am familiar with much more. If you're
          interested in that list, take a look at my resume.
        </p>
        <Button
          text="GET IN TOUCH"
          className="primary"
          onclick={onGetInTouchClick}
        />
      </div>
    </div>
  );
}

export default HeroContent;
