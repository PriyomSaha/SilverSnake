import "react-phone-input-2/lib/style.css";
import "./App.css";
import ContactUsShort from "./Components/ContactUsShort";
import ContactUs from "./Components/ContactUs";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";

import "bootstrap/dist/css/bootstrap.min.css";
import Services from "./Components/Services";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./Components/AboutUs";
import ContactUsForm from "./Components/ContactUsForm";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <ContactUsShort />
      <Footer />
      <ContactUsForm />
    </div>
  );
}

export default App;
