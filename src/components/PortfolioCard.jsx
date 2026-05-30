import { BriefcaseBusiness, CalendarDays } from "lucide-react";
import { motion } from "framer-motion";

export default function PortfolioCard({ item }) {
  return (
    <motion.article
      className="experience-card"
      initial={{ opacity: 0, y: 28, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ type: "spring", stiffness: 120, damping: 18 }}
    >
      {item.image && (
        <div className="phone-frame" aria-label={`${item.company} page screenshot`}>
          <div className="phone-speaker" />
          <img src={item.image} alt={`${item.company} social media page`} />
        </div>
      )}

      <div className="experience-content">
        <div className="experience-card-top">
          <span className="icon-tile">
            <BriefcaseBusiness size={18} strokeWidth={1.7} />
          </span>

          <span className="experience-date">
            <CalendarDays size={13} />
            {item.dates}
          </span>
        </div>

        <p className="experience-role">{item.role}</p>
        <h3>{item.company}</h3>
        <p className="experience-summary">{item.summary}</p>

        <ul className="experience-list">
          {item.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>

        <div className="portfolio-tags">
          {item.tags.map((tag, index) => (
            <span key={tag} className={`chip${index === 0 ? " is-active" : ""}`}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
