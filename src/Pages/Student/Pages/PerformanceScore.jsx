import React, { useState, useEffect } from "react";
import "../Styles/PerformanceScore.css";
import { TrendingUp } from "lucide-react";

const SCORE_CATEGORIES = [
  { name: "Punctuality", score: 85 },
  { name: "Technical Skills", score: 92 },
  { name: "Communication", score: 78 },
  { name: "Teamwork", score: 88 },
  { name: "Initiative", score: 80 },
  { name: "Professionalism", score: 90 },
];

export default function PerformanceScore() {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    // Trigger transition animation after mounting
    const timer = setTimeout(() => setAnimated(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="performanceScorePage">
      {/* Header section */}
      <div className="scoreHeader">
        <h2>Performance Score</h2>
        <p className="scoreSubtitle">Your evaluation scores from supervisors</p>
      </div>

      {/* Content grid */}
      <div className="scoreCardsGrid">
        {/* Left Card: Overall Score */}
        <div className="scoreCard overallScoreCard">
          <div className="radialProgressContainer">
            {/* Background ring */}
            <div className="radialBgRing"></div>
            {/* Active filled arc */}
            <div
              className="radialActiveRing"
              style={{
                opacity: animated ? 1 : 0,
                transition: "opacity 0.6s ease-in-out",
              }}
            ></div>
            {/* Numerical Score value */}
            <span className="radialValueText">86%</span>
          </div>
          <div className="overallScoreLabel">Overall Score</div>
          <div className="overallScoreSubtext">Average across all categories</div>
        </div>

        {/* Right Card: Score Breakdown list */}
        <div className="scoreCard breakdownCard">
          <div className="breakdownTitleRow">
            <TrendingUp size={18} className="breakdownIcon" />
            <h3>Score Breakdown</h3>
          </div>

          <div className="categoriesList">
            {SCORE_CATEGORIES.map((cat) => (
              <div key={cat.name} className="categoryRow">
                <span className="categoryName">{cat.name}</span>
                <div className="progressBarContainer">
                  <div
                    className="progressBarFill"
                    style={{
                      width: animated ? `${cat.score}%` : "0%",
                    }}
                  ></div>
                </div>
                <span className="categoryPercentage">{cat.score}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
