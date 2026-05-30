import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Skills from "./components/Skills";
import Tools from "./components/Tools";
import Offers from "./components/Offers";
import ContactBanner from "./components/ContactBanner";
import Footer from "./components/Footer";
import FadeIn from "./components/common/FadeIn";

export default function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <Hero />
      <FadeIn>
        <Work />
      </FadeIn>
      <div className="skills-offers">
        <FadeIn>
          <Skills />
        </FadeIn>
        <FadeIn>
          <Tools />
        </FadeIn>
        <FadeIn>
          <Offers />
        </FadeIn>
      </div>
      <div className="contact-footer">
        <FadeIn>
          <ContactBanner />
        </FadeIn>
        <Footer />
      </div>
    </div>
  );
}
