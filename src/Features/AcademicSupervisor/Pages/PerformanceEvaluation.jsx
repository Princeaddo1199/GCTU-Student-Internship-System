import React from 'react'
import { useState } from 'react';
import "../STYLES/PerformanceEvaluation.css"
import Rating from '../Components/Rating';
import ScoreCard from '../Components/ScoreCard';
import { CalendarCheck } from 'lucide-react';
import Students from "../Data/studentTable.json"

export default function PerformanceEvaluation() {
  const [activeView, setActiveView] = useState("evaluation");
  const [selectedId, setSelectedId] = useState("");
  const [ratings, setRatings] = useState({
    "Technical Skills": 0,
    "Communication": 0,
    "Professionalism": 0,
    "Problem Solving": 0,
    "Teamwork": 0
  });
  const [comments, setComments] = useState("");

  const handleRatingChange = (skill, newRating) => {
    setRatings(prev => ({ ...prev, [skill]: newRating }));
  };

  const handleSubmit = () => {
    alert("Evaluation submission logic goes here");
  };
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
                <option value="select">Select Student</option>
                {Students.map((student) => (
                  <option key={student.id} value={student}>
                    {student.student}
                  </option>
                ))}
              </select>
              <div className="ratingContainer">
                <Rating skills="Technical Skills" rating={ratings["Technical Skills"]} onChange={(val) => handleRatingChange("Technical Skills", val)} />
                <Rating skills="Communication" rating={ratings["Communication"]} onChange={(val) => handleRatingChange("Communication", val)} />
                <Rating skills="Professionalism" rating={ratings["Professionalism"]} onChange={(val) => handleRatingChange("Professionalism", val)} />
                <Rating skills="Problem Solving" rating={ratings["Problem Solving"]} onChange={(val) => handleRatingChange("Problem Solving", val)} />
                <Rating skills="Teamwork" rating={ratings["Teamwork"]} onChange={(val) => handleRatingChange("Teamwork", val)} />
                <textarea 
                  className="additionalComments" 
                  placeholder="Additional comments..." 
                  rows="4"
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                />
              </div>
              <button className='submitEvaluationBtn' type='button' onClick={handleSubmit}>Submit Evaluation</button>
        </div>
      </div>
    ) : (
      <div className="scoreboardPageMain">
        {Students.map(student => (
            <ScoreCard key={student.id} student={student} />
        ))}
      </div>
    )}
    </>
  )
}
