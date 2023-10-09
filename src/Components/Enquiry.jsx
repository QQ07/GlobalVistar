import React, { useRef, useState } from "react";
import { Select } from "@mantine/core";
import emailjs from "@emailjs/browser";
import CloseIcon from "@mui/icons-material/Close";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import "../Enquiry.css";
// import { Header } from "@mantine/core";
import Header from "../Header";
import Footer from "../Footer";
const Enquiry = (props) => {
  const form = useRef();

  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_l89qcsa",
        "template_ritiioe",
        form.current,
        "-TMWI-rA9Z12xMD0O"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("email sent!");
          props.setShowEnquiry(!(props.showEnquiry));
          toast.success("User Enquiry Sent Successfully!", {
            toastId: 1,
          });
        },
        (error) => {
          console.log(error.text);
          console.log("email not sent!");
        }
      );
  };

  const [quantity, setQuantity] = useState(50);
  const [quantityRange, setQuantityRange] = useState(50);

  // const handleQuantityChange = (event) => {
  //   const newQuantity = parseInt(event.target.value);
  //   setQuantity(newQuantity);
  //   setQuantityRange(newQuantity * 10);
  // };
  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value);
    if (!isNaN(newQuantity) && newQuantity >= 0) {
      setQuantity(newQuantity);
      setQuantityRange(newQuantity * 10);
    }
  };

  // const handleQuantityRangeChange = (event) => {
  //   const newQuantityRange = parseInt(event.target.value);
  //   setQuantityRange(newQuantityRange);
  //   setQuantity(newQuantityRange / 10);
  // };
  const handleQuantityRangeChange = (event) => {
  const newQuantityRange = Math.round(parseInt(event.target.value));
  setQuantityRange(newQuantityRange);
  setQuantity(Math.floor(newQuantityRange / 10)); // Use Math.floor() to get the integer part
};

  const sendEnquiry = () => {
    props.setShowEnquiry(!(props.showEnquiry));

  }

  return (
    <>
      <ToastContainer
        style={{ width: "500px" }}
        position="top-center"
      ></ToastContainer>
      <div className="enquiry-form-section">
        <div className="close-enquiry-form">
          <CloseIcon
            onClick={() => {
              props.setShowEnquiry(!props.showEnquiry);
            }}
          ></CloseIcon>
        </div>

        <h1 className="header-enquiry">Enquiry Form</h1>
        {/* <hr className="enquiry-hr" /> */}
        <form ref={form} onSubmit={sendEmail} className="enquiry-form-content">
          <label for="name">Name:</label>
          <input
            type="text"
            id="name"
            name="user_name"
            required
            className="enquiry-input"
          />
          <br></br>

          <label for="phone">Phone number:</label>
          <input
            type="tel"
            id="phone"
            name="user_phone"
            required
            className="enquiry-input"
          />
          <br></br>

          <label for="email">Email address:</label>
          <input
            type="email"
            id="email"
            name="user_email"
            required
            className="enquiry-input"
          />
          <br></br>

          <label for="product">Product:</label>
          {/* <select id="product" name="user_product" className="enquiry-input">
            <option value="product1">Product 1</option>
            <option value="product2">Product 2</option>
            <option value="product3">Product 3</option>
            <option value="product4">Product 4</option>
          </select> */}
          <input
            type="text"
            name="user_product"
            value={props.Bname}
            className="selected-product"
          />
          <br></br>

          <label for="quantity">Quantity Required:</label>
          <div className="quantity-input">
            <input
              type="number"
              id="quantity"
              name="quantity"
              min="0"
              max="1000"
              value={quantity}
              onChange={handleQuantityChange}
              required
              className="enquiry-input"
            />
            <input
              type="range"
              id="quantity-range"
              name="quantity-range"
              min="0"
              max="100000"
              value={quantityRange}
              onChange={handleQuantityRangeChange}
              className="enquiry-input-range"
            />
          </div>
          <br></br>

          <input type="submit" value="Submit" className="enquiry-submit" />
        </form>
      </div>
    </>
  );
};

export default Enquiry;
