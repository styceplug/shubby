import { Mail, MessageCircle, X } from "lucide-react";

export default function MobileMenu({ open, onClose }) {
  if (!open) return null;

  const whatsappUrl =
    "https://wa.me/2348118060797?text=Hello%20Olasubomi%20Stephanie%2C%20I%27d%20like%20to%20work%20with%20you.";

  return (
    <div className="mobile-menu-shell" role="dialog" aria-modal="true">
      <div className="mobile-backdrop" onClick={onClose} />

      <aside className="mobile-panel">
        <div className="mobile-panel-header">
          <div className="brand-pill">Olasubomi Stephanie</div>
          <button onClick={onClose} aria-label="Close menu" className="mobile-close-button" type="button">
            <X size={17} />
          </button>
        </div>

        <nav className="mobile-menu-links">
          <a href="#work" onClick={onClose}>Work</a>
          <a href="#skills" onClick={onClose}>Skills</a>
          <a href="#tools" onClick={onClose}>Tools</a>
          <a href="#offers" onClick={onClose}>Offers</a>
          <a href="#contact" onClick={onClose}>Contact</a>
        </nav>

        <div className="mobile-menu-contact">
          <a href={whatsappUrl} target="_blank" rel="noreferrer" onClick={onClose}>
            <MessageCircle size={16} />
            WhatsApp
          </a>
          <a href="mailto:Olastephanie2003@gmail.com" onClick={onClose}>
            <Mail size={16} />
            Email me
          </a>
        </div>
      </aside>
    </div>
  );
}
