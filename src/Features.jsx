import React from "react";
import "./style.css";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
import InvertColorsIcon from "@mui/icons-material/InvertColors";
import GppGoodIcon from "@mui/icons-material/GppGood";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import SingleBedIcon from "@mui/icons-material/SingleBed";
import CottageIcon from "@mui/icons-material/Cottage";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import EastTwoToneIcon from "@mui/icons-material/EastTwoTone";
import "./features.css";

function Features() {
  return (
    <section className="features">
      <div className="container">
        <p className="section-subtitle">Looking For</p>

        <h2 className="h2 section-title">Categories</h2>

        <ul className="features-list container">
          
          <li>
            <a href="#" className="features-card ">
              <div className="card-icon">
                <DirectionsCarFilledIcon className="feature-icon" />
              </div>

              <h3 className="card-title">Category</h3>

              <div className="card-btn">
                <EastTwoToneIcon />
              </div>
            </a>
          </li>

          <li>
            <a href="#" className="features-card ">
              <div className="card-icon">
                <InvertColorsIcon className="feature-icon" />
              </div>

              <h3 className="card-title">Category</h3>

              <div className="card-btn">
                <EastTwoToneIcon />
              </div>
            </a>
          </li>

          <li>
            <a href="#" className="features-card">
              <div className="card-icon">
                <GppGoodIcon className="feature-icon" />
              </div>

              <h3 className="card-title">Category</h3>

              <div className="card-btn">
                <EastTwoToneIcon />
              </div>
            </a>
          </li>

          <li>
            <a href="#" className="features-card">
              <div className="card-icon">
                <MonitorHeartIcon className="feature-icon" />
              </div>

              <h3 className="card-title">Category</h3>

              <div className="card-btn">
                <EastTwoToneIcon />
              </div>
            </a>
          </li>

          <li>
            <a href="#" className="features-card">
              <div className="card-icon">
                <AutoStoriesIcon className="feature-icon" />
              </div>

              <h3 className="card-title">Category</h3>

              <div className="card-btn">
                <EastTwoToneIcon />
              </div>
            </a>
          </li>

          <li>
            <a href="#" className="features-card">
              <div className="card-icon">
                <SingleBedIcon className="feature-icon" />
              </div>

              <h3 className="card-title">Category</h3>

              <div className="card-btn">
                <EastTwoToneIcon />
              </div>
            </a>
          </li>

          <li>
            <a href="#" className="features-card">
              <div className="card-icon">
                <CottageIcon className="feature-icon" />
              </div>

              <h3 className="card-title">Category</h3>

              <div className="card-btn">
                <EastTwoToneIcon />
              </div>
            </a>
          </li>

          <li>
            <a href="#" className="features-card">
              <div className="card-icon">
                <SportsSoccerIcon className="feature-icon" />
              </div>

              <h3 className="card-title">Category</h3>

              <div className="card-btn">
                <EastTwoToneIcon />
              </div>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Features;
