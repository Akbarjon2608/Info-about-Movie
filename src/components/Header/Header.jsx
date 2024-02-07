import { Link } from "react-router-dom";
import { HeaderLogo } from "../../assets";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
const data = [
  { title: "Home", path: "/" },
  {
    title: "About",
    path: "/about",
  },
];
const Header = () => {
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
            {data?.map((item, idx) => (
              <li className="nav_item" key={idx}>
                <Link to={item.path} className="nav_link">
                  {item.title}
                </Link>
              </li>
            ))}
            <li className="nav_item">
              <a href="" className="nav_link">
                <FontAwesomeIcon icon={faSearch} />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;
