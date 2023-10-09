import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../AuthenticationPage.css";
import {
  Box,
  TextInput,
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
  createStyles,
  rem,
  Flex,
} from "@mantine/core";

function Register() {
  const [userType, setUserType] = useState("");
  return (
    <Box className="modal-register">
      <Group className="buttons-register">
        <h1 className="header-sign-in">Who Are You?</h1>
        <Link to="/registerManufacturer">
          <Button onClick={() => setUserType("manufacturer")}>
            Register as Manufacturer
          </Button>
        </Link>

        <Link to="/registerDistributor">
          <Button onClick={() => setUserType("distributor")}>
            Register as Distributor
          </Button>
        </Link>
        <Link to="/login" className="register-question">
          <p>Already have an account ? Sign In</p>
        </Link>
      </Group>
    </Box>
  );
}

export default Register;
