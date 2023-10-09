import React from "react";
import "../style.css";
import { Link } from "react-router-dom";
import { Drawer, Button, Group, Avatar } from "@mantine/core";
import blog1 from "../images/Blog 1 (1).png";
import blog2 from "../images/Blog 2 (1).png"
import blog3 from "../images/Blog 3(1).png"

import "../Blogpage.css";
import author from "../images/author.jpg";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import Footer from "../Footer.jsx";
import Header from "../Header";


function BlogPage() {
  window.scrollTo(0, 0);
  return (
    <>
      <Header></Header>
      <section className="blog-page" id="blog">
        <div className="container">
          <p className="section-subtitle">News & Blogs</p>

          <h2 className="h2 section-title">Business News</h2>

          <div className="blog-navbar">
            <ul className="navbar-list-blogs">
              <li className="list-item-navbar">Trending</li>
              <li className="list-item-navbar">Recently-added</li>
              <li className="list-item-navbar">Most-read</li>
            </ul>
          </div>

          <ul
            className="blog-list has-scrollbar"
            // style={{
            //   width: "90rem",
            //   display: "flex",
            //   justifyContent: "space-around",
            //   marginLeft: "-8rem",
            // }}
          >
            <li className="col-sm">
              <div class="card">
                <div class="card__header">
                  <img src={blog1} class="card__image" width="600" />
                </div>
                <div class="card__body">
                  <span class="tag tag-blue">Technology</span>
                  <h4>
                    How to Create a Great Distribution Network for Your Product?
                  </h4>
                  <p>
                    As a manufacturer, you know that having a great product is
                    just the first step towards success.
                  </p>
                </div>
                <div class="card__footer">
                  <div class="user">
                    {/* <div style={{ display: "flex" }}>
                      <img src={author} alt="user__image" class="user__image" />
                      <div class="user__info">
                        <h5 className="author-name">Jane Doe</h5>
                        <small>2h ago</small>
                      </div>
                    </div> */}
                    <Link to="/newBlog1">
                      <Button>Know more</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div class="card">
                <div class="card__header">
                  <img src={blog2} class="card__image" width="600" />
                </div>
                <div class="card__body">
                  <span class="tag tag-brown">Technology</span>
                  <h4>10 Things Every Distributor Should Verify!</h4>
                  <p>
                    As a distributor, your success largely depends on the
                    quality of the products you offer to your customers.
                  </p>
                </div>
                <div class="card__footer">
                  <div class="user">
                    {/* <div style={{ display: "flex" }}>
                      <img src={author} alt="user__image" class="user__image" />
                      <div class="user__info">
                        <h5 className="author-name">Jane Doe</h5>
                        <small>2h ago</small>
                      </div>
                    </div> */}

                    <Link to="/newBlog2">
                      <Button>Know more</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div class="card">
                <div class="card__header">
                  <img src={blog3} class="card__image" width="600" />
                </div>
                <div class="card__body">
                  <span class="tag tag-red">Technology</span>
                  <h4>
                    How Global Vistar is Disrupting the Manufacturer-Distributor
                    Landscape?
                  </h4>
                  <p>
                    As a distributor, your success largely depends on the
                    quality of the products you offer to your customers.
                  </p>
                </div>
                <div class="card__footer">
                  <div class="user">
                    {/* <div style={{ display: "flex" }}>
                      <img src={author} alt="user__image" class="user__image" />
                      <div class="user__info">
                        <h5 className="author-name">Jane Doe</h5>
                        <small>2h ago</small>
                      </div>
                    </div> */}

                    <Link to="/newBlog3">
                      <Button>Know more</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}

export default BlogPage;
