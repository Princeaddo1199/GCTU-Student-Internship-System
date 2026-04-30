import React from "react";
import "../STYLES/IndustryReports.css"
import { useState } from "react";

export default function IndustryReports() {
  const [activeView, setActiveView] = useState("industryFeedback");
  return (
    <>
      <div className="industryReportsTitle">
        <h2 className="industryReportsTitleMain">
          Industry Supervisor Reports
        </h2>
        <p className="industryReportsTitleSub">
          View industry evaluations and collaboration records.
        </p>
      </div>
      <div className="industryReportsTabs">
        <button
          type="button"
          className={`industryReportsTabButton ${activeView === "industryFeedback" ? "active" : ""}`}
          onClick={() => setActiveView("industryFeedback")}
        >
          Industry Feedback
        </button>
        <button
          type="button"
          className={`performanceEvaluationTabButton ${activeView === "collaborationNotes" ? "active" : ""}`}
          onClick={() => setActiveView("collaborationNotes")}
        >
          Collaboration Notes
        </button>
      </div>

      {activeView === "industryFeedback" ? (
        <div className="evaluationPageMain">
          <p>Industry Feedback</p>
        </div>
      ) : (
        <div className="scoreboardPageMain">
          <p>Collaboration Notes</p>
        </div>
      )}
    </>
  );
}
