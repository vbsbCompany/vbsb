import React from "react";
import { FaWhatsapp } from "react-icons/fa";
function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/7898998188"
      className="w-12 h-12 bg-green-600 text-white fixed bottom-10 right-10 rounded-full flex items-center justify-center"
    >
      <FaWhatsapp />
    </a>
  );
}

export default WhatsAppFab;
