import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import "./style.css";

import footerLogo from "./images/Global vistar Normal.svg";

function Footer() {

  const history = useNavigate();

  function handleNavigation() {
    // Navigate to a new route
    history("/AboutUsPage");

    // Reload the page after navigation
    window.location.reload();
  }

  function handleNavigationBlog() {
    // Navigate to a new route
    history("/BlogPage");

    // Reload the page after navigation
    window.location.reload();
  }

  function handleNavigationProductCategories() {
    // Navigate to a new route
    history("/ProductCategories");

    // Reload the page after navigation
    window.location.reload();
  }
  

  return (
    <footer className="footer" id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-brand">
            <a href="#" className="logo">
              <img src={footerLogo} alt="Homeverse logo" />
            </a>

            <p
              className="section-text"
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              Whether you're a manufacturer looking to expand your distribution
              network, or a distributor seeking new products and suppliers,
              Global Vistar is the platform for you.
              <span>Join us today and start winning together!</span>
            </p>

            <ul className="contact-list">
              <li>
                <a href="#" className="contact-link">
                  <ion-icon name="location-outline"></ion-icon>

                  <address>Autocluster, Pune, 411019</address>
                </a>
              </li>

              <li>
                <a href="tel:+91 7350940448" className="contact-link">
                  <ion-icon name="call-outline"></ion-icon>

                  <span>7058967349</span>
                </a>
              </li>

              <li>
                <a
                  href="mailto:contact@globalvistar.com"
                  className="contact-link"
                >
                  <ion-icon name="mail-outline"></ion-icon>

                  <span>info@globalvistar.com</span>
                </a>
              </li>
            </ul>

            {/* <ul className="social-list">
              <li>
                <a href="#" className="social-link">
                  <ion-icon name="logo-facebook"></ion-icon>
                </a>
              </li>

              <li>
                <a href="#" className="social-link">
                  <ion-icon name="logo-twitter"></ion-icon>
                </a>
              </li>

              <li>
                <a href="#" className="social-link">
                  <ion-icon name="logo-linkedin"></ion-icon>
                </a>
              </li>

              <li>
                <a href="#" className="social-link">
                  <ion-icon name="logo-youtube"></ion-icon>
                </a>
              </li>
            </ul> */}
          </div>

          <div className="footer-link-box">
            <ul className="footer-list">
              <li>
                <p className="footer-list-title">Company</p>
              </li>

              <li>
                <Link className="footer-link" onClick={handleNavigation}>
                  About
                </Link>
              </li>

              <li>
                <Link
                  // to="/BlogPage"
                  className="footer-link"
                  onClick={handleNavigationBlog}
                >
                  Blog
                </Link>
              </li>

              <li>
                <Link
                  // to="/ProductCategories"
                  className="footer-link"
                  onClick={handleNavigationProductCategories}
                >
                  All Products
                </Link>
              </li>

              <li>
                <a href="#footer" className="footer-link">
                  Contact us
                </a>
              </li>
            </ul>

            <ul className="footer-list">
              <li>
                <p className="footer-list-title">Services</p>
              </li>

              <li>
                <Link to="/login" className="footer-link" >
                  Login
                </Link>
              </li>
              <li>
                <a href="#our-services" className="footer-link">
                  Product Market Fit
                </a>
              </li>
              <li>
                <a href="#our-services" className="footer-link">
                  Brand Building
                </a>
              </li>
              <li>
                <a href="#our-services" className="footer-link">
                  Omni-Channel Selling
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p className="copyright">
            &copy; 2023{" "}
            <a href="#">Global Vistar - A Symble Solutions Pvt Ltd Company</a>.
            All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;