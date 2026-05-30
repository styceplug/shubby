import { Mail, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>

      <div className="section-container">
        <div className="footer-grid">

          <div>
            <h3>Olasubomi Stephanie</h3>

            <p>
              A creative and result-oriented Social Media Manager passionate
              about building engaging online communities and growing brand
              visibility. I combine creativity with analytics to develop
              strategies that connect brands with their audience and drive
              measurable results.
            </p>
          </div>

          <div>
            <h4>SITEMAP</h4>

            <ul>
              <li><a href="#work">Work</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#tools">Tools</a></li>
              <li><a href="#offers">Offers</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4>CONTACT ME</h4>

            <div className="contact-list">
              <a className="contact-line" href="tel:+2348118060797">
                <Phone size={13} />
                +234 811 806 0797
              </a>
              <a className="contact-line" href="mailto:Olastephanie2003@gmail.com">
                <Mail size={13} />
                Olastephanie2003@gmail.com
              </a>
            </div>
          </div>

        </div>
      </div>

      <div className="section-container">
        <div className="footer-bottom">
          <div>Olasubomi Stephanie</div>
          <div>©{currentYear}</div>
          <div>Made by Dream Software Studio</div>
          <div>Privacy Policy</div>
        </div>
      </div>

    </footer>
  );
}
