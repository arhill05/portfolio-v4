import "./ProfileImage.scss";
import profileImage from "../../assets/profile.webp";

function ProfileImage() {
  return <img className="profile-image" src={profileImage} alt="profile" />;
}

export default ProfileImage;
