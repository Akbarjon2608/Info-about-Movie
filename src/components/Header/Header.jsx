import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HeaderLogo } from "@assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./header.css";
import Hamburger from "hamburger-react";
const data = [
  { title: "Home", path: "/" },
  { title: "Movies", path: "/movies" },
];

const logo = [{ title: "Movie", path: "/" }];
const search = [{ path: "/search" }];

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const toggleMenu = () => {
    setIsActive(!isActive);
  };
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
        <nav className={`nav ${isActive ? "active" : ""}`}>
          <ul className="nav_menu nav_menu--mobile">
            {data?.map((item, idx) => (
              <li className="nav_item" key={idx}>
                <Link to={item.path} className="nav_link color">
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
        <li className="burger" onClick={toggleMenu}>
          <div className={isActive ? "burger-icon.active" : "burger-icon"}>
            <div>
              <Hamburger
                toggled={isOpen}
                toggle={setOpen}
                size={45}
                color="#fff"
                duration={0.6}
                rounded
              />
            </div>
          </div>
        </li>
      </div>
    </header>
  );
};

export default Header;
