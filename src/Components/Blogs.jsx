import React from "react";
import "../style.css";
import pic1 from "../images/Blog 1 (1).png";
import pic2 from "../images/Blog 2 (1).png";
import pic3 from "../images/Blog 3(1).png";
import { margin } from "@mui/system";
import { Link, useNavigate } from "react-router-dom";
import "../Blog.css";

function Blogs() {
  const history = useNavigate();
  function handleNavigation() {
    // Navigate to a new route
    history("/newBlog1");

    // Reload the page after navigation
    window.location.reload();
  }
  function handleNavigation2() {
    // Navigate to a new route
    history("/newBlog2");

    // Reload the page after navigation
    window.location.reload();
  }
  function handleNavigation3() {
    // Navigate to a new route
    history("/newBlog3");

    // Reload the page after navigation
    window.location.reload();
  }

  return (
    <section className="blog" id="blog">
      <div className="container">
        <p className="section-subtitle">News & Blogs</p>

        <h2 className="h2 section-title">Latest News Feeds</h2>

        <ul className="blog-list has-scrollbar">
          <li>
            <div className="blog-card">
              <Link onClick={handleNavigation}>
                <figure className="card-banner">
                  <img
                    src={pic1}
                    alt="The Most Inspiring Interior Design Of 2021"
                    className="w-100"
                  />
                </figure>
              </Link>

              <div className="blog-content">
                <Link onClick={handleNavigation}>
                  <div className="blog-content-top">
                    <ul className="card-meta-list">
                      <li>
                        <a href="#" className="card-meta-link">
                          <ion-icon name="person"></ion-icon>

                          <span>By Global Vistar</span>
                        </a>
                      </li>

                      {/* <li>
                        <a href="#" className="card-meta-link">
                          <ion-icon name="pricetags"></ion-icon>

                          <span>Dummy</span>
                        </a>
                      </li> */}
                    </ul>

                    <h3 className="h3 blog-title">
                      <a href="#">
                        How to Create a Great Distribution Network for Your
                        Product?
                      </a>
                    </h3>
                  </div>
                </Link>

                <div className="blog-content-bottom">
                  <div className="publish-date">
                    <ion-icon name="calendar"></ion-icon>

                    <time datetime="2022-27-04">Apr 27, 2022</time>
                  </div>

                  <Link
                    to="/newBlog1"
                    className="read-more-btn"
                    onClick={handleNavigation}
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </li>

          <li>
            <div className="blog-card">
              <Link onClick={handleNavigation2}>
                <figure className="card-banner">
                  <img
                    src={pic2}
                    alt="Recent Commercial Real Estate Transactions"
                    className="w-100"
                  />
                </figure>
              </Link>

              <div className="blog-content">
                <Link onClick={handleNavigation2}>
                  <div className="blog-content-top">
                    <ul className="card-meta-list">
                      <li>
                        <a href="#" className="card-meta-link">
                          <ion-icon name="person"></ion-icon>

                          <span>By Global Vistar</span>
                        </a>
                      </li>

                      {/* <li>
                        <a href="#" className="card-meta-link">
                          <ion-icon name="pricetags"></ion-icon>

                          <span>Dummy</span>
                        </a>
                      </li> */}
                    </ul>

                    <h3 className="h3 blog-title">
                      <a href="#">10 Things Every Distributor Should Verify!</a>
                    </h3>
                  </div>
                </Link>

                <div className="blog-content-bottom">
                  <div className="publish-date">
                    <ion-icon name="calendar"></ion-icon>

                    <time datetime="2022-27-04">Apr 27, 2022</time>
                  </div>

                  <Link
                    to="/newBlog2"
                    className="read-more-btn"
                    onClick={handleNavigation2}
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </li>

          <li>
            <div className="blog-card">
              <Link onClick={handleNavigation3}>
                <figure className="card-banner">
                  <img
                    src={pic3}
                    alt="Renovating a Living Room? Experts Share Their Secrets"
                    className="w-100"
                  />
                </figure>
              </Link>

              <div className="blog-content">
                <Link onClick={handleNavigation3}>
                  <div className="blog-content-top">
                    <ul className="card-meta-list">
                      <li>
                        <a href="#" className="card-meta-link">
                          <ion-icon name="person"></ion-icon>

                          <span>By Global Vistar</span>
                        </a>
                      </li>

                      {/* <li>
                        <a href="#" className="card-meta-link">
                          <ion-icon name="pricetags"></ion-icon>

                          <span>Dummy</span>
                        </a>
                      </li> */}
                    </ul>

                    <h3 className="h3 blog-title">
                      <a href="#">
                        How Global Vistar Is Disrupting The
                        Manufacturer-Distributor Landscape?
                      </a>
                    </h3>
                  </div>
                </Link>

                <div className="blog-content-bottom">
                  <div className="publish-date">
                    <ion-icon name="calendar"></ion-icon>

                    <time datetime="2022-27-04">Apr 27, 2022</time>
                  </div>

                  <Link
                    to="/newBlog3"
                    className="read-more-btn"
                    onClick={handleNavigation3}
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Blogs;
