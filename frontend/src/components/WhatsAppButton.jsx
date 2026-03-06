import { MessageCircle } from "lucide-react";

export const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919281410305?text=Hi%2C%20I%27m%20interested%20in%20your%20web%20design%20services"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Contact on WhatsApp"
      data-testid="whatsapp-btn"
    >
      <MessageCircle className="w-7 h-7" fill="white" />
    </a>
  );
};
