import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import Solutions from "./pages/solutions/Solutions";
import SolutionDetail from "./pages/solutionDetail/SolutionDetail";
import Terms from "./pages/terms/Terms";
import ScrollToTop from "./components/ScrollToTop";
import ContactUs from "./pages/contactUs/ContactUs";
import EsgPolicy from "./pages/esgpolicy/EsgPolicy";
import AboutUs from "./pages/aboutUs/AboutUs";
import Privacy1 from "./pages/privacy1/Privacy1";
import Support from "./pages/support/Support";
import { Resources } from "./pages/resources/Resources";
import { Allproducts } from "./pages/allproducts/Allproducts";
import Product from "./pages/product/Product";
import Navigation from "./components/Navigation";
import { Projects } from "./pages/projects/Projects";
import { ValueAddedServices } from "./pages/valueAddedServices/ValueAddedServices";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/navigation" element={<Navigation />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/allproducts" element={<Allproducts />} />
        <Route path="/product" element={<Product />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/solutions/:type" element={<SolutionDetail />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy1 />} />
        <Route path="/esgpolicy" element={<EsgPolicy />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/support" element={<Support />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/valueAddedServices" element={<ValueAddedServices />} />

        
      </Routes>
    </>
  );
};
export default App;
