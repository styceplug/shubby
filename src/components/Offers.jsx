import { offers } from "../data/offers";
import CTAButton from "./common/CTAButton";
import FadeIn from "./common/FadeIn";

export default function Offers() {
  return (
    <section
      id="offers"
      className="section-container"
    >
      <div className="offers-box">

        <h2 className="section-heading text-center">
          MY OFFERS
        </h2>
        <p className="section-copy text-center mt-3">
          I propose my services with different offers
        </p>

        <div className="offers-grid">
          {offers.map((offer, index) => {
            const Icon = offer.icon;

            return (
              <FadeIn key={offer.title} delay={index * 0.05}>
                <div className="offer-card">
                  <span className="icon-tile">
                    <Icon size={18} strokeWidth={1.7} />
                  </span>

                  <h3>
                    {offer.title}
                  </h3>

                  <p>
                    {offer.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>

        <div className="offers-cta">
          <CTAButton />
        </div>
      </div>
    </section>
  );
}
