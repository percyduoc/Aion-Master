import React from "react";
import Aion from "../assets/img/Logo_aion.png";
import WhatsappIcon from "../assets/svg/whatsapp-logo.svg";

import Cisco from "../assets/brands/Cisco.png";
import TpLink from "../assets/brands/TPLINK.png";
import Hikvision from "../assets/brands/Hikvision.png";
import Ubiquiti from "../assets/brands/Ubiquiti_Logo.png";
import Dahua from "../assets/brands/Dahua.png";

const Footer = () => {
return ( <footer className="bg-[#242f45] text-white">


  {/* INFO */}
  <div className="max-w-7xl mx-auto px-6 py-20">

    <div className="grid md:grid-cols-3 gap-12">

      {/* EMPRESA */}
      <div>
        <img
          src={Aion}
          alt="AION"
          className="h-14 mb-6"
        />

        <p className="text-slate-400 leading-relaxed">
          Empresa tecnológica especializada en
          ciberseguridad, videovigilancia inteligente,
          conectividad empresarial y soporte TI.
        </p>
      </div>

      {/* CONTACTO */}
      <div>
        <h4 className="text-xl font-bold mb-6">
          Contacto
        </h4>

        <div className="space-y-3 text-slate-400">
          <p>📍 Viña del Mar, Chile</p>
          <p>✉️ contacto@aiontech.cl</p>
          <p>📞 +56 9 4715 3763</p>
        </div>

        <a
          href="https://wa.me/56947153763"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-6 bg-green-600 px-4 py-3 rounded-xl hover:bg-green-500 transition"
        >
          <img
            src={WhatsappIcon}
            className="w-5 h-5"
          />
          WhatsApp
        </a>
      </div>

      {/* SERVICIOS */}
      <div>
        <h4 className="text-xl font-bold mb-6">
          Servicios
        </h4>

        <ul className="space-y-3 text-slate-400">
          <li> Ciberseguridad</li>
          <li> Análisis Forense Digital</li>
          <li> Eliminación de Malware</li>
          <li> Videovigilancia Inteligente</li>
          <li> Redes Empresariales</li>
        </ul>
      </div>
    </div>

    {/* ESTADISTICAS */}
    {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 py-10 border-t border-slate-800 border-b">

      <div className="text-center">
        <h3 className="text-cyan-400 text-4xl font-black">
          +50
        </h3>
        <p className="text-slate-400">
          Proyectos
        </p>
      </div>

      <div className="text-center">
        <h3 className="text-cyan-400 text-4xl font-black">
          24/7
        </h3>
        <p className="text-slate-400">
          Monitoreo
        </p>
      </div>

      <div className="text-center">
        <h3 className="text-cyan-400 text-4xl font-black">
          100%
        </h3>
        <p className="text-slate-400">
          Confidencialidad
        </p>
      </div>

      <div className="text-center">
        <h3 className="text-cyan-400 text-4xl font-black">
          TI
        </h3>
        <p className="text-slate-400">
          Especializado
        </p>
      </div>

    </div> */}

    {/* MARCAS */}
    <div className="py-14">

      <h4 className="text-center font-semibold tracking-widest text-slate-400 mb-10">
        TECNOLOGÍAS Y MARCAS
      </h4>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-80">

        <img src={Cisco} alt="Cisco" className="mx-auto h-10" />
        <img src={TpLink} alt="TPLink" className="mx-auto h-10" />
        <img src={Hikvision} alt="Hikvision" className="mx-auto h-10" />
        <img src={Dahua} alt="Dahua" className="mx-auto h-10" />
        <img src={Ubiquiti} alt="Ubiquiti" className="mx-auto h-10" />

      </div>
    </div>

  </div>

  {/* MENSAJE */}
  <div className="bg-[#131C2E] py-8">
    <p className="max-w-4xl mx-auto px-6 text-center text-slate-300">
      En AION priorizamos la solución correcta por
      sobre la venta rápida.
      <br />

      <span className="text-cyan-400 font-semibold">
        Diseñamos estrategias tecnológicas pensadas
        para el crecimiento y protección de nuestros clientes.
      </span>
    </p>
  </div>

  {/* COPYRIGHT */}
  <div className="border-t border-slate-800 py-5 text-center text-slate-500 text-sm">
    © 2026 AION TECH · Ciberseguridad · Conectividad · Videovigilancia
  </div>

</footer>


);
};

export default Footer;
