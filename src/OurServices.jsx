import React from "react";
import "./style.css";
import serviceIcon1 from "./images/Product Market Fit .svg";
import serviceIcon2 from "./images/Brand Building.svg";
import serviceIcon3 from "./images/Omni Logo.svg";

function ServiceSection() {
  return (
    <section className="service" id="our-services">
      <div className="container">
        {/* <p className="section-subtitle">Our Services</p> */}

        <h2 className="h2 section-title">Our Services!</h2>

        <ul className="service-list">
          <li>
            <div className="service-card">
              <div className="card-icon">
                <img src={serviceIcon1} alt="Service icon" />
              </div>

              <h3 className="h3 card-title">
                <a href="#">Product Market Fit</a>
              </h3>

              <p className="card-text">
                {/* Create an Account <br /> */}
                Find the target customer, region and market for your product and
                achieve better sales.
              </p>

              {/* <a href="#" className="card-link">
                <span>Find A Home</span>

                <ion-icon name="arrow-forward-outline"></ion-icon>
              </a> */}
            </div>
          </li>

          <li>
            <div className="service-card">
              <div className="card-icon">
                <img src={serviceIcon2} alt="Service icon" />
              </div>

              <h3 className="h3 card-title">
                <a href="#">Brand Building </a>
              </h3>

              <p className="card-text">
                {/* Verification <br /> */}
                Bring market pull with a great brand presence and leverages your
                product distribution.
              </p>

              {/* <a href="#" className="card-link">
                <span>Find A Home</span>

                <ion-icon name="arrow-forward-outline"></ion-icon>
              </a> */}
            </div>
          </li>

          <li>
            <div className="service-card">
              <div className="card-icon">
                <img src={serviceIcon3} alt="Service icon" />
              </div>

              <h3 className="h3 card-title">
                <a href="#">Omni-Channel Selling </a>
              </h3>

              <p className="card-text">
                {/* Start Your Product Distribution <br /> */}
                Bring market pull with a great brand presence and leverages your
                product distribution.
              </p>

              {/* <a href="#" className="card-link">
                <span>Find A Home</span>

                <ion-icon name="arrow-forward-outline"></ion-icon>
              </a> */}
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default ServiceSection;
