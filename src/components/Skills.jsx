import { useState } from "react";
import { skills } from "../data/skills";
import { Plus, Minus } from "lucide-react";
import CTAButton from "./common/CTAButton";
import FadeIn from "./common/FadeIn";
import flowerSkills from "../assets/flowers/flower-skills.png";

export default function Skills() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="skills"
      className="section-container skills-grid"
    >
      <div className="skills-intro">
        <h2 className="section-heading">
          MY SKILLS
        </h2>

        <p className="section-copy">
          Explore my skills in content creation, page branding, social media
          strategy, community engagement, and performance tracking.
        </p>

        <CTAButton />

        <img className="skills-flower" src={flowerSkills} alt="" />
      </div>

      <div className="accordion">
        {skills.map((skill, index) => (
          <FadeIn key={skill.title} delay={index * 0.025}>
            <button
              className={`skill-panel${active === index ? " is-active" : ""}`}
              onClick={() => setActive(index)}
              type="button"
              aria-expanded={active === index}
            >
              <div className="skill-panel-head">
                <h3>
                  {skill.title}
                </h3>

                {active === index ? (
                  <Minus />
                ) : (
                  <Plus />
                )}
              </div>

              {active === index && (
                <p>
                  {skill.content}
                </p>
              )}
            </button>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
