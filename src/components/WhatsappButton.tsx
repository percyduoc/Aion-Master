import React from "react";
import WhatsappIcon from '../assets/svg/whatsapp-logo.svg';

const WhatsappButton = () => {
  const phone = "56947153763"; // 
  const message = "Hola! Me gustaría consultar sobre sus servicios";

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition"
    >
       <img src={WhatsappIcon} className="w-8 h-8 " />
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path d="M13.601 2.326A7.854 7.854 0 008.021.017C3.602.017 0 3.617 0 8.04c0 1.414.369 2.796 1.069 4.017L0 16l4.084-1.07a7.96 7.96 0 003.937 1.01h.003c4.418 0 8.018-3.6 8.018-8.023a7.93 7.93 0 00-2.441-5.59zM8.024 14.5a6.43 6.43 0 01-3.29-.9l-.235-.14-2.423.636.647-2.36-.153-.243a6.42 6.42 0 01-.986-3.45c0-3.55 2.888-6.438 6.44-6.438 1.72 0 3.336.67 4.551 1.886a6.41 6.41 0 011.887 4.55c-.002 3.552-2.89 6.44-6.438 6.44z"/>
      </svg> */}
    </a>
  );
};

export default WhatsappButton;