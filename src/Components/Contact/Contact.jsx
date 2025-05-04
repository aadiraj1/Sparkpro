import React from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import "./Contact.css";

const ContactIcons = () => {
  const phoneNumber = "923105555027";
  const whatsappLink = `https://wa.me/${phoneNumber}`;

  // Shared style for both icon wrappers
  const iconWrapperStyle = {
    background: "linear-gradient(135deg, #28a745, #218838)",
    padding: "10px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
    cursor: "pointer",
    transition: "all 0.3s",
  };

  const iconStyle = {
    color: "#fff", // White icon on green gradient
    fontSize: "30px",
  };

  return (
    <div className="contact-icons">
      {/* WhatsApp Icon */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        style={iconWrapperStyle}
      >
        <FaWhatsapp style={iconStyle} />
      </a>

      {/* Phone Icon */}
      <a
        href={`tel:${phoneNumber}`}
        aria-label="Call Us"
        style={iconWrapperStyle}
      >
        <FaPhoneAlt style={iconStyle} />
      </a>
    </div>
  );
};

export default ContactIcons;
