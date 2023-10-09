import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToggle, upperFirst } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import { auth, db } from "./Firebase/firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, Timestamp } from "firebase/firestore";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import {
  TextInput,
  PasswordInput,
  Select,
  MultiSelect,
  Text,
  Paper,
  Group,
  PaperProps,
  Button,
  Divider,
  Checkbox,
  Box,
  Anchor,
  Stack,
  createStyles,
  rem,
} from "@mantine/core";
import pic from "./images/Global vistar TB.svg";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import "./AuthenticationPage.css";
import "./ListYourProducts.css";

function RegisterManufacturer(props) {
  const { classes } = useStyles();
  const [type, toggle] = useToggle(["login", "register"]);
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  // Company name
  // Contact name
  // Email address
  // Phone number
  // Company address
  // Type of product(s) manufactured
  // Target market
  // Current distribution channels
  // Annual revenue
  // Number of employees
  // Years in business
  // Company Registration Details
  // Password creation
  // Terms and conditions acceptance checkbox

  const form = useForm({
    initialValues: {
      manufacturer_email: "",
      name: "",
      phone: "",
      password: "",
      confirm: "",
      company_name: "",
      company_address: "",
      city: "",
      state: "",
      pincode: "",
      country: "",
      types_of_products: "",
      distribution_channels: [],
      annual_revenue: "",
      number_of_employees: "",
      years_in_business: "",
      company_registration_details: "",
      terms: true,
    },

    validate: {
      distributor_email: (val) =>
        /^\S+@\S+$/.test(val) ? null : "Invalid email",
      password: (val) =>
        val.length <= 6
          ? "Password should include at least 6 characters"
          : null,
      confirm: (val, password) =>
        val === password ? null : "password dont match",
      phone: (val) =>
        val.length > 10 ? "phone number should be only 10 digits" : null,
    },
  });
  // console.log(form.values.distribution_channels);

  const handleRegister = async () => {
    if (
      !form.values.manufacturer_email ||
      !form.values.name ||
      !form.values.phone ||
      !form.values.city ||
      !form.values.state ||
      !form.values.confirm ||
      !form.values.country ||
      // !form.values.how_did_you_find_us ||
      !form.values.company_name ||
      !form.values.company_address ||
      !form.values.number_of_employees ||
      !form.values.pincode ||
      !form.values.types_of_products ||
      !form.values.years_in_business ||
      // !form.values.types_of_industries_catered ||
      // !form.values.years_of_exp ||
      !form.values.password ||
      // !form.values.business_address ||
      // !form.values.business_email ||
      !form.values.annual_revenue ||
      !form.values.distribution_channels
      // !form.value.website ||
      // !form.values.licence
    ) {
      alert("fill all the details!");
      return;
    }
    console.log(form);
    try {
      const user = createUserWithEmailAndPassword(
        auth,
        form.values.manufacturer_email,
        form.values.password
      );
      console.log(user);
      props.setShowRegister((prev) => !prev);
    } catch (err) {
      console.log(err.message);
    }

    const user = {
      email: form.values.manufacturer_email,
      name: form.values.name,
      phone: form.values.phone,
      company_name: form.values.company_name,
      company_address: form.values.company_address,
      types_of_products: form.values.types_of_products,
      // target_market: form.values.target_market,
      distribution_channels: form.values.distribution_channels,
      annual_revenue: form.values.annual_revenue,
      number_of_employees: form.values.number_of_employees,
      years_in_business: form.values.years_in_business,
      company_registration_details: form.values.company_registration_details,
    };
    const docRef = doc(db, `Users/Manufacturers/users/${user.email}`);
    console.log(docRef.path);
    console.log("demo");
    await setDoc(docRef, user).then(() => {
      console.log("registerd");
      alert("Registartion successful!");
    });

    const response = await fetch("http://localhost:8080/registerManufacturer", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response) {
      alert("user registered successfully");
      navigate("/login");
    }

    console.log(response);
  };

  const ManufacturerAccepted = sessionStorage.getItem("isAccepted");
  console.log("it is" + ManufacturerAccepted);

  return (
    <div className="manufacturer-page">
      <Box className="modal register-manufacturer">
        <ToastContainer></ToastContainer>
        <Link to="/">
          <img src={pic} alt="" className="manufacture-reg-pic" />
        </Link>

        <Box className="modal-header">
          <Text color="dark">You are a Manufacturer</Text>
        </Box>

        <form
          className="modal-content"
          onSubmit={form.onSubmit(() => {
            handleRegister();
          })}
        >
          <Box className="first-col-dist">
            <TextInput
              mt={15}
              classNames={classes}
              className="registration-input"
              label="Company name"
              // placeholder="hello@mantine.dev"
              value={form.values.company_name}
              onChange={
                (event) =>
                  form.setFieldValue("company_name", event.currentTarget.value)
                // setEmail(event.target.value)
              }
              error={form.errors.company_name && "Invalid email"}
              radius="md"
              required
            />
            <TextInput
              mt={15}
              classNames={classes}
              className="registration-input"
              label="Email"
              // placeholder="hello@mantine.dev"
              value={form.values.manufacturer_email}
              onChange={
                (event) =>
                  form.setFieldValue(
                    "manufacturer_email",
                    event.currentTarget.value
                  )
                // setEmail(event.target.value)
              }
              error={form.errors.manufacturer_email && "Invalid email"}
              radius="md"
              required
            />
            <TextInput
              mt={15}
              classNames={classes}
              className="registration-input"
              label="Name"
              // placeholder="Enter your full name"
              value={form.values.name}
              onChange={
                (event) => form.setFieldValue("name", event.currentTarget.value)
                // setEmail(event.target.value)
              }
              error={form.errors.name}
              radius="md"
              required
            />
            <TextInput
              mt={15}
              classNames={classes}
              className="registration-input"
              label="Phone"
              // placeholder="+91"
              value={form.values.phone}
              onChange={(event) =>
                form.setFieldValue("phone", event.currentTarget.value)
              }
              error={form.errors.phone && "Invalid phone number"}
              radius="md"
              required
            />
            <TextInput
              mt={15}
              classNames={classes}
              className="registration-input"
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
              mt={15}
              classNames={classes}
              className="registration-input"
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
              mt={15}
              classNames={classes}
              className="registration-input"
              label="Company address"
              // placeholder="hello@mantine.dev"
              value={form.values.company_address}
              onChange={
                (event) =>
                  form.setFieldValue(
                    "company_address",
                    event.currentTarget.value
                  )
                // setEmail(event.target.value)
              }
              error={form.errors.company_address && "Invalid email"}
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
          </Box>
          <Box className="second-col-dist">
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
            <Select
              mt={15}
              classNames={classes}
              className="registration-input"
              label="Type of product(s) manufactured"
              // placeholder="hello@mantine.dev"

              value={form.values.types_of_products}
              {...form.getInputProps("types_of_products")}
              // onChange={
              //   (event) =>
              //     form.setFieldValue(
              //       "types_of_products",
              //       event.currentTarget.value
              //     )
              //   // setEmail(event.target.value)
              // }
              data={[
                { value: "Beverage", label: "Beverage" },
                { value: "Daily and Frozen", label: "Daily and Frozen" },
                {
                  value: "Grains and spices",
                  label: "Grains and spices",
                },
                {
                  value: "Ready-to-cook",
                  label: "Ready-to-cook",
                },
                {
                  value: "Snacks and Savouries",
                  label: "Snacks and Savouries",
                },
                {
                  value: "Sugar and Confectionary",
                  label: "Sugar and Confectionary",
                },
              ]}
              error={form.errors.types_of_products && "Invalid email"}
              radius="md"
              required
            ></Select>
            {/* <TextInput
              mt={15}
              classNames={classes}
              className="registration-input"
              label="Phone"
              // placeholder="+91"
              value={form.values.phone}
              onChange={(event) =>
                form.setFieldValue("phone", event.currentTarget.value)
              }
              error={form.errors.phone && "Invalid phone number"}
              radius="md"
            /> */}
            {/* <TextInput
              mt={15}
              classNames={classes}
              className="registration-input"
              label="Target market"
              // placeholder="hello@mantine.dev"
              value={form.values.target_market}
              onChange={
                (event) =>
                  form.setFieldValue("target_market", event.currentTarget.value)
                // setEmail(event.target.value)
              }
              error={form.errors.target_market && "Invalid email"}
              radius="md"
            /> */}
            {/* -Current Distribution Channel (Multiple Options Selection) Stockists
            Distributors Wholesalers Retailers */}
            <MultiSelect
              mt={15}
              classNames={classes}
              className="registration-input"
              label="Current distribution channels"
              data={[
                { value: "Stockists", label: "Stockists" },
                { value: "Distributors", label: "Distributors" },
                {
                  value: "Wholesalers",
                  label: "Wholesalers",
                },
                {
                  value: "Retailers",
                  label: "Retailers",
                },
              ]}
              // placeholder="hello@mantine.dev"
              value={form.values.distribution_channels}
              // onChange={
              //   (event) =>
              //     form.setFieldValue(
              //       "distribution_channels",
              //       event.currentTarget.value
              //     )
              //   // setEmail(event.target.value)
              // }
              {...form.getInputProps("distribution_channels")}
              error={form.errors.distribution_channels && "Invalid email"}
              radius="md"
              required
            />
            <Select
              mt={15}
              classNames={classes}
              className="registration-input"
              label="Annual Revenue"
              // placeholder="hello@mantine.dev"
              value={form.values.annual_revenue}
              // onChange={
              //   (event) =>
              //     form.setFieldValue(
              //       "annual_revenue",
              //       event.currentTarget.value
              //     )
              //   // setEmail(event.target.value)
              // }

              {...form.getInputProps("annual_revenue")}
              data={[
                { value: "less than 5 lakh", label: "less than 5 lakh" },
                { value: "5-10lakh", label: "5 - 10 lakh" },
                {
                  value: "10-50 lakh",
                  label: "10 - 50 lakh",
                },
                {
                  value: "More than 50 years",
                  label: "More than 50 lakh",
                },
              ]}
              error={form.errors.annual_revenue && "Invalid email"}
              radius="md"
              required
            />
            {/* <Slider
              marks={[
                { value: 20, label: "20%" },
                { value: 50, label: "50%" },
                { value: 80, label: "80%" },
              ]}
            /> */}
            <TextInput
              mt={15}
              classNames={classes}
              className="registration-input"
              label="Number of employees"
              // placeholder="hello@mantine.dev"
              value={form.values.number_of_employees}
              onChange={
                (event) =>
                  form.setFieldValue(
                    "number_of_employees",
                    event.currentTarget.value
                  )
                // setEmail(event.target.value)
              }
              error={form.errors.number_of_employees && "Invalid email"}
              radius="md"
              required
            />
            <Select
              mt={15}
              classNames={classes}
              className="registration-input"
              label="Years in business"
              // placeholder="hello@mantine.dev"

              value={form.values.years_in_business}
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
              {...form.getInputProps("years_in_business")}
              // onChange={
              //   (event) =>
              //     form.setFieldValue(
              //       "years_in_business",
              //       event.currentTarget.value
              //     )
              //   // setEmail(event.target.value)
              // }
              error={form.errors.years_in_business && "Invalid email"}
              radius="md"
              required
            />
            <label htmlFor="xyz" className="list-your-products-label">
              Company Registration Details( Company PAN, Registration
              Certificate, Udhyam Aadhar)
            </label>
            <input
              type="file"
              id="xyz"
              mt={15}
              classNames={classes}
              className="file-input"
              label="Company Registration Details"
              // placeholder="hello@mantine.dev"
              value={form.values.company_registration_details}
              {...form.getInputProps("company_registration_details")}
              error={
                form.errors.company_registration_details && "Invalid email"
              }
              radius="md"
              required
            />
          </Box>
        </form>
        <div className="t-and-c-line">
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
        <Group position="apart" mt="xl">
          <Anchor
            component="button"
            type="button"
            color="dimmed"
            onClick={() => toggle()}
            size="xs"
          ></Anchor>
          <Button
            type="submit"
            radius="xl"
            disabled={!isChecked}
            className="register-button-manufacturer"
            onClick={handleRegister}
          >
            {/* {upperFirst(type) + " as Manufacturer"} */}
            Register as Manufacturer
          </Button>
        </Group>
      </Box>
    </div>
  );
}

export default RegisterManufacturer;

const useStyles = createStyles((theme) => ({
  root: {
    position: "relative",
  },

  input: {
    // width: "100%",
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

  [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
    input: {
      width: "120%",
      height: "2.5em",
      paddingTop: "0.25em",
    },
    label: {
      width: "180%",
      fontSize: "0.9em",
      paddingTop: "0.2em",
    },
  },
}));
