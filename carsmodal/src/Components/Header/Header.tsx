import React from "react";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import "./Header.css";

const Header = () => {
  return (
    <>
      <Nav>
        <div className="wrapper">
          <ul className="nav-links">
            <label htmlFor="close-btn" className="btn close-btn">
              <i className="fas fa-times"></i>
            </label>
            <li>
              <img
                src="https://imgd.aeplcdn.com/0x0/cw/static/icons/new-header/logo.svg"
                alt="CarWale"
                title="CarWale"
                width="136"
              ></img>
            </li>

            <li>
              <a href="/" className="desktop-item">
                Mega Menu
              </a>
              <input type="checkbox" id="showMega"></input>
              <label htmlFor="showMega" className="mobile-item">
                Mega Menu
              </label>
              <div className="mega-box">
                <div className="content">
                  <div className="row">
                    <img src="img.jpg" alt=""></img>
                  </div>
                  <div className="row">
                    <header>Design Services</header>
                    <ul className="mega-links">
                      <li>
                        <a href="/">Graphics</a>
                      </li>
                      <li>
                        <a href="/">Vectors</a>
                      </li>
                      <li>
                        <a href="/">Business cards</a>
                      </li>
                      <li>
                        <a href="/">Custom logo</a>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Email Services</header>
                    <ul className="mega-links">
                      <li>
                        <a href="/">Personal Email</a>
                      </li>
                      <li>
                        <a href="/">Business Email</a>
                      </li>
                      <li>
                        <a href="/">Mobile Email</a>
                      </li>
                      <li>
                        <a href="/">Web Marketing</a>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Security services</header>
                    <ul className="mega-links">
                      <li>
                        <a href="/">Site Seal</a>
                      </li>
                      <li>
                        <a href="/">VPS Hosting</a>
                      </li>
                      <li>
                        <a href="/">Privacy Seal</a>
                      </li>
                      <li>
                        <a href="/">Website design</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <a href="/">Feedback</a>
            </li>
          </ul>
        </div>
      </Nav>
    </>
  );
};

export default Header;
