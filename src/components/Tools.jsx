import SectionTitle from "./common/SectionTitle";
import FadeIn from "./common/FadeIn";
import { tools } from "../data/tools";

export default function Tools() {
  return (
    <section id="tools" className="section-container tools-section">
      <SectionTitle
        title="TOOLS I WORK WITH"
        subtitle="The platforms I use to plan, create, schedule, and optimize content."
      />

      <div className="tools-grid">
        {tools.map((tool, index) => (
          <FadeIn key={tool.name} delay={index * 0.04}>
            <article className="tool-card">
              <div className="tool-logo" aria-label={`${tool.name} logo`}>
                <img src={tool.icon} alt="" />
              </div>
              <h3>{tool.name}</h3>
              <p>{tool.summary}</p>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
