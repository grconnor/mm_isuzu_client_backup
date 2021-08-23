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

const MenuColor = ["white"];

const NavigationBar = () => {
  const [activeItem, setActiveItem] = useState("");
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const handleItemClick = ({ name }) => {
    setActiveItem(name);
  };
  function toggleHamburger() {
    setHamburgerOpen(!hamburgerOpen);
  };

  
  
  const isExtraSmallDevice = useMediaQuery({ query: "(max-width: 767px)" });
  const isSmallDevice = useMediaQuery({ query: "(min-width: 600px)" });
  const isMediumDevice = useMediaQuery({ query: "(min-width: 768px)" });
  const isLargeDevice = useMediaQuery({ query: "(min-width: 992px)" });
  const isExtraLargeDevice = useMediaQuery({ query: "(min-width: 1200px)" });
  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1175px)" });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });

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
      burger2.style.transform = "translateX(100%)"
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
      {isMediumDevice && (
        <Header id="navbar-header">
          <Grid id="navbar-grid">
            <Grid.Row columns={4} id="navbar-row">
              <Grid.Column
                id="navbar-row-mobility"
                width={2}
                textAlign="center"
                href="/"
              >
                <img
                  id="mobility-logo"
                  src={mobilityLogo}
                  alt="Mobility Motors"
                />
              </Grid.Column>
              <Grid.Column
                id="navbar-row-isuzu"
                width={2}
                textAlign="center"
                href="/"
              >
                <img
                  id="isuzu-logo"
                  src={isuzuLogo}
                  alt="Isuzu"
                  height="25px"
                />
              </Grid.Column>
              <Grid.Column id="empty-column" width={4}></Grid.Column>
              <Grid.Column id="navbar-row-slogan" width={4} textAlign="right">
                Hitta din bil idag!
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Header.Subheader id="navbar-navigation">
            <Menu id="navbar-navigation-menu" color={MenuColor}>
              <Menu.Item></Menu.Item>
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
      {isExtraSmallDevice && (
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
                <li><a href="/">Home</a></li>
                <li><a href="/modeller">Modeller</a></li>
                <li><a href="https://isuzusverige.se/tillbehor/">Tillbehör</a></li>
                <li><a href="/om-oss">Om Oss</a></li>
                <li><a href="/provkorning">Boka Provkörning</a></li>
                <li><a href="/anlaggningar">Våra Anläggningar</a></li>
                <li><a href="/kontakt">Kontakt</a></li>
              </ul>
              <div className="topnav-mobile-hamburger" onClick={toggleHamburger}>
                <Hamburger isOpen={hamburgerOpen} />
              </div>
            </div>
            <div className="mobile-navigation-under">
              
            </div>
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
