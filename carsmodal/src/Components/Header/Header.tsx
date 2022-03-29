import React from "react";
import { Col, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="nav-bar">
        <img
          src="https://imgd.aeplcdn.com/0x0/cw/static/icons/new-header/logo.svg"
          width="136"
          alt="logo"
        ></img>
        <div>
          <ul>
            <li>
              <a href="/">New Cars</a>
              <div className="sub-menu-1">
                <ul>
                  <li>
                    <a href="/">Find new Cars</a>
                  </li>
                  <li>
                    <a href="/">New Car Loan</a>
                  </li>
                  <li>
                    <a href="/">Compare Cars</a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a>About Us</a>
            </li>
            <li>
              <a>Sevices</a>
            </li>
            <li>
              <a>Clients</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
