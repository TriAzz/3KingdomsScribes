import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './Home';
import WeiFasticleList from './WeiFasticleList';
import ShuFasticleList from './ShuFasticleList';
import WuFasticleList from './WuFasticleList';
import WeiFasticleDetail from './WeiFasticleDetail';
import ShuFasticleDetail from './ShuFasticleDetail';
import WuFasticleDetail from './WuFasticleDetail';
import ThreeKingdomsChatbot from './ThreeKingdomsChatbot';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wei" element={<WeiFasticleList />} />
          <Route path="/wei/:id" element={<WeiFasticleDetail />} />
          <Route path="/shu" element={<ShuFasticleList />} />
          <Route path="/shu/:id" element={<ShuFasticleDetail />} />
          <Route path="/wu" element={<WuFasticleList />} />
          <Route path="/wu/:id" element={<WuFasticleDetail />} />
          <Route path="/chatbot" element={<ThreeKingdomsChatbot />} />
        </Routes>
      </App>
    </BrowserRouter>
  </React.StrictMode>
);
