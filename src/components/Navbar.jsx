import { useState } from "react";
import { Menu } from "lucide-react";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="section-container site-nav">

        <div className="brand-pill">
OLASUBOMI STEPHANIE
        </div>

        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#skills">Skills</a>
          <a href="#tools">Tools</a>
          <a href="#offers">Offers</a>
          <a href="#contact">Contact</a>
        </div>

        <button
          className="nav-menu-button"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={18} />
        </button>

      </nav>

      <MobileMenu
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}
