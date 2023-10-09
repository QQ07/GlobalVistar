import React, { useEffect, useState } from "react";
import "./style.css";
import pic from "./images/Savouries.jpg";
import DesiRass from "./images/Desi Rass (1).png";
import ShivRatna from "./images/ShivRatna Jaggery.png";
import Anjani from "./images/alphonso aamras_mockup_500gm.jpg";
import TribeCook from "./images/Tribe-cook.png";
import { Link } from "react-router-dom";
import BeeBasket from "./images/BeeBasket.jpg";
import MaxfoodProd from "./images/Max-Food-Products.jpg";
import ProductCard from "./ProductCard";
import "./productsSection.css";
import "./ProductCatgories.css";
import Footer from "./Footer";
import Header from "./Header";

function ProductCategories() {
  // useEffect(() => {
  //   window.location.reload(true);
  window.scrollTo(0,0);
  // }, [])
  // useEffect(() => {
  //   window.location.reload();
  //   window.scrollTo(0, 0); // Scroll to top
  // }, []);
  return (
    <>
      <Header></Header>
      <section className="property product-categories" id="products">
        <div className="container">
          <p className="section-subtitle">Products</p>

          <h2 className="h2 section-title">Featured Products</h2>
          {/* <div className="blog-navbar product-navbar">
            <ul className="navbar-list-blogs">
              <li className="list-item-navbar">Trending</li>
              <li className="list-item-navbar">Recently-added</li>
              <li className="list-item-navbar">Most-read</li>
            </ul>
          </div> */}
          <div className="property-list-container">
            <ul
              className="property-list container row"
              // style={{

              //   display: "flex",
              //   justifyContent: "center",
              // }}
            >
              <li className="feature-card col-sm">
                
                  <ProductCard
                    pic={pic}
                    Blocation="Pune"
                    Bname="Mighty Millets"
                    ownerName="Sahil Jain"
                    ownerLoc="Pune"
                    locationLook="PAN India"
                    margin="20%-30%"
                    MOQ="50 units"
                  />
                
              </li>

              <li className="feature-card col-sm">
                <ProductCard
                  pic={DesiRass}
                  Blocation="Punjab"
                  Bname="Desi Ras"
                  ownerName="Ashish Bodake"
                  ownerLoc="Nashik"
                  locationLook="Central Pune, Pimpri Chinchwad, Suburb Pune, Mumbai, Navi Mumbai, Thane, Kalyan"
                  margin="35%-45%"
                  MOQ="100 boxes"
                />
              </li>
              <li className="feature-card col-sm">
                <ProductCard
                  pic={ShivRatna}
                  Blocation=", Nashik"
                  Bname="ShivRatna Jaggery"
                  ownerName="Naman Patil"
                  locationLook="Pune,Karad, Sangli, Mumbai"
                  ownerLoc="Sangli, Maharashtra"
                  margin="20-30%"
                />
              </li>
              <li className="feature-card col-sm">
                <ProductCard
                  pic={Anjani}
                  Blocation="Belmont Garden, Chicago"
                  Bname="Anjani Food Products"
                  ownerName="Pinak Joshi"
                  ownerLoc="Pune"
                  locationLook="PAN India"
                  MOQ="50kgs"
                  margin="15%-20%"
                />
              </li>
            </ul>

            <ul className="property-list container row">
              <li className="feature-card col-sm">
                <ProductCard
                  pic={TribeCook}
                  Blocation="Aznec"
                  Bname="Tribe Cook"
                  ownerName="Satyajeet Bhillare"
                  ownerLoc="Pune"
                  locationLook="Mumbai,Pune"
                  MOQ="50"
                  margin="15-20%"
                />
              </li>

              <li className="feature-card col-sm">
                <ProductCard
                  pic={BeeBasket}
                  Blocation="Punjab"
                  Bname="Bee Basket"
                  ownerName="Amit Godse"
                  ownerLoc="Pune"
                  locationLook="PAN India"
                  MOQ="50 Units"
                  margin="15%-20%"
                />
              </li>
              <li className="feature-card col-sm">
                <ProductCard
                  pic={MaxfoodProd}
                  Blocation="SULA WINES, Nashik"
                  Bname="Max Food Products"
                  ownerName="Ruturaj Parekh"
                  ownerLoc="Mahad"
                  locationLook="PAN India"
                  MOQ="100 Units"
                  margin="25%-30%"
                />
              </li>
              {/* <li className="feature-card col-sm">
              <ProductCard
                pic={pic}
                Blocation="Belmont Garden, Chicago"
                Bname="Luxury Villa in Rego Park"
                ownerName="William Seklo"
                ownerLoc="Estate Agents"
              />
            </li> */}
            </ul>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}

export default ProductCategories;
