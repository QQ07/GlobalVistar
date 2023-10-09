import { react, useState } from "react";
import { useToggle, upperFirst } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import { auth, db } from "./Firebase/firebase-config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc, Timestamp } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import TermsAndCond from "./Components/TermsAndCond";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

import {
  TextInput,
  FileInput,
  Select,
  PasswordInput,
  Text,
  Paper,
  Group,
  PaperProps,
  Button,
  Divider,
  Checkbox,
  Anchor,
  Stack,
  Box,
  createStyles,
  rem,
} from "@mantine/core";
import pic from "./images/Global vistar TB.svg";
// import { storage } from "../Firebase/firebase-config";
// import { v4 } from "uuid";
// import { ref, uploadBytes } from "firebase/storage";
// import { GoogleButton, TwitterButton } from '../SocialButtons/SocialButtons';
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { dividerClasses, formGroupClasses } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import "./AuthenticationPage.css";

function RegisterDistributor(props) {
  const { classes } = useStyles();
  const [type, toggle] = useToggle(["login", "register"]);

  const [error, setError] = useState();
  const [isChecked, setIsChecked] = useState(false);

  const [showTerms, setShowTerms] = useState(false);

  const [conditionAccepted, setConditionAccepted] = useState(false);
  const [uploadImage, setUploadImage] = useState(null);
  const [isRegistered, SetIsRegistered] = useState("");

  const handleTerms = () => {
    setShowTerms(true);
  };

  const form = useForm({
    initialValues: {
      distributor_email: "",
      name: "",
      phone: "",
      password: "",
      confirm: "",
      company_name: "",
      business_address: "",
      city: "",
      state: "",
      pincode: "",
      country: "",
      business_email: "",
      mobile_number: "",
      websites: "",
      years_of_exp: "",
      licence: "",
      distributing_products: "",
      types_of_industries_catered: "",
      number_of_employees: "",
      annual_turnover: "",
      how_did_you_find_us: "",
      terms: true,
    },

    validate: {
      distributor_email: (val) => (val ? null : "Email is required"),
      name: (val) => (val ? null : "Name is required"),
      // password: (val) => (val ? null : "Name is required"),
      confirm: (val) => (val ? null : "Name is required"),
      company_name: (val) => (val ? null : "Name is required"),
      business_address: (val) => (val ? null : "Name is required"),
      city: (val) => (val ? null : "Name is required"),

      password: (val) =>
        val.length <= 6
          ? "Password should include at least 6 characters"
          : null,
      phone: (val) =>
        val.length > 10 || val.length < 10
          ? "phone number should be only 10 digits"
          : null,
    },
  });
  const navigate = useNavigate();

  // const handleRegister = async () => {
  //   const response = await fetch("http://localhost:8080/registerDistributor", {
  //     method: "POST",
  //     body: JSON.stringify(form),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });

  //   console.log(response);
  // };
  const handleRegister = async () => {
    console.log(form);

    // distributor_email: "",
    //   name: "",
    //   phone: "",
    //   password: "",
    //   confirm: "",
    //   company_name: "",
    //   business_address: "",
    //   city: "",
    //   state: "",
    //   pincode: "",
    //   country: "",
    //   business_email: "",
    //   mobile_number: "",
    //   websites: "",
    //   years_of_exp: "",
    //   licence: "",
    //   distributing_products: "",
    //   types_of_industries_catered: "",
    //   number_of_employees: "",
    //   annual_turnover: "",
    //   how_did_you_find_us: "",
    //   terms: true,

    if (
      !form.values.distributor_email ||
      !form.values.name ||
      !form.values.phone ||
      !form.values.city ||
      !form.values.state ||
      !form.values.confirm ||
      !form.values.country ||
      !form.values.how_did_you_find_us ||
      !form.values.company_name ||
      !form.values.number_of_employees ||
      !form.values.pincode ||
      !form.values.types_of_industries_catered ||
      !form.values.years_of_exp ||
      !form.values.password ||
      !form.values.business_address ||
      !form.values.business_email ||
      !form.values.annual_turnover 
      // !form.value.website ||
      // !form.values.licence
    ) {
      alert("fill all the details!");
      return;
    }

    try {
      const user = createUserWithEmailAndPassword(
        auth,
        form.values.distributor_email,
        form.values.password
      );
      console.log(user);
    } catch (err) {
      console.log(err.message);
    }

    const user = {
      email: form.values.distributor_email,
      name: form.values.name,
      phone: form.values.phone,
      company_name: form.values.company_name,
      business_address: form.values.business_address,
      city: form.values.city,
      state: form.values.state,
      pincode: form.values.pincode,
      country: form.values.country,
      business_email: form.values.business_email,
      mobile_number: form.values.mobile_number,
      websites: form.values.websites,
      years_of_exp: form.values.years_of_exp,
      // licence: form.values.licence,
      distributing_products: form.values.distributing_products,
      types_of_industries_catered: form.values.types_of_industries_catered,
      number_of_employees: form.values.number_of_employees,
      annual_turnover: form.values.annual_turnover,
      how_did_you_find_us: form.values.how_did_you_find_us,
    };
    const docRef = doc(db, `Users/Distributors/users/${user.email}`);
    console.log(docRef.path);

    await setDoc(docRef, user).then(() => {
      console.log("reg");
      // SetIsRegistered(true);
      alert("Registration successful!");
    });

    // const imageRef = ref(
    //   storage,
    //   `image/${form.values.phone}/${uploadImage + v4()}`
    // );
    // uploadBytes(imageRef, uploadImage).then(() => {
    //   alert("image uploaded");
    // });
    // mongodb data storing

    const response = await fetch("http://localhost:8080/registerDistributor", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (data.status === 422 || !data) {
      window.alert("invalid regsitration!");
      console.log("invalid regsitration!");
    } else {
      alert("registration successful!");
      navigate("/login");
    }
    console.log(data);
  };

  const isAccepted = sessionStorage.getItem("buttonShow");

  return (
    <div className="distributor-page">
      {isRegistered ? (
        <ToastContainer
          style={{ width: "500px" }}
          position="top-center"
        ></ToastContainer>
      ) : null}
      <Box className="modal">
        <Link to="/">
          <img src={pic} alt="" className="manufacture-reg-pic" />
        </Link>

        <Box className="modal-header">
          <Text color="dark">You are a Distributor</Text>
        </Box>

        <form className="modal-content" onSubmit={form.onSubmit(() => {})}>
          <Box className="first-col-dist">
            <TextInput
              classNames={classes}
              className="registration-input"
              label="Email"
              // placeholder="hello@mantine.dev"
              value={form.values.distributor_email}
              onChange={(event) =>
                form.setFieldValue(
                  "distributor_email",
                  event.currentTarget.value
                )
              }
              error={form.errors.distributor_email && "Invalid email"}
              radius="md"
              required
            />
            <TextInput
              classNames={classes}
              className="registration-input"
              mt={10}
              label="Name"
              // placeholder="Enter your name"
              value={form.values.name}
              onChange={(event) =>
                form.setFieldValue("name", event.currentTarget.value)
              }
              error={form.errors.name}
              radius="md"
              required
            />

            {/* <TextInput
              classNames={classes}
              mt={10}
              label="Phone"
              placeholder="+91"
              value={form.values.phone}
              onChange={(event) =>
                form.setFieldValue("phone", event.currentTarget.value)
              }
              error={form.errors.phone && "Invalid phone number"}
              radius="md"
            /> */}

            <TextInput
              classNames={classes}
              className="registration-input"
              mt={10}
              label="Create Password"
              // placeholder="Enter Your Password"
              value={form.values.password}
              onChange={(event) =>
                form.setFieldValue("password", event.currentTarget.value)
              }
              error={
                form.errors.password &&
                "Password should include at least 6 characters"
              }
              radius="md"
              required
            />

            <TextInput
              classNames={classes}
              className="registration-input"
              mt={10}
              label="Re-Enter Password"
              // placeholder="Re-Enter Your Password"
              value={form.values.confirm}
              onChange={(event) =>
                form.setFieldValue("confirm", event.currentTarget.value)
              }
              error={
                form.errors.confirm &&
                "Password should include at least 6 characters"
              }
              radius="md"
              required
            />
            <TextInput
              classNames={classes}
              className="registration-input"
              mt={10}
              label="Company Name"
              // placeholder="Re-Enter Your Password"
              value={form.values.company_name}
              onChange={(event) =>
                form.setFieldValue("company_name", event.currentTarget.value)
              }
              error={
                form.errors.company_name &&
                "Password should include at least 6 characters"
              }
              radius="md"
              required
            />
            <TextInput
              classNames={classes}
              className="registration-input"
              mt={10}
              label="Business Address"
              // placeholder="Re-Enter Your Password"
              value={form.values.business_address}
              onChange={(event) =>
                form.setFieldValue(
                  "business_address",
                  event.currentTarget.value
                )
              }
              error={
                form.errors.business_address &&
                "Password should include at least 6 characters"
              }
              radius="md"
              required
            />
            <TextInput
              classNames={classes}
              className="registration-input"
              mt={10}
              label="City"
              // placeholder="Re-Enter Your Password"
              value={form.values.city}
              onChange={(event) =>
                form.setFieldValue("city", event.currentTarget.value)
              }
              error={
                form.errors.city &&
                "Password should include at least 6 characters"
              }
              radius="md"
              required
            />

            <TextInput
              classNames={classes}
              className="registration-input"
              mt={10}
              label="State"
              // placeholder="Re-Enter Your Password"
              value={form.values.state}
              onChange={(event) =>
                form.setFieldValue("state", event.currentTarget.value)
              }
              error={
                form.errors.state &&
                "Password should include at least 6 characters"
              }
              radius="md"
              required
            />
            <TextInput
              classNames={classes}
              className="registration-input"
              mt={10}
              label="PinCode"
              // placeholder="Re-Enter Your Password"
              value={form.values.pincode}
              onChange={(event) =>
                form.setFieldValue("pincode", event.currentTarget.value)
              }
              error={
                form.errors.pincode &&
                "Password should include at least 6 characters"
              }
              radius="md"
              required
            />
            <TextInput
              classNames={classes}
              className="registration-input"
              mt={10}
              label="Country"
              // placeholder="Re-Enter Your Password"
              value={form.values.country}
              onChange={(event) =>
                form.setFieldValue("country", event.currentTarget.value)
              }
              error={
                form.errors.country &&
                "Password should include at least 6 characters"
              }
              radius="md"
              required
            />
          </Box>
          <Box className="second-col-dist">
            <TextInput
              classNames={classes}
              className="registration-input"
              mt={10}
              label="Business Email"
              // placeholder="Re-Enter Your Password"
              value={form.values.business_email}
              onChange={(event) =>
                form.setFieldValue("business_email", event.currentTarget.value)
              }
              error={
                form.errors.business_email &&
                "Password should include at least 6 characters"
              }
              radius="md"
              required
            />
            <TextInput
              classNames={classes}
              className="registration-input"
              mt={10}
              label="Phone Number"
              // placeholder="Re-Enter Your Password"
              value={form.values.phone}
              onChange={(event) =>
                form.setFieldValue("phone", event.currentTarget.value)
              }
              error={
                form.errors.phone &&
                "Password should include at least 6 characters"
              }
              radius="md"
              required
            />
            <TextInput
              classNames={classes}
              className="registration-input"
              mt={10}
              label="Mobile Number"
              // placeholder="Re-Enter Your Password"
              value={form.values.mobile_number}
              onChange={(event) =>
                form.setFieldValue("mobile_number", event.currentTarget.value)
              }
              error={
                form.errors.mobile_number &&
                "Password should include at least 6 characters"
              }
              radius="md"
              required
            />
            {/* <TextInput
              classNames={classes}
              className="registration-input"
              mt={10}
              label="Website(if any)"
              // placeholder="Re-Enter Your Password"
              value={form.values.websites}
              onChange={(event) =>
                form.setFieldValue("websites", event.currentTarget.value)
              }
              error={
                form.errors.websites &&
                "Password should include at least 6 characters"
              }
              radius="md"
            /> */}
            <Select
              classNames={classes}
              className="registration-input"
              mt={10}
              label="Years of experience in distribution"
              // placeholder="Re-Enter Your Password"
              data={[
                { value: "0-5years", label: "0 - 5 years" },
                { value: "5-10years", label: "5 - 10 years" },
                {
                  value: "10-15 years",
                  label: "10 - 15 years",
                },
                {
                  value: "More than 15 years",
                  label: "More than 15 years",
                },
              ]}
              value={form.values.years_of_exp}
              // onChange={(event) =>
              //   form.setFieldValue("years_of_exp", event.currentTarget.value)
              // }
              {...form.getInputProps("years_of_exp")}
              error={
                form.errors.years_of_exp &&
                "Password should include at least 6 characters"
              }
              radius="md"
              required
            />
            <label htmlFor="xyz" className="list-your-products-label">
              Distributor License/Certificate:
            </label>
            <input
              multiple
              id="xyz"
              type="file"
              // placeholder="Distributor License/Certificate:"
              class="file-input"
              onChange={(event) => {
                setUploadImage(event.target.files[0]);
              }}
            />
            <TextInput
              classNames={classes}
              className="registration-input"
              mt={10}
              label="Products Currently Distributing"
              // placeholder="Re-Enter Your Password"
              value={form.values.distributing_products}
              onChange={(event) =>
                form.setFieldValue(
                  "distributing_products",
                  event.currentTarget.value
                )
              }
              error={
                form.errors.distributing_products &&
                "Password should include at least 6 characters"
              }
              radius="md"
              required
            />

            {/* Food and Beverage
Fashion and Textile
Medicines and Nutraceuticals
Consumer Electronics 
Toiletries and Cosmetics
Tooling and Machinery */}
            <Select
              classNames={classes}
              className="registration-input"
              mt={10}
              label="Types of industries catered to"
              // placeholder="Choose One"
              data={[
                { value: "Food and Beverage", label: "Food and Beverage" },
                { value: "Fashion and Textile", label: "Fashion and Textile" },
                {
                  value: "Medicines and Nutraceuticals",
                  label: "Medicines and Nutraceuticals",
                },
                {
                  value: "Consumer Electronics",
                  label: "Consumer Electronics ",
                },
                {
                  value: "Toiletries and Cosmetics",
                  label: "Toiletries and Cosmetics",
                },
                {
                  value: "Tooling and Machinery",
                  label: "Tooling and Machinery ",
                },
              ]}
              value={form.values.types_of_industries_catered}
              // onChange={(event) =>
              //   form.setFieldValue(
              //     "types_of_industries_catered",
              //     event.currentTarget.value
              //   )
              // }
              {...form.getInputProps("types_of_industries_catered")}
              error={
                form.errors.types_of_industries_catered &&
                "Password should include at least 6 characters"
              }
              radius="md"
              required
            />
            <TextInput
              classNames={classes}
              className="registration-input"
              mt={10}
              label="Number of employees"
              // placeholder="Re-Enter Your Password"
              value={form.values.number_of_employees}
              onChange={(event) =>
                form.setFieldValue(
                  "number_of_employees",
                  event.currentTarget.value
                )
              }
              error={
                form.errors.number_of_employees &&
                "Password should include at least 6 characters"
              }
              radius="md"
              required
            />
            <TextInput
              classNames={classes}
              className="registration-input"
              mt={10}
              label="Annual Turnover"
              // placeholder="Re-Enter Your Password"
              value={form.values.annual_turnover}
              onChange={(event) =>
                form.setFieldValue("annual_turnover", event.currentTarget.value)
              }
              error={
                form.errors.annual_turnover &&
                "Password should include at least 6 characters"
              }
              radius="md"
              required
            />
            {/* 
            Through your friend
Google, Yahoo etc
Social Media
Youtube
Website */}
            <Select
              classNames={classes}
              className="registration-input"
              mt={10}
              label="How did you hear about us"
              // placeholder="Re-Enter Your Password"
              data={[
                { value: "Through your friend", label: "Through your friend" },
                { value: "Google, Yahoo etc", label: "Google, Yahoo etc" },
                {
                  value: "Social Media",
                  label: "Social Media",
                },
                {
                  value: "Youtube",
                  label: "Youtube",
                },
                {
                  value: "Website",
                  label: "Website",
                },
              ]}
              value={form.values.how_did_you_find_us}
              // onChange={(event) =>
              //   form.setFieldValue(
              //     "how_did_you_find_us",
              //     event.currentTarget.value
              //   )
              // }
              {...form.getInputProps("how_did_you_find_us")}
              error={
                form.errors.how_did_you_find_us &&
                "Password should include at least 6 characters"
              }
              radius="md"
              required
            />
          </Box>
        </form>
        <div>
          <label htmlFor="" className="condition-statement">
            <input
              type="checkbox"
              onChange={() => {
                setIsChecked((prev) => !prev);
              }}
            />
            I Accept all the{" "}
            <Link to="/terms&cond" className="condition-link">
              Terms and conditions
            </Link>
          </label>
        </div>

        <Group position="apart" mt="xl" className="Register-btn">
          <Anchor
            component="button"
            type="button"
            color="dimmed"
            onClick={() => toggle()}
            size="xs"
          >
            {/* {type === "register"
                ? "Already have an account? Login"
                : "Don't have an account? Register"} */}
          </Anchor>
          <Button
            type="submit"
            radius="xl"
            className="register-btn"
            disabled={!isChecked}
            onClick={handleRegister}
          >
            {/* {upperFirst(type) + " as Distributor"} */}
            Register as Distributor
          </Button>
        </Group>
      </Box>
    </div>
  );
}

// Distributor Registration Form:
// Full Name:
// Company Name:
// Business Address:
// City:
// State:
// Pincode:
// Country:
// Business Email:
// Phone Number:
// Mobile Number:
// Website (if any):
// Years of experience in distribution:
// Distributor License/Certificate:
//  Products currently distributing:
// Types of industries catered to:
//  Number of employees:
// Annual turnover:
// How did you hear about us?
// Referral from a friend or colleague
// Online search engine
// Social media platform (e.g. Facebook, LinkedIn, Twitter)
// Industry event or trade show
// Advertisement (online or offline)
// Email newsletter or marketing campaign
// Other (please specify)

export default RegisterDistributor;

const useStyles = createStyles((theme) => ({
  root: {
    position: "relative",
  },

  input: {
    // width: "180%",
    height: rem(54),
    paddingTop: rem(18),
  },

  label: {
    position: "absolute",
    pointerEvents: "none",
    fontSize: theme.fontSizes.xs,
    paddingLeft: theme.spacing.sm,
    paddingTop: `calc(${theme.spacing.sm} / 2)`,
    zIndex: 1,
    // width: "180%",
  },
}));
