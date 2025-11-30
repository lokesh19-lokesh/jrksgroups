import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import UniversalPowerSystems from './pages/UniversalPowerSystems';
import JrksTraders from './pages/JrksTraders';
import NrsFirstCapital from './pages/NrsFirstCapital';
import JrksIndustrialConsultantServices from './pages/JrksIndustrialConsultantServices';
import Career from './pages/Career';
import Contact from './pages/Contact';
import FraudAlert from './pages/FraudAlert';
import NewsMedia from './pages/NewsMedia';
import SuryaProjects from './pages/SuryaProjects';

import SriVedanthaEducationalTrust from './pages/SriVedanthaEducationalTrust';
import UniversalCancerScreening from './pages/UniversalCancerScreening';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="universal-power-systems" element={<UniversalPowerSystems />} />
          <Route path="jrks-traders" element={<JrksTraders />} />
          <Route path="nrs-first-capital" element={<NrsFirstCapital />} />
          <Route path="jrks-industrial-consultant-services" element={<JrksIndustrialConsultantServices />} />
          <Route path="career" element={<Career />} />
          <Route path="contact" element={<Contact />} />
          <Route path="fraud-alert" element={<FraudAlert />} />
          <Route path="news-media" element={<NewsMedia />} />
          <Route path="surya-projects" element={<SuryaProjects />} />

          <Route path="sri-vedantha-educational-trust" element={<SriVedanthaEducationalTrust />} />
          <Route path="universal-cancer-screening" element={<UniversalCancerScreening />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
