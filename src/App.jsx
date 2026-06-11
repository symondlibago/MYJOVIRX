import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Treatments from "./components/Treatments";
import OurTeam from "./components/OurTeam";
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
          <Route path="/services" element={<Treatments />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/about" element={<Navigate to="/our-team" replace />} />
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