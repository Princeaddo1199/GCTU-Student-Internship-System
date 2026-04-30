import React, { useState } from 'react'
import "../STYLES/PerformanceEvaluation.css"

export default function SupervisorFeedback() {
  const [activeView, setActiveView] = useState("evaluation");

  return (
    <>
        <div className="performanceEvaluationTitle">
            <h2 className="performanceEvaluationTitleMain">Performance Evaluation</h2>
            <p className="performanceEvaluationTitleSub">
              Evaluate student performanve and view scorecards
            </p>
          </div>
           <div className="performanceEvaluationTabs">
            <button
              type="button"
              className={`performanceEvaluationTabButton ${activeView === "evaluation" ? "active" : ""}`}
              onClick={() => setActiveView("evaluation")}
            >
              Evaluate Student
            </button>
            <button
              type="button"
              className={`performanceEvaluationTabButton ${activeView === "reports" ? "active" : ""}`}
              onClick={() => setActiveView("reports")}
            >
              Performance Scorecard
            </button>
          </div>
    
          {activeView === "evaluation" ? (
          <div className="evaluationPageMain">
            <div>hiii</div>
          </div>
        ) : (
          <div className="scoreboardPageMain">
        <div>heloo</div>
      </div>
        )}
        </>
  )
}
