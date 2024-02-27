import { Link } from "react-router-dom";
import { HeaderLogo } from "@assets";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
const data = [
  { title: "Home", path: "/" },

  {
    title: "Movies",
    path: "/movies",
  },
];
const logo = [{ title: "Movie", path: "/" }];
const search = [{ path: "/search" }];
const Header = () => {
  return (
    <header className="header">
      <div className="header_container">
        <div className="header_logo">
          <img src={HeaderLogo} alt="" />
          <h1 className="header_logo_text">
            {logo?.map((item, idx) => (
              <li className="nav_item" key={idx}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            ))}
            <span className="header_green_text">App</span>
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
            {search?.map((item, idx) => (
              <li className="nav_item" key={idx}>
                <Link to={item.path}>
                  <FontAwesomeIcon icon={faSearch} />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;
