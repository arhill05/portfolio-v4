import Email from "../SocialIcons/Email";
import GitHub from "../SocialIcons/Github";
import LinkedIn from "../SocialIcons/LinkedIn";
import Twitter from "../SocialIcons/Twitter";
import "./ContactInfo.scss";

function ContactInfo() {
  return (
    <div className="contact-info">
      <Twitter />
      <GitHub />
      <Email />
      <LinkedIn />
    </div>
  );
}

export default ContactInfo;
