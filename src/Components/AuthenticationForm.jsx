import { useToggle, upperFirst } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import pic from "../images/Global vistar TB.svg";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../Firebase/firebase-config";
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
// import { GoogleButton, TwitterButton } from '../SocialButtons/SocialButtons';
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { dividerClasses } from "@mui/material";
import DistributorRegister from "../RegisterDistributor";
import ManufacturerRegister from "../RegisterManufacturer";
import "../AuthenticationPage.css";

function AuthenticationForm(props) {
  const { classes } = useStyles();
  const [type, toggle] = useToggle(["login", "register"]);
  const [userType, setUserType] = useState("");

  const [user, setUser] = useState(null);

  const [showRegister, setShowRegister] = useState(true);
  const navigate = useNavigate();

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
      terms: true,
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
      password: (val) =>
        val.length <= 6
          ? "Password should include at least 6 characters"
          : null,
    },
  });

  const handleLogin = async () => {
    signInWithEmailAndPassword(auth, form.values.email, form.values.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        console.log("user is logged in");
        sessionStorage.setItem("email", user.email);
        // props.setShowLoginForm(false);

        navigate(`/${user.email}`);

        // alert("You are logged in!");
        // window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="authentication-section">
        <Box className="modal sign-in-modal">
          {/* <Box className="modal-header">
          <Button onClick={() => toggle("login")} className="auth-login-btn">
            Login
          </Button>
          <Button onClick={() => toggle("register")} className="auth-reg-btn">
            Register
          </Button>
        </Box> */}

          <form
            onSubmit={form.onSubmit(() => handleLogin())}
            className="modal-content-sign-in"
          >
            <Box>
              <div className="logo-auth">
                <Link to="/">
                  <img src={pic} alt="" className="manufacture-reg-pic" />
                </Link>
              </div>
              <div className="header-sign-in">
                <h1>Sign In</h1>
              </div>
              {type === "register" ? (
                <Flex
                  direction="column"
                  gap="sm"
                  justify="center"
                  align="center"
                >
                  <Button onClick={() => setUserType("manufacturer")}>
                    Register as Manufacturer
                  </Button>
                  <Button onClick={() => setUserType("distributor")}>
                    Register as Distributor
                  </Button>
                </Flex>
              ) : (
                <div className="login-inputs">
                  <TextInput
                    classNames={classes}
                    label="Email"
                    placeholder="hello@mantine.dev"
                    value={form.values.email}
                    onChange={(event) =>
                      form.setFieldValue("email", event.currentTarget.value)
                    }
                    error={form.errors.email && "Invalid email"}
                    radius="md"
                  />
                  <TextInput
                    mt={15}
                    classNames={classes}
                    label="Password"
                    placeholder="Enter Your Password"
                    value={form.values.password}
                    onChange={(event) =>
                      form.setFieldValue("password", event.currentTarget.value)
                    }
                    error={
                      form.errors.password &&
                      "Password should include at least 6 characters"
                    }
                    radius="md"
                  />
                </div>
              )}
            </Box>

            <Group position="apart" mt="xl">
              <Anchor
                component="button"
                type="button"
                color="dimmed"
                onClick={() => toggle()}
                size="xs"
              ></Anchor>
              <Button type="submit" radius="xl" className="login-btn-bottom">
                {upperFirst(type)}
              </Button>
            </Group>
            <Link to="/register" className="register-question">
              <p>New to Global Vistar? Create an Account</p>
            </Link>
          </form>
        </Box>

        {userType === "manufacturer" && (
          <ManufacturerRegister
            showRegister={showRegister}
            setShowRegister={setShowRegister}
          />
        )}
        {userType === "distributor" ? <DistributorRegister /> : null}
      </div>
    </>
  );
}

export default AuthenticationForm;

const useStyles = createStyles((theme) => ({
  root: {
    position: "relative",
  },

  input: {
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
  },
}));
