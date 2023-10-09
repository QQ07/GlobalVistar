import "./otplogin.css";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Card } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";

function OTPLogin() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const [phoneNumber, setPhoneNumber] = useState("");
  const [numberError, setnumberError] = useState("");
  const [otp, setOTP] = useState("");
  const [otpInfo, SetOTPInfo] = useState("");
  const [verificationStatus, setVerificationStatus] = useState("Verified");
  const [verificationError, setVerificationError] = useState("");

  const handleSendOTP = async () => {
    const resp = await fetch("http://localhost:3001/user/check", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ phoneNumber }),
    });
    const dat = await resp.json();
    console.log(dat);

    if (dat.message != "Exists") {
      navigate("/register");
    } else {
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
    }
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

  function checkAllInputs() {
    var res = 1;

    if (phoneNumber == "" || parseInt(phoneNumber).toString().length != 10) {
      setnumberError("*Please Enter a 10 digit valid number");
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
    console.log(phoneNumber);
    const response = await fetch("http://localhost:3001/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        phoneNumber,
      }),
    });
    const data = await response.json();
    if (response.status === 200) {
      console.log(data);
      localStorage.setItem("token", data.token);
      if (data.token) navigate("/");
      else {
        alert("invalid Username or password");
      }
    }
  };

  return (
    <div className="otp-login">
      <div className="otp-login-card">
        <h2 className="gv-logo">
          <span className="global">Global</span>{" "}
          <span className="vistar">Vistar</span>
        </h2>
        <h4 className="otp-login-title">Sign In</h4>
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
        <br />
        <br />
        <a
          className="otp-signup-redirection"
          onClick={() => {
            navigate("/register");
          }}
        >
          <p className="otp-signup-redirection">
            New to Global Vistar? Create an Account
          </p>
        </a>
      </div>
    </div>
  );
}

export default OTPLogin;
