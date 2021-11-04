// Library Imports:
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { Header, Menu, Grid } from "semantic-ui-react";
import { useMediaQuery } from "react-responsive";

// Component Imports:
import Hamburger from "./Hamburger/Hamburger";

// Image Imports:
import isuzuLogo from "../images/logos/isuzu_logo.png";
import mobilityLogo from "../images/logos/mobility_motors_logo.png";

const NavigationBar = () => {
  const [inHover, setInHover] = useState(false);
  const [activeItem, setActiveItem] = useState("");
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const handleItemClick = ({ name }) => {
    setActiveItem(name);
  };
  function toggleHamburger() {
    setHamburgerOpen(!hamburgerOpen);
  }

  const handleRedirect = () => {
    window.location.href = "/";
  };

  const handleMouseEnter = () => {
    setInHover(true);
  };

  const handleMouseLeave = () => {
    setInHover(false);
  };

  const isMobileDevice = useMediaQuery({ query: "(max-width: 1201px)" });
  const isComputerDevice = useMediaQuery({ query: "(min-width: 1202px)" });


  const list = document.getElementById("mobile-navigation-list");
  const burger1 = document.getElementById("burger1");
  const burger2 = document.getElementById("burger2");
  const burger3 = document.getElementById("burger3");

  if (list) {
    if (hamburgerOpen) {
      list.style.display = "inline";
    } else {
      list.style.display = "none";
    }
  }

  if (burger1) {
    if (hamburgerOpen) {
      burger1.style.transform = "rotate(40deg)";
    } else {
      burger1.style.transform = "rotate(0)";
    }
  }

  if (burger2) {
    if (hamburgerOpen) {
      burger2.style.transform = "translateX(100%)";
      burger2.style.opacity = 0;
    } else {
      burger2.style.transform = "translateX(0)";
      burger2.style.opacity = 1;
    }
  }

  if (burger3) {
    if (hamburgerOpen) {
      burger3.style.transform = "rotate(-40deg)";
    } else {
      burger3.style.transform = "rotate(0)";
    }
  }

  return (
    <div className="navbar-container">
      {isComputerDevice && (
        <Header id="navbar-header">
          <Header.Subheader id="navbar-navigation">
            <Menu id="navbar-navigation-menu">
              <div
                className="flexbox-navigationbar-menu-logo-message-container"
                onClick={handleRedirect}
                // onMouseEnter={handleMouseEnter}
                // onMouseLeave={handleMouseLeave}
              >
                <div className="flexbox-navigationbar-menu-logo-container">
                  <img src={mobilityLogo} alt="mm_logo" />
                </div>
                {/* {inHover && (
                  <div className="flexbox-navigationbar-menu-message-container">
                    <p id="navigationbar-message">Go home</p>
                  </div>
                )} */}
              </div>
              <Menu.Item
                id="navbar-navigation-menu-modeller"
                name="modeller"
                active={activeItem === "modeller"}
                onClick={handleItemClick}
                as={Link}
                to={{ pathname: "/modeller" }}
              >
                Modeller
              </Menu.Item>
              <Menu.Item
                id="navbar-navigation-menu-tillbehor"
                name="tillbehor"
                active={activeItem === "tillbehor"}
                onClick={handleItemClick}
                href="https://isuzusverige.se/tillbehor/"
              >
                Tillbehör
              </Menu.Item>
              <Menu.Item
                id="navbar-navigation-menu-om-oss"
                name="om-oss"
                active={activeItem === "om-oss"}
                onClick={handleItemClick}
                as={Link}
                to={{ pathname: "/om-oss" }}
              >
                Om Oss
              </Menu.Item>
              <Menu.Item
                id="navbar-navigation-menu-provkorning"
                name="provkorning"
                active={activeItem === "provkorning"}
                onClick={handleItemClick}
                as={Link}
                to={{ pathname: "/provkorning" }}
              >
                Boka Provkörning
              </Menu.Item>
              <Menu.Item
                id="navbar-navigation-menu-anlaggningar"
                name="anlaggningar"
                active={activeItem === "anlaggningar"}
                onClick={handleItemClick}
                as={Link}
                to={{ pathname: "/anlaggningar" }}
              >
                Våra Anläggningar
              </Menu.Item>
              <Menu.Item
                id="navbar-navigation-menu-kontakt"
                name="kontakt"
                active={activeItem === "kontakt"}
                onClick={handleItemClick}
                as={Link}
                to={{ pathname: "/kontakt" }}
              >
                Kontakt
              </Menu.Item>
            </Menu>
          </Header.Subheader>
        </Header>
      )}
      {isMobileDevice && (
        <>
          <div className="mobile-nav-outer-container">
            <div className="mobile-navigation">
              {/* <div className="topnav-mobile-images">
                <img src={mobilityLogo} alt="Mobility Motors" id="mobility-mobile-logo" />
                <img src={isuzuLogo} alt="Isuzu" id="isuzu-mobile-logo" />
                Image 1
                Image 2
              </div> */}
              <ul id="mobile-navigation-list">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/modeller">Modeller</a>
                </li>
                <li>
                  <a href="https://isuzusverige.se/tillbehor/">Tillbehör</a>
                </li>
                <li>
                  <a href="/om-oss">Om Oss</a>
                </li>
                <li>
                  <a href="/provkorning">Boka Provkörning</a>
                </li>
                <li>
                  <a href="/anlaggningar">Våra Anläggningar</a>
                </li>
                <li>
                  <a href="/kontakt">Kontakt</a>
                </li>
              </ul>
              <div
                className="topnav-mobile-hamburger"
                onClick={toggleHamburger}
              >
                <Hamburger isOpen={hamburgerOpen} />
              </div>
            </div>
            {/* <div className="mobile-navigation-under"></div> */}
          </div>
        </>
      )}
    </div>
  );
};

export default NavigationBar;

{
  /* <a href="/modeller">Modeller</a>
<a href="/https://isuzusverige.se/tillbehor/">Tillbehör</a>
<a href="/om-oss">Om Oss</a>
<a href="/provkorning">Boka Provkörning</a>
<a href="/anlaggningar">Våra Anläggningar</a>
<a href="/kontakt">Kontakt</a> */
}
