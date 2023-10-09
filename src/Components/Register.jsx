import React, { useState } from "react";
import signUpImg from "./sign-up-img2.png";
import "./otpsignup.css";

function OTPForm() {
  const [NameOfUser, setNameOfUser] = useState("");
  const [NameError, setNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [numberError, setnumberError] = useState("");
  const [otp, setOTP] = useState("");
  const [otpInfo, SetOTPInfo] = useState("");
  const [verificationStatus, setVerificationStatus] = useState("");
  const [verificationError, setVerificationError] = useState("");
  const [registerAs, setRegisteras] = useState("");
  const [registerAsError, setRegisterAsError] = useState("");

  const handleSendOTP = async () => {
    const response = await fetch("http://localhost:3001/auth/sendOTP", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ phoneNumber }),
    });
    const data = await response.json();
    SetOTPInfo(data);
    console.log(data);
  };

  const handleVerifyOTP = async () => {
    const response = await fetch("http://localhost:3001/auth/verifyOTP", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ phoneNumber, code: otp }),
    });
    const data = await response.json();
    if (response.status === 200 && data.status === "approved") {
      setVerificationStatus("Verified");
    } else {
      setVerificationStatus("Wrong OTP");
    }
  };
  const handleClick = (value) => {
    setRegisteras(value);
  };
  function checkAllInputs() {
    var res = 1;
    if (NameOfUser == "") {
      setNameError("*Please Enter Name");
      res = 0;
    }
    if (email == "") {
      setEmailError("*Please Enter Email address");
      res = 0;
    }
    if (phoneNumber == "" || parseInt(phoneNumber).toString().length != 10) {
      setnumberError("*Please Enter a 10 digit valid number");
      res = 0;
    }
    if (registerAs == "") {
      setRegisterAsError("*This is required");
      res = 0;
    }
    if (verificationStatus != "Verified") {
      setVerificationError("*Verify your Phone Number");
      res = 0;
    }
    return res;
  }
  const handleSubmitButton = async () => {
    const toProceed = checkAllInputs();
    if (toProceed == 0) return;
    const response = await fetch("http://localhost:3001/user/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        phoneNumber,
        name: NameOfUser,
        email,
        registerAs,
      }),
    });
    const data = await response.json();
    if (response.status === 200) {
      window.open("https://globalvistar.com");
    }
  };

  return (
    <div className="otp-verification">
      <div className="otp-ver-left">
        <h1 className="otp-left-title">Badhaye Apke Business Ki Raftaar</h1>
        <h1 className="otp-left-title-2">
          Sign Up Now for Best Deals & Exclusive Offers with{" "}
          <span className="otp-global">Global</span>
          <span className="otp-vistar">Vistar</span>
        </h1>
        <img className="sign-up-img" src={signUpImg} alt="" />
      </div>
      <div className="otp-verification-card">
        <h1 className="otp-gv-logo">
          <span className="otp-global">Global</span>{" "}
          <span className="otp-vistar">Vistar</span>
        </h1>
        <h1 className="otp-ver-title">Sign Up</h1>
        <div className="otp-info">
          <div className="red">{NameError}</div>
          <div className="otp-input-field">
            <input
              type="text"
              placeholder="Your Name"
              value={NameOfUser}
              onChange={(e) => setNameOfUser(e.target.value)}
              className="otp-input-field-2"
              required
            />
          </div>
          <div className="red">{emailError}</div>
          <div className="otp-input-field">
            {/* <i class="fa-solid fa-envelope"></i> */}
            <input
              type="text"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="otp-input-field-2"
            />
          </div>

          <div className="red">{registerAsError}</div>

          <label class="dropdown">
            <div class="dd-button">Dropdown</div>

            <input type="checkbox" className="dd-input" id="test" />

            <ul className="dd-menu">
              <li onClick={() => handleClick("Manufacturer")}>Manufacturer</li>
              <li onClick={() => handleClick("Manufacturer")}>Manufacturer</li>
              <li onClick={() => handleClick("Manufacturer")}>Manufacturer</li>
              <li onClick={() => handleClick("Manufacturer")}>Manufacturer</li>
              <li onClick={() => handleClick("Manufacturer")}>Manufacturer</li>
              <li onClick={() => handleClick("Manufacturer")}>Manufacturer</li>
              <li onClick={() => handleClick("Manufacturer")}>Manufacturer</li>
              <li onClick={() => handleClick("Manufacturer")}>Manufacturer</li>
              <li onClick={() => handleClick("Manufacturer")}>Manufacturer</li>
              <li onClick={() => handleClick("Manufacturer")}>Manufacturer</li>
              <li>Another action</li>
              <li>Something else here</li>
              <li className="divider"></li>
              <li>
                <a href="http://rane.io">Link to Rane.io</a>
              </li>
            </ul>
          </label>
          <div className="dropdown">
            <ul className="dropdown-menu">
              <div
                onClick={() => handleClick("Manufacturer")}
                className="dropdown-btn"
              >
                Manufacturer
              </div>
              <br />
              <div
                onClick={() => handleClick("Supplier")}
                className="dropdown-btn"
              >
                Supplier
              </div>
              <br />
              <div
                onClick={() => handleClick("Distributor")}
                className="dropdown-btn"
              >
                Distributor
              </div>
              <br />
              <div
                onClick={() => handleClick("Wholesaler")}
                className="dropdown-btn"
              >
                Wholesaler
              </div>
              <br />
              <div
                onClick={() => handleClick("Retailer")}
                className="dropdown-btn"
              >
                Retailer
              </div>
              <br />
              <div
                onClick={() => handleClick("Stockist")}
                className="dropdown-btn"
              >
                Stockist
              </div>
              <br />
              <div
                onClick={() => handleClick("Carrier & Forwarder (C&F)")}
                className="dropdown-btn"
              >
                Carrier & Forwarder (C&F)
              </div>
              <br />
              <div
                onClick={() => handleClick("Others")}
                className="dropdown-btn"
              >
                Others
              </div>
            </ul>
            <div class="regAs">{registerAs}</div>
          </div>
        </div>

        <div className="red">{numberError}</div>
        <div className="otp-input-field">
          {/* <i class="fa-solid fa-phone"></i> */}
          <input
            type="text"
            id="phoneNumber"
            placeholder="Mobile Number"
            value={phoneNumber}
            className="otp-input-field-2"
            required
            onChange={(e) => {
              if (e.target.value.length > 10) {
                setPhoneNumber(e.target.value.slice(0, 10));
                setnumberError("10 digits only");
              } else {
                setPhoneNumber(e.target.value);
                setnumberError("");
              }
            }}
          />
        </div>

        <div className="sendOtpbtn">
          <button
            className="btnn btn-outline-secondary "
            onClick={handleSendOTP}
          >
            Send OTP
          </button>
          <div class="otpinfo">{otpInfo}</div>
        </div>
        <div className="red">{verificationError}</div>
        <div className="otp-input-field">
          {/* <i class="fa-solid fa-shield-halved"></i> */}
          <input
            type="text"
            id="otp"
            placeholder="Enter OTP"
            value={otp}
            className="otp-input-field-2"
            required
            onChange={(e) => setOTP(e.target.value)}
          />
        </div>
        <div className="VerifyFlex sendOtpbtn">
          <button
            className=" btnn btn-outline-secondary "
            onClick={handleVerifyOTP}
          >
            Verify OTP
          </button>
          <div class="otpinfo">{verificationStatus}</div>
        </div>
        <div className="lastSubmit">
          <input
            class="btnn btn-primary"
            type="submit"
            value="Submit"
            onClick={handleSubmitButton}
          ></input>
        </div>
      </div>
    </div>
  );
}

export default OTPForm;
