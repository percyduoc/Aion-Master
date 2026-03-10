import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Inicio from './pages/Inicio';
import Nosotros from './pages/Nosotros';
import Contacto from './pages/Contacto';
import ScrollToTop from "./components/ScrollToTop";
import WhatsappButton from "./components/WhatsappButton";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className=" bg-white font-work-sans ">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>
        <Footer />
        <WhatsappButton />
      </div>
    </Router>
  );
}

export default App;