import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import AventIQ from './pages/AventIQ';
import CargoClave from './pages/CargoClave';
import ZenHirePro from './pages/ZenHirePro';
import BharatXcelerate from './pages/BharatXcelerate';
import Applications from './pages/Applications';
import About from './pages/About';
import Contact from './pages/Contact';

import CustomCursor from './components/CustomCursor';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <CustomCursor />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aventiq" element={<AventIQ />} />
          <Route path="/cargoclave" element={<CargoClave />} />
          <Route path="/zenhirepro" element={<ZenHirePro />} />
          <Route path="/bharatxcelerate" element={<BharatXcelerate />} />
          <Route path="/applications" element={<Applications />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
