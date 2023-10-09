import {React,useState} from 'react'
import App from "./App";
import BlogPage from "./Components/BlogPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductCategories from './ProductCategories';
import AboutUsPage from "./Components/AboutUsPage";
import ExpandBlog1 from "./Components/ExpandBlog1";
import ExpandBlog2 from "./Components/ExpandBlog2";
import ExpandBlog3 from "./Components/ExpandBlog3";
import Enquiry from "./Components/Enquiry";
import AuthenticationForm from './Components/AuthenticationForm';
import OTPLogin from "./Components/OTPLogin";
import LoginReg from "./Components/loginReg";
import RegisterDistributor from './RegisterDistributor';
import RegisterManufacturer from './RegisterManufacturer';
import Register from "./Components/Register";
import TermsAndCond from "./Components/TermsAndCond";
import ListYourProducts from './Components/ListYourProducts';
import ExpandProduct from './Components/ExpandProduct';

function Routing() {
  const [conditionAccepted, setConditionAccepted] = useState(false);

  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/:id" element={<App />} />
        <Route path="/BlogPage" element={<BlogPage />} />
        <Route path="/ProductCategories" element={<ProductCategories />} />
        <Route path="/AboutUsPage" element={<AboutUsPage />} />
        <Route path="/newBlog1" element={<ExpandBlog1 />} />
        <Route path="/newBlog2" element={<ExpandBlog2 />} />
        <Route path="/newBlog3" element={<ExpandBlog3 />} />
        <Route path="/enquiry" element={<Enquiry />} />
        <Route path="/login" element={<OTPLogin />} />
        {/* <Route path="/loginReg" element={<LoginReg />} /> */}
        <Route path="/register" element={<Register />} />
        <Route path="/expandProducts" element={<ExpandProduct />} />
        <Route
          path="/registerDistributor"
          element={
            <RegisterDistributor conditionAccepted={conditionAccepted} />
          }
        />
        <Route
          path="/registerManufacturer"
          element={
            <RegisterManufacturer conditionAccepted={conditionAccepted} />
          }
        />
        <Route path="/terms&cond" element={<TermsAndCond />} />
        <Route path="/ListYourProducts" element={<ListYourProducts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routing