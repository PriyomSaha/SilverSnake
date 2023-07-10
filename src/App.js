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
  let [show, setShow] = useState(false);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<AboutUs />} />
        <Route
          path="/contact"
          element={<ContactUs show={show} setShow={setShow} />}
        />
      </Routes>
      <ContactUsForm show={show} setShow={setShow} />
      <ContactUsShort />
      <Footer />
    </div>
  );
}

export default App;
