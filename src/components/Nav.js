import React, { useState } from "react";
import styled from "styled-components";
import navIcon from "../images/nav-icon.svg";
import logo from "../images/logo.svg";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Nav() {
  const { pathname } = useLocation();
  const [toggleNav, setToggleNav] = useState(false);
  if (toggleNav) {
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.overflowY = "auto";
  }

  const navHandler = () => {
    setToggleNav(!toggleNav);
  };
  const closeNav = () => {
    setToggleNav(false);
  };

  const active = {
    color: "#43A22A",
  };
  const defaultColor = {
    color: "#3F4042",
  };

  return (
    <>
      <NavBar>
        <div className="nav-icon">
          <img src={navIcon} alt="nav-icon" />
        </div>
        <div className="nav-links">
          <ul>
            <li>
              <Link to="/" style={pathname === "/" ? active : defaultColor}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/About"
                style={pathname === "/About" ? active : defaultColor}
              >
                About
              </Link>
            </li>
            <li>
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </li>
            <li>
              <Link
                to="/Products"
                style={pathname === "/Products" ? active : defaultColor}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/Invest"
                style={pathname === "/Invest" ? active : defaultColor}
              >
                Invest
              </Link>
            </li>
          </ul>
        </div>
      </NavBar>
      <MobileNav>
        <div className="nav-items">
          <div className="mobile-logo">
            <Link to="/" onClick={closeNav}>
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div
            className={`hamburger ${toggleNav ? "open" : ""}`}
            onClick={navHandler}
          >
            <div className="hamburger-btn"></div>
          </div>
        </div>

        <div className={`nav-links ${toggleNav ? "show-links" : ""}`}>
          <ul>
            <li>
              <Link
                to="/About"
                onClick={closeNav}
                style={pathname === "/About" ? active : defaultColor}
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to="/Products"
                onClick={closeNav}
                style={pathname === "/Products" ? active : defaultColor}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/Invest"
                onClick={closeNav}
                style={pathname === "/Invest" ? active : defaultColor}
              >
                Invest
              </Link>
            </li>
          </ul>
        </div>
      </MobileNav>
    </>
  );
}

const NavBar = styled.nav`
  padding: 2rem 1.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  .nav-icon {
    position: absolute;
    top: 3.5rem;
    left: 1.5rem;
  }
  .nav-links {
    ul {
      display: flex;
      justify-content: center;
      align-items: center;
      li {
        padding-right: 2rem;
        img {
          padding: 0 5rem;
          cursor: pointer;
        }
      }
    }
  }
  @media screen and (max-width: 765px) {
    display: none;
  }
`;
const MobileNav = styled.nav`
  @media screen and (max-width: 765px) {
    padding: 2rem;
    .hamburger {
      position: relative;
      z-index: 999;
      cursor: pointer;
      .hamburger-btn {
        width: 2.125rem;
        height: 0.275rem;
        background: black;
        border-radius: 0.4rem;
        transition: all 0.5s ease-in-out;
        &::before,
        &::after {
          content: "";
          position: absolute;
          width: 2.5em;
          height: 0.275rem;
          background: black;
          border-radius: 0.4rem;
          transition: all 0.5s ease-in-out;
        }
        &::before {
          transform: translateY(-0.7rem);
        }
        &::after {
          transform: translateY(0.7rem);
        }
      }
    }
    .open {
      .hamburger-btn {
        transform: translateX(-3.125rem);
        background: transparent;
        &::before {
          transform: rotate(45deg) translate(2.18rem, -2.18rem);
        }
        &::after {
          transform: rotate(-45deg) translate(2.18rem, 2.18rem);
        }
      }
    }
  }
  .nav-items {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .nav-links {
    position: fixed;
    top: 8rem;
    left: 0;
    background: #ffffff;
    width: 100%;
    height: 50%;
    display: grid;
    justify-content: center;

    padding: 4rem 0 0 0;
    z-index: 99;
    transition: all 0.5s ease-in-out;
    grid-template-rows: repeat(6, 50px);
    align-items: center;
    transform: translateX(-100%);
    li {
      padding-bottom: 1rem;
      a {
        font-size: 1.2rem;
      }
    }
  }
  .show-links {
    transform: translateX(0%);
  }
  @media screen and (min-width: 766px) {
    display: none;
  }
`;
