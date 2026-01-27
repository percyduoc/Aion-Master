import React from 'react';
import { Link } from 'react-router-dom';
import Aion from '../assets/img/Logo_aion.png';
import WhatsappIcon from '../assets/svg/whatsapp-logo.svg';

// Logos marcas (ejemplo)
import Cisco from '../assets/brands/Cisco.png';
import TpLink from '../assets/brands/TPLINK.png';
import Hikvision from '../assets/brands/Hikvision.png';
import Ubiquiti from '../assets/brands/Ubiquiti_Logo.png';

import Dahua from '../assets/brands/Dahua.png';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700">

      {/* INFO PRINCIPAL */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Logo + descripción */}
        <div className="space-y-4">
          <img src={Aion} alt="Aion Tech" className="h-14" />

          <p className="text-sm leading-relaxed text-gray-600">
            Especialistas en <strong>instalación de cámaras de seguridad</strong>, 
            control de accesos y <strong>soluciones de conectividad</strong>.
            Protegemos hogares y empresas con tecnología confiable.
          </p>
        </div>

        {/* Contacto */}
        <div className="space-y-3 text-sm">
          <h4 className="font-semibold text-gray-900">Contacto</h4>
          <p>📍 Viña del Mar, Chile</p>
          <p>✉️ contacto@aiontech.cl</p>
          <p>📞 +56 9 5090 9031</p>

          <a
            href="https://wa.me/56950909031"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-green-600 font-semibold mt-2"
          >
            <img src={WhatsappIcon} className="w-5 h-5" />
            WhatsApp
          </a>
        </div>

        {/* Servicios */}
        <div className="space-y-3 text-sm">
          <h4 className="font-semibold text-gray-900">Servicios</h4>
          <ul className="space-y-1 text-gray-600">
            <li>• Cámaras CCTV / IP / IA</li>
            <li>• Monitoreo y grabación</li>
            <li>• Redes cableadas y WiFi</li>
            <li>• VPN y acceso remoto</li>
            <li>• Soporte técnico</li>
          </ul>
        </div>
      </div>
    
      {/* MARCAS */}
      <div className="border-t border-gray-200 py-10">
        <p className="text-center text-sm font-semibold tracking-wide mb-8">
          TRABAJAMOS CON LAS MEJORES MARCAS DEL MERCADO
        </p>

        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center px-6 opacity-80">
          <img src={Cisco} alt="Cisco" className="mx-auto h-10  transition" />
         
          <img src={TpLink} alt="TP-Link" className="mx-auto h-10  transition" />
          <img src={Hikvision} alt="Hikvision" className="mx-auto h-10  transition" />
          <img src={Dahua} alt="Dahua" className="mx-auto h-10  transition" />
          {/* ubiqui */}
          <img src={Ubiquiti} alt="Ubiquiti" className="mx-auto h-10  transition" />
        </div>
      </div>
   
      <div className="bg-gray-50 border-t border-gray-200 py-8">
        <p className="max-w-4xl mx-auto px-6 text-center text-base text-gray-700">
          En Aion priorizamos decisiones correctas por sobre ventas rápidas.
          <br />
          <span className="font-semibold text-gray-800">
            Esta es la solución que necesitas, incluso si decides no hacerla con nosotros.
          </span>
        </p>
      </div>


      {/* COPYRIGHT */}
      <div className="bg-gray-100 py-4 text-center text-sm text-gray-500">
        © 2025 Aion  · Seguridad y Conectividad
      </div>

    </footer>
  );
};

export default Footer;
