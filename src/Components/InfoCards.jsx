import React from "react";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import "../InfoCard.css";
import Beverages from "../images/Beverage .svg";
import DairyAndFrozen from "../images/Dairy and Frozen .svg";
import Snacks from "../images/Snacks.svg";
import Sugar from "../images/Sugar.svg";
import ReadyToCook from "../images/Ready to cook 1.svg";
import Grains from "../images/Grains .svg";

function InfoCards() {
  return (
    <div>
      <div className="card-container">
        <div className="whole-card">
          <div className="card-info">
            <img src={Beverages} alt="" />

            {/* <Beverages></Beverages> */}
          </div>
          <p>Beverages</p>
        </div>

        <div className="whole-card">
          <div className="card-info">
            <img src={DairyAndFrozen} alt="" />
          </div>
          <p>Dairy and Frozen</p>
        </div>

        <div className="whole-card">
          <div className="card-info">
            <img src={Grains} alt="" />
          </div>
          <p>Grains</p>
        </div>

        <div className="whole-card">
          <div className="card-info">
            <img src={ReadyToCook} alt="" />
          </div>
          <p>Ready-to-cook</p>
        </div>

        <div className="whole-card">
          <div className="card-info">
            <img src={Snacks} alt="" />
          </div>
          <p>Snacks</p>
        </div>

        <div className="whole-card">
          <div className="card-info">
            <img src={Sugar} alt="" />
          </div>
            <p>Sugar</p>
        </div>
      </div>
    </div>
  );
}

export default InfoCards;
