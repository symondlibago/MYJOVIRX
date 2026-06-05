import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import Layout from '../components/Layout';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import About from '../components/About';
import { Toaster } from '../components/ui/toaster';


const Navigate = () => {
  return (
    <div className="min-h-screen">

<Layout>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
      <Toaster />
    </div>
  );
};

export default Navigate;