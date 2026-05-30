import { Copy } from "lucide-react";

export default function ContactBanner() {
  const copyEmail = () => {
    navigator.clipboard.writeText(
      "Olastephanie2003@gmail.com"
    );
  };

  return (
    <section
      id="contact"
      className="section-container"
    >
      <div className="contact-strip">

        <h2>
          INTERESTED ? CONTACT ME !
        </h2>

        <div className="contact-email">
          <span>Olastephanie2003@gmail.com</span>

          <button
            onClick={copyEmail}
            className="copy-button"
            type="button"
            aria-label="Copy email address"
          >
            <Copy size={15} />
          </button>
        </div>
      </div>
    </section>
  );
}
