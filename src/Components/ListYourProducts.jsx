// Product name
// Product category (The category we have)
// Product Description
// Product images
// Packaging type and size (e.g. bottles, boxes, sachets, etc.)
// Minimum order quantity (MOQ)
// Wholesale price (per unit or case)
// Lead time for production and delivery
// Payment terms (e.g. pre-payment, credit terms)
// Certification or accreditation (e.g. fssai, Halal, Kosher, etc.)
// Manufacturing location
// Looking for Distributor Locations
// Phone number

import { React, useState } from "react";
import { auth, db } from "../Firebase/firebase-config";
import Form from "react-bootstrap/Form";
import { ref, uploadBytes } from "firebase/storage";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { storage } from "../Firebase/firebase-config";
import { doc, setDoc, Timestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import {
  TextInput,
  Select,
  FileInput,
  PasswordInput,
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
import { useForm } from "@mantine/form";
import "../ListYourProducts.css";
import { v4 } from "uuid";

function ListYourProducts() {
  const { classes } = useStyles();

  const [uploadImage, setuploadImage] = useState([]);
  const [uploadCertificate, setuploadCertificate] = useState(null);

  const form = useForm({
    initialValues: {
      // email: "",
      category: "",
      product_name: "",
      product_description: "",
      upload_image: "",

      packaging_types: "",
      wholesale_price: "",
      min_exp_profit_margin: "",
      max_exp_profit_margin: "",
      min_order_quantity: "",
      lead_time_for_production_and_delivery: "",
      payment_terms: "",
      certification_or_accreditation: "",
      manufacturing_location: "",
      distributor_location: "",
      phone: "",
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });
  console.log("min margin: ", form.values.min_exp_profit_margin);
  const navigate = useNavigate();
  const id = sessionStorage.getItem("email");

  const handleListing = async () => {
    const user = {
      // email: form.values.email,
      category: form.values.category,
      product_name: form.values.product_name,
      product_description: form.values.product_description,
      //upload image
      wholesale_price: form.values.wholesale_price,
      packaging_types: form.values.packaging_types,
      minimum_expected_profit_margin: form.values.min_exp_profit_margin,
      maximum_expected_profit_margin: form.values.max_exp_profit_margin,
      min_order_quantity: form.values.min_order_quantity,
      Lead_time_for_production_and_delivery:
        form.values.lead_time_for_production_and_delivery,
      // certification_or_accreditation: form.values.certification_or_accreditation,

      payment_terms: form.values.payment_terms,

      manufacturing_location: form.values.manufacturing_location,
      distributor_location: form.values.distributor_location,
      phone: form.values.phone,
    };
    const docRef = doc(
      db,
      `Users/Manufacturers/users/${sessionStorage.getItem("email")}/Products/${
        user.product_name
      }`
    );
    console.log(docRef.path);

    await setDoc(docRef, user).then(() => {
      console.log("Product Listed");
      // navigate("/${id}");
    });

    for (let i = 0; i < uploadImage.length; i++) {
      const imageRef = ref(
        storage,
        `image/${form.values.phone}/product_images/${uploadImage[i] + v4()}`
      );
      uploadBytes(imageRef, uploadImage[i]).then(() => {
        // alert("image uploaded");
      });
    }

    const certificateRef = ref(
      storage,
      `image/${form.values.phone}/Product Certificates/${
        uploadCertificate + v4()
      }`
    );

    uploadBytes(certificateRef, uploadCertificate).then(() => {
      alert("image uploaded");
    });
  };

  return (
    <>
      <div>
        <h1 className="list-your-products-head">List Your Products</h1>
      </div>
      <Box maw={300} mx="auto" className="list-your-products-box">
        <form
          onSubmit={form.onSubmit((values) => console.log(values))}
          className="list-your-products-section"
        >
          <Box>
            {/* <TextInput
              withAsterisk
              label="Email"
              classNames={classes}
              // placeholder="your@email.com"
              value={form.values.email}
              onChange={
                (event) =>
                  form.setFieldValue("email", event.currentTarget.value)
                // setEmail(event.target.value)
              }
            /> */}
            <Select
              withAsterisk
              label="Choose Category"
              classNames={classes}
              data={[
                { value: "Beverages", label: "Beverages" },
                {
                  value: "Fashion and Textile",
                  label: "Dairy and frozen",
                },
                {
                  value: "Medicines and Nutraceuticals",
                  label: "Grains and spices",
                },
                {
                  value: "Consumer Electronics",
                  label: "Ready to cook ",
                },
                {
                  value: "Toiletries and Cosmetics",
                  label: "Snacks and Savouries",
                },
                {
                  value: "Tooling and Machinery",
                  label: "Sugar and confectionery ",
                },
              ]}
              // placeholder="your@email.com"
              {...form.getInputProps("category")}
              value={form.values.category}
              // onChange={
              //   (event) =>
              //     form.setFieldValue(
              //       "category",
              //       event.currentTarget.value
              //     )
              //   // setEmail(event.target.value)
              // }
            />
            <TextInput
              withAsterisk
              label="Phone"
              classNames={classes}
              // placeholder="your phone number"
              {...form.getInputProps("phone")}
            />
            <TextInput
              withAsterisk
              label="Product Name"
              classNames={classes}
              // placeholder="your@email.com"
              {...form.getInputProps("product_name")}
            />
            {/* <TextInput
              withAsterisk
              label="Product Code"
              classNames={classes}
              // placeholder="your@email.com"
              {...form.getInputProps("product_code")}
            /> */}
            <TextInput
              withAsterisk
              label="Product Description"
              classNames={classes}
              // placeholder="your@email.com"
              {...form.getInputProps("product_description")}
            />
            <TextInput
              withAsterisk
              label="Lead time for production and delivery"
              classNames={classes}
              // placeholder="your@email.com"
              {...form.getInputProps("lead_time_for_production_and_delivery")}
            />
            {/* Payment terms (e.g. pre-payment, credit terms) */}
            <TextInput
              withAsterisk
              label="Payment terms"
              placeholder="(e.g. pre-payment, credit terms)"
              classNames={classes}
              // placeholder="your@email.com"
              {...form.getInputProps("payment_terms")}
            />
            <div className="file-selection">
              <label for="image-input" className="list-your-products-label">
                Upload Product Images Here:
              </label>
              <input
                multiple
                type="file"
                id="image-input"
                class="file-input"
                onChange={(event) => {
                  setuploadImage(event.target.file);
                }}
              />
            </div>

            <TextInput
              withAsterisk
              label="Packaging type and size (e.g. bottles, boxes, sachets, etc.)"
              classNames={classes}
              // placeholder="your@email.com"
              {...form.getInputProps("packaging_types")}
            />
          </Box>
          <Box>
            {/* <Select
              withAsterisk
              label="GST * (only choose one option)"
              classNames={classes}
              data={[
                { value: "0%", label: "0%" },
                {
                  value: "5%",
                  label: "5%",
                },
                {
                  value: "12%",
                  label: "18%",
                },
                {
                  value: "12%",
                  label: "18%",
                },
              ]}
              // placeholder="your@email.com"
              {...form.getInputProps("GST")}
              // 0%  5%  12%  18%  28%
            /> */}

            {/* <TextInput
              withAsterisk
              label="Minimum Expected Profit Margin"
              classNames={classes}
              // placeholder="your@email.com"
              {...form.getInputProps("min_exp_profit_margin")}
            /> */}
            {/* Wholesale price (per unit or case) */}
            <TextInput
              withAsterisk
              label="Minimum expected profit margin"
              classNames={classes}
              // placeholder="your@email.com"
              {...form.getInputProps("min_exp_profit_margin")}
            />
            <TextInput
              withAsterisk
              label="Maximum expected profit margin"
              classNames={classes}
              // placeholder="your@email.com"
              {...form.getInputProps("max_exp_profit_margin")}
            />
            <TextInput
              withAsterisk
              label="Wholesale price (per unit or case)"
              classNames={classes}
              // placeholder="your@email.com"
              {...form.getInputProps("wholesale_price")}
            />
            <TextInput
              withAsterisk
              label="Minimum Order Quantity*"
              classNames={classes}
              // placeholder="your@email.com"
              {...form.getInputProps("min_order_quantity")}
            />
            {/* Certification or accreditation (e.g. fssai, Halal, Kosher, etc.) */}
            {/* <FileInput
              // withAsterisk
              label="Certification or accreditation*"
              classNames={classes}
              placeholder="(e.g. fssai, Halal, Kosher, etc.) file upload"
              // {...form.getInputProps("certification_or_accreditation")}
            /> */}

            <div className="file-selection">
              <label for="file-input" className="list-your-products-label">
                Upload Product Certification Here:
              </label>
              <input
                type="file"
                id="file-input"
                className="file-input"
                onChange={(event) => {
                  setuploadCertificate(event.target.files[0]);
                }}
              />
            </div>

            <TextInput
              withAsterisk
              label="Manufacturing Location*"
              classNames={classes}
              placeholder=""
              {...form.getInputProps("manufacturing_location")}
            />
            <TextInput
              withAsterisk
              label="Looking for Distributor Locations *"
              classNames={classes}
              placeholder=""
              {...form.getInputProps("distributor_location")}
            />
          </Box>
        </form>
        <div className="submit-btn-list-products">
          <Group position="right" mt="md">
            <Button type="submit" onClick={handleListing}>
              Submit
            </Button>
          </Group>
        </div>
      </Box>
    </>
  );
}

export default ListYourProducts;

const useStyles = createStyles((theme) => ({
  root: {
    position: "relative",
  },

  input: {
    // width: "100%",
    height: rem(54),
    paddingTop: rem(18),
    marginTop: rem(20),
    width: rem(400),
  },

  label: {
    position: "absolute",
    pointerEvents: "none",
    fontSize: theme.fontSizes.sm,
    paddingLeft: theme.spacing.sm,
    paddingTop: `calc(${theme.spacing.sm} / 2)`,
    zIndex: 1,
    
    // width: "180%",
  },

  [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
    input: {
      width: "100%",
      height: "2.5em",
      paddingTop: "0.25em",
    },
    label: {
      width: "180%",
      fontSize: "0.9em",
      paddingTop: "0.2em",
    },

    formColumn: {
      width: "100%",
    },
  },
}));
