import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Booking from "./components/Booking";
import Contact from "./components/Contact";
import LegalPage from "./components/LegalPage";
import { Toaster } from "./components/ui/toaster";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<LegalPage slug="privacy" />} />
          <Route path="/hipaa" element={<LegalPage slug="hipaa" />} />
          <Route path="/terms" element={<LegalPage slug="terms" />} />
          <Route path="/telehealth-consent" element={<LegalPage slug="telehealth-consent" />} />
          <Route path="/disclaimer" element={<LegalPage slug="disclaimer" />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;