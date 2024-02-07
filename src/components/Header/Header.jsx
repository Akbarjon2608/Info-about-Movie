import { HeaderLogo } from "../../assets";
import "./header.css";
const Header = () => {
  const data = [
    { title: "Home", path: "/" },
    {
      title: "About",
      path: "/about",
    },
    { title: "Poisk", path: "/poisk" },
  ];
  return (
    <header className="header">
      <div className="header_container">
        <div className="header_logo">
          <img src={HeaderLogo} alt="" />
          <h1 className="header_logo_text">
            Movie<span className="header_green_text">App</span>
          </h1>
        </div>
        <nav className="nav">
          <ul className="nav_menu">
            <li className="nav_item">
              <a href="" className="nav_link">
                Home
              </a>
              <a href="" className="nav_link">
                About
              </a>
              <a href="" className="nav_link">
                poisk
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;
