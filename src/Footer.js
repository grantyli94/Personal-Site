const GITHUB = "https://github.com/grantyli94";
const LINKEDIN = "https://www.linkedin.com/in/grant-li-b097a66b/";

function Footer() {

  return (
    <div className="Footer">
      <div className="Footer-Text">
        <span><a href={GITHUB}>GitHub</a> | <a href={LINKEDIN}>LinkedIn</a></span>
      </div>
    </div>
  );
}

export default Footer;