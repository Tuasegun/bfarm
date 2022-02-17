import React from "react";
import styled from "styled-components";
import navIcon from "../images/nav-icon.svg";
import logo from "../images/logo.svg";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <NavBar>
      <div className="nav-icon">
        <img src={navIcon} alt="nav-icon" />
      </div>
      <div className="nav-links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <img src={logo} alt="logo" />
          </li>
          <li>
            <Link to="/Products">Products</Link>
          </li>
          <li>
            <Link to="/Invest">Invest</Link>
          </li>
        </ul>
      </div>
    </NavBar>
  );
}

const NavBar = styled.nav`
  padding: 2rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  .nav-icon {
    position: absolute;
    top: 3.5rem;
    left: 2rem;
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
        }
      }
    }
  }
`;
