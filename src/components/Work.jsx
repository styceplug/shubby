import { useState } from "react";
import SectionTitle from "./common/SectionTitle";
import PortfolioCard from "./PortfolioCard";
import { portfolioData } from "../data/portfolio";

export default function Work() {
  const [activeTab, setActiveTab] = useState("All");
  const tabs = ["All", ...portfolioData.map((item) => item.tab)];
  const visiblePortfolio =
    activeTab === "All"
      ? portfolioData
      : portfolioData.filter((item) => item.tab === activeTab);

  return (
    <section
      id="work"
      className="work-section"
    >
      <div className="section-container">

        <SectionTitle
          title="MY WORK"
          subtitle="A selection of social media projects, content systems, and brand pages."
        />

        <div className="filters" aria-label="Portfolio filters">
          {tabs.map((filter) => (
            <button
              className={`filter-button${activeTab === filter ? " is-active" : ""}`}
              key={filter}
              type="button"
              onClick={() => setActiveTab(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className={`experience-grid${visiblePortfolio.length === 1 ? " is-single" : ""}`}>
          {visiblePortfolio.map((item) => (
            <PortfolioCard
              key={item.id}
              item={item}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
