import CTAButton from "./common/CTAButton";

export default function Hero() {
  return (
    <section className="hero">
      <img
        src="/images/hero-flower-left.png"
        className="hero-flower hero-flower-left"
        alt=""
      />

      <img
        src="/images/hero-flower-right.png"
        className="hero-flower hero-flower-right"
        alt=""
      />

      <div className="section-container hero-inner">
        <p className="section-kicker">
          FREELANCE
        </p>

        <h1 className="hero-title">
          SOCIAL
          <span>
            MEDIA
          </span>
          <br />
          MANAGER
        </h1>

        <p className="hero-copy">
          Unlocking the Power of Social Media : Elevate Your Online Presence
          with a Creative Social Media Manager
        </p>

        <CTAButton />
      </div>
    </section>
  );
}
