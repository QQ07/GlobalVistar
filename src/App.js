import "./App.css";
import { useState, useEffect, useRef } from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import About from "./Components/About";
import ServiceSection from "./ServiceSection";
import ProductSection from "./ProductSection";
import Features from "./Features";
import Blogs from "./Components/Blogs.jsx";
import CTA from "./Components/CTA";
import Footer from "./Footer";
import AuthenticationForm from "./Components/AuthenticationForm";
import OurServices from "./OurServices";
import Enquiry from "./Components/Enquiry";
import Calendly from "./Components/Calendly";
import InfoCards from "./Components/InfoCards";
import "./Components/BookADemoCall";
import BookADemoCall from "./Components/BookADemoCall";

function App() {
  // const [openLogin, setOpenLogin] = useState(false);
  // const initialUrlRef = useRef(window.location.href);
  const id=sessionStorage.getItem("email");

  // useEffect(() => {
  //   window.history.forward();
  //   const handlePreventBack = (event) => {
  //     event.preventDefault();
  //     window.history.forward();
  //   };
  //   window.addEventListener("popstate", handlePreventBack);
  //   return () => {
  //     window.removeEventListener("popstate", handlePreventBack);
  //   };
  // }, []);
  
  

  return (
    <div className="App">
      <Header />
      <Calendly/>
      <HeroSection />
      {/* <AuthenticationForm/> */}
      <InfoCards />
      <About />
      <ServiceSection />
      <ProductSection />
      {/* <Features /> */}
      <OurServices />
      <BookADemoCall/>
      <Blogs />
      <CTA />
      <Footer />
      {/* <Enquiry></Enquiry> */}
    </div>
  );
}

export default App;
