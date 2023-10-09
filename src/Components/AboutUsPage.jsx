import {
  createStyles,
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
  rem,
} from "@mantine/core";
import "../style.css";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import NetworkCheckIcon from "@mui/icons-material/NetworkCheck";
import ScienceIcon from "@mui/icons-material/Science";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import "../features.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Card, Badge } from "@mantine/core";
// import { IconCheck } from "@tabler/icons-react";
// import image from "./images/hero-banner.png";
import AboutUsMain from "../images/about-us-image-main.png";
import homePic from "../images/About-us-image (2).svg";
import Header from "../Header";
import Footer from "../Footer";
import PranavImg from "../images/Photo Pranav.svg";
import KiranImg from "../images/Photo Kiran.svg";
import AtharvaImg from "../images/Photo Atharva 1.svg";
import "../AboutUspPage.css";
const useStyles = createStyles((theme) => ({
  //   inner: {
  //     display: "flex",
  //     justifyContent: "space-between",
  //     paddingTop: `calc(${theme.spacing.xl} * 4)`,
  //     paddingBottom: `calc(${theme.spacing.xl} * 4)`,
  //   },

  //   content: {
  //     maxWidth: "500px",
  //     // marginRight: `calc(${theme.spacing.xl} * 3)`,

  //     // [theme.fn.smallerThan("md")]: {
  //     //   maxWidth: "100%",
  //     //   marginRight: 0,
  //     // },
  //   },

  title: {
    // color: theme.colorScheme === "dark" ? theme.white : theme.black,
    // fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    // lineHeight: 1.2,
    // fontWeight: 900,

    [theme.fn.smallerThan("xs")]: {
      fontSize: rem(28),
    },
  },

  control: {
    [theme.fn.smallerThan("xs")]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,

    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  highlight: {
    position: "relative",
    backgroundColor: theme.fn.variant({
      variant: "light",
      color: theme.primaryColor,
    }).background,
    borderRadius: theme.radius.sm,
    padding: `${rem(4)} ${rem(12)}`,
  },
}));

function AboutUsPage() {
  const { classes } = useStyles();
  return (
    <>
      <Header />
      <div className="about-us-page">
        <div>
          <div className="section-one">
            <div
              className="left-section-one"
              // style={{ width: "900px", marginLeft: "7rem" }}
            >
              <Title classNames="slogan">
                <div
                  style={{ display: "flex", fontSize: "2.8rem" }}
                  className="badhaye-apke"
                >
                  Badhaye
                  <span style={{ color: "#BC1823" }}>Apke Business</span>
                </div>
                <span style={{ display: "flex", fontSize: "2.8rem" }}>
                  ki{" "}
                  <span style={{ color: "#BC1823", paddingLeft: "10px" }}>
                    {" "}
                    Raftaar
                  </span>{" "}
                </span>
              </Title>
              <Text color="dimmed" mt="md" className="left-section-text">
                Welcome to Global Vistar, the platform that connects
                manufacturers and distributors to expand their business and win
                together. At Global Vistar, we believe that every manufacturer
                and distributor deserves to achieve the their full potential.
                That's why we've created a platform that makes it easy for them
                to find each other, collaborate, and grow their business.
                <span
                  style={{
                    color: "#210d41",
                    fontWeight: "bold",
                    fontStyle: "italic",
                  }}
                >
                  "Vistar" means expansion, and that's exactly what we're all
                  about. We want to help our users expand their reach, expand
                  their profits, and expand their impact on the world.
                </span>
              </Text>
            </div>
            {/* <Image src={image.src} className={classes.image} /> */}
            <img
              className="about-us-img-1"
              src={AboutUsMain}
              alt="Modern house model"
              // style={{
              //   width: "800px",
              //   display: "flex",
              //   justifyContent: "center",
              //   alignItems: "center",
              // }}
            />
          </div>
        </div>
      </div>

      <div className="why-choose-us">
        <h1 className="title-why-choose-us">
          Choosing <span>Global Vistar</span> means Choosing
          <span>Expansion</span>
        </h1>
        <ul className="why-choose-us-list">
          <li>
            <div href="#" className="reason-card">
              <div className="card-icon-why-choose-us">
                <DoneOutlineIcon className="icon-reason-card" />
              </div>

              <p className="">All-in-One Solution</p>
            </div>
          </li>
          <li>
            <div href="#" className="reason-card">
              <div className="card-icon">
                <AddBusinessIcon className="icon-reason-card" />
              </div>

              <p className="">Product Market Fit</p>
            </div>
          </li>
          <li>
            <div href="#" className="reason-card">
              <div className="card-icon">
                <NetworkCheckIcon className="icon-reason-card" />
              </div>

              <p className="">Trusted Network</p>
            </div>
          </li>
          <li>
            <div href="#" className="reason-card">
              <div className="card-icon">
                <ScienceIcon className="icon-reason-card" />
              </div>

              <p className="">Innovation</p>
            </div>
          </li>
          <li>
            <div href="#" className="reason-card">
              <div className="card-icon">
                <SupportAgentIcon className="icon-reason-card" />
              </div>

              <p className="">Customer-Centric</p>
            </div>
          </li>
        </ul>
      </div>

      <div className="vision-mission-section">
        <div
          className="mission"
          // style={{ width: "900px", marginLeft: "7rem" }}
        >
          <Title className="vision-mission-header">
            Our <span>Mission</span>{" "}
          </Title>
          <hr />
          <Text color="dimmed" mt="md" className="mission-text">
            Deliver innovative solutions and best-in-class technology and sales
            support that enables manufacturers and distributors to succeed in
            today's rapidly evolving retail landscape
          </Text>
        </div>

        <div
          className="vision"
          // style={{ width: "900px", marginLeft: "7rem" }}
        >
          <Title className="vision-mission-header">
            Our <span>Vision</span>{" "}
          </Title>
          <hr />
          <Text color="dimmed" mt="md" className="mission-text">
            We envision to be the most trusted ecosystem where manufacturers and
            distributors have the tools, technology, and support they need to
            reach their customers, sell their products, and achieve their
            business goals.
          </Text>
        </div>

        {/* <Image src={image.src} className={classes.image} /> */}
      </div>

      <div className="our-team-section">
        <h1 className="our-team-head">Our team</h1>
        <hr className="dividor" />
        <div className="team-members">
          <Card
            shadow="sm"
            padding="lg"
            radius="md"
            withBorder
            className="member-card"
          >
            {/* <Image
              src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
              height={160}
              alt="Norway"
              className="member-pic"
            /> */}

            <div className="img-holder">
              <img src={PranavImg} alt="" className="member-pic" />
            </div>

            <Group position="apart" mt="md" mb="xs">
              <Text
                style={{ color: "#210d41", fontSize: "18px" }}
                className="member-name"
              >
                Pranav Bankar
              </Text>
            </Group>

            <Text size="sm" color="dimmed" className="member-bio">
              Pranav Bankar is the Co-founder at Global Vistar. He is behind the
              technology that's connecting distributors and manufactures
              effectively.
            </Text>
            <a
              href="https://www.linkedin.com/in/pranav-bankar-6aa451177/?originalSubdomain=in"
              className="social-handles"
            >
              <LinkedInIcon></LinkedInIcon>
            </a>
          </Card>

          <Card
            shadow="sm"
            padding="lg"
            radius="md"
            withBorder
            className="member-card"
          >
            {/* <Image
              src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
              height={160}
              alt="Norway"
              className="member-pic"
            /> */}

            <img src={KiranImg} alt="" className="member-pic" />

            <Group position="apart" mt="md" mb="xs">
              <Text className="member-name">Kiran Patil</Text>
            </Group>

            <Text size="sm" color="dimmed" className="member-bio">
              Kiran Patil is the Co-founder of Global Vistar. She is a branding
              expert and a good food technologist. She has been a crucial part of the
              Pure Pluck enterprise, a platform for good food.
            </Text>
            <a
              href="https://www.linkedin.com/in/kiran-patil-28b64917a"
              className="social-handles"
            >
              <LinkedInIcon></LinkedInIcon>
            </a>
          </Card>

          <Card
            shadow="sm"
            padding="lg"
            radius="md"
            withBorder
            className="member-card"
          >
            {/* <Image
              src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
              height={160}
              alt="Norway"
              className="member-pic"
            /> */}

            <img src={AtharvaImg} alt="" className="member-pic" />

            <Group position="apart" mt="md" mb="xs">
              <Text className="member-name">Atharva Kurumbhatte</Text>
            </Group>

            <Text size="sm" color="dimmed" className="member-bio">
              Atharva is the Technology Development Head at Global Vistar. He is
              the hands behind the technology of the platform.
            </Text>
            <a
              href="https://www.linkedin.com/in/atharva-kurumbhatte/"
              className="social-handles"
            >
              <LinkedInIcon></LinkedInIcon>
            </a>
          </Card>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default AboutUsPage;
