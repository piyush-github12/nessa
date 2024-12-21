import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import Solutions from "./pages/solutions/Solutions";
import SolutionDetail from "./pages/solutionDetail/SolutionDetail";
import Terms from "./pages/privacy/Terms";
import ScrollToTop from "./components/ScrollToTop";
import ContactUs from "./pages/contactUs/ContactUs";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/solutions/:type" element={<SolutionDetail />} />
      </Routes>
    </>
  );
};
export default App;
