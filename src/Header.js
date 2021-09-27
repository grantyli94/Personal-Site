import NameBox from "./NameBox";
import background from "./background.jpeg"

function Header() {

  return (
    <div className="Header" style={{backgroundImage: `url(${background})`}}>
      <NameBox />
    </div>
  );
}

export default Header;