import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import FooterLogo from "../../assets/footer-logo.png";

export default function Footer() {
  return (
    <footer className="footer">
      <address className="footer__address">
        <div className="footer__logo">
          <img src={FooterLogo} alt="Footer logo" height="180px" />
        </div>
        <div className="footer__column">
          <p className="footer__column-title">Navigation</p>
          <ul className="footer__links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <Link to="/booking">Reservations</Link>
            </li>
            <li>
              <Link to="/order">Order Online</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>

        <div className="footer__column">
          <p className="footer__column-title">Contact</p>
          <ul className="footer__links">
            <li>Address</li>
            <li>Phone Number</li>
            <li>Email</li>
          </ul>
        </div>

        <div className="footer__column">
          <p className="footer__column-title">Connect</p>
          <ul className="footer__links">
            <a
              href="https://www.example.com/"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
            <a
              href="https://www.example.com/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://www.example.com/"
              target="_blank"
              rel="noreferrer"
            >
              Join us!
            </a>
          </ul>
        </div>

      </address>

    </footer>

  );
}