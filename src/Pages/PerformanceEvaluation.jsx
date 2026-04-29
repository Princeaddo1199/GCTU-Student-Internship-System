import React from 'react'
import { useState } from 'react';
import "../STYLES/PerformanceEvaluation.css"
import { CalendarCheck } from 'lucide-react';
import Students from "../Data/studentTable.json"

export default function PerformanceEvaluation() {
  const [activeView, setActiveView] = useState("evaluation");
  const [selectedId, setSelectedId] = useState("")
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
        <div className="containerHead">
          <CalendarCheck size={16}/>
          <p style={{marginLeft: "10px", fontSize: "16px", fontWeight: "bold"}}>New Evaluation</p>
        </div>
        <div className="selectStudentOption">
        <select
                className="selectContainer"
                value={selectedId}
                onChange={(e) => setSelectedId(e.target.value)}
              >
                <option value="TODAY">Today</option>
                {Students.map((student) => (
                  <option key={student.id} value={student}>
                    {student.student}
                  </option>
                ))}
              </select>
        </div>
      </div>
    ) : (
      <div className="scoreboardPageMain">
        hh
      </div>
    )}
    </>
  )
}
