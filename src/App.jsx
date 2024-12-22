import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import Solutions from "./pages/solutions/Solutions";
import SolutionDetail from "./pages/solutionDetail/SolutionDetail";
import Terms from "./pages/terms/Terms";
import ScrollToTop from "./components/ScrollToTop";
import ContactUs from "./pages/contactUs/ContactUs";
import Privacy from "./pages/privacy/Privacy";
import EsgPolicy from "./pages/esgpolicy/EsgPolicy";
import AboutUs from "./pages/aboutUs/AboutUs";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/solutions/:type" element={<SolutionDetail />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/esgpolicy" element={<EsgPolicy />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </>
  );
};
export default App;
