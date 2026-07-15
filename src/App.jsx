import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Services from "./components/Services";
import ServicePage from "./components/ServicePage";
import MembershipsPage from "./components/MembershipsPage";
import PatientResults from "./components/PatientResults";
import About from "./components/About";
import ComingSoon from "./components/ComingSoon";
import FaqPage from "./components/FaqPage";
import BlogPage from "./components/BlogPage";
import Contact from "./components/Contact";
import LegalPage from "./components/LegalPage";
import { Toaster } from "./components/ui/toaster";
import DesignStudio from "./components/DesignStudio";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServicePage />} />
          <Route path="/memberships" element={<MembershipsPage />} />
          <Route path="/patient-results" element={<PatientResults />} />
          <Route path="/about" element={<About />} />
          <Route path="/our-team" element={<Navigate to="/about" replace />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<LegalPage slug="privacy" />} />
          <Route path="/hipaa" element={<LegalPage slug="hipaa" />} />
          <Route path="/terms" element={<LegalPage slug="terms" />} />
          <Route path="/disclaimer" element={<LegalPage slug="disclaimer" />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
      <Toaster />
      <DesignStudio />
    </BrowserRouter>
  );
}

export default App;