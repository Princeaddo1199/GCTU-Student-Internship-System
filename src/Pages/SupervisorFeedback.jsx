import React, { useState } from "react";
import "../STYLES/SupervisorFeedback.css";
import { MessageSquare } from "lucide-react";
import Students from "../Data/studentTable.json";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import FeedbackCard from "../Components/FeedbackCard";

let globalFeedbacks = [];

export default function SupervisorFeedback() {
  const [activeView, setActiveView] = useState("provideFeedback");
  const [selectedId, setSelectedId] = useState("");
  const [feedbackId, setFeedbackId] = useState("");
  const [rating, setRating] = useState(0);
  const [comments, setComments] = useState("");
  const [feedbacks, setFeedbacks] = useState(globalFeedbacks);

  const submitFeedback = () => {
    if (!selectedId || !feedbackId || !rating || !comments) {
      alert("Please fill all fields before submitting.");
      return;
    }

    const student = Students.find((s) => s.id === parseInt(selectedId));
    
    const newFeedback = {
      id: Date.now(),
      studentName: student ? student.student : "Unknown Student",
      type: feedbackId,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      comment: comments,
      rating: rating
    };

    const newFeedbacks = [newFeedback, ...feedbacks];
    setFeedbacks(newFeedbacks);
    globalFeedbacks = newFeedbacks;
    
    // Reset form
    setSelectedId("");
    setFeedbackId("");
    setRating(0);
    setComments("");
    
    // Switch view to previous feedback
    setActiveView("previousFeedback");
  };

  return (
    <>
      <div className="supervisorFeedbackTitle">
        <h2 className="supervisorFeedbackTitleMain">Performance Evaluation</h2>
        <p className="supervisorFeedbackTitleSub">
          Evaluate student performanve and view scorecards
        </p>
      </div>
      <div className="supervisorFeedbackTabs">
        <button
          type="button"
          className={`supervisorFeedbackTabButton ${activeView === "provideFeedback" ? "active" : ""}`}
          onClick={() => setActiveView("provideFeedback")}
        >
          Provide Feedback
        </button>
        <button
          type="button"
          className={`supervisorFeedbackTabButton ${activeView === "previousFeedback" ? "active" : ""}`}
          onClick={() => setActiveView("previousFeedback")}
        >
          Previous Feedback
        </button>
      </div>

      {activeView === "provideFeedback" ? (
        <div className="provideFeedbackPageMain">
          <div className="subTitle">
            <MessageSquare size={16} />
            <p style={{ fontWeight: "bold", fontSize: "16px" }}>New Feedback</p>
          </div>
          <div className="selectStudent">
            <select
              className="selectContainer"
              value={selectedId}
              onChange={(e) => setSelectedId(e.target.value)}
            >
              <option value="">Select Student</option>
              {Students.map((student) => (
                <option key={student.id} value={student.id}>
                  {student.student}
                </option>
              ))}
            </select>
          </div>
          <div className="feedbackSelect">
            <select
              className="selectContainer"
              value={feedbackId}
              onChange={(e) => setFeedbackId(e.target.value)}
            >
              <option value="">Feedback type</option>
              <option value="Mid-Term">Mid-Term</option>
              <option value="Weekly">Weekly</option>
              <option value="Concern">Concern</option>
              <option value="Final">Final</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="rating">
            <p>Rating</p>
            <div className="rating">
              <div style={{ display: "flex", gap: "5px" }}>
                {[...Array(5)].map((_, index) => {
                  const starNumber = index + 1;

                  if (rating >= starNumber) {
                    return (
                      <FaStar
                        key={index}
                        color={"gold"}
                        style={{ cursor: "pointer" }}
                        onClick={() => setRating(starNumber)}
                      />
                    );
                  } else if (rating >= starNumber - 0.5) {
                    return (
                      <FaStarHalfAlt
                        key={index}
                        color={"gold"}
                        style={{ cursor: "pointer" }}
                        onClick={() => setRating(starNumber)}
                      />
                    );
                  } else {
                    return (
                      <FaRegStar
                        key={index}
                        color={"grey"}
                        style={{ cursor: "pointer" }}
                        onClick={() => setRating(starNumber)}
                      />
                    );
                  }
                })}
              </div>
            </div>
          </div>
          <div className="feedbackDetails">
            <textarea
              className="additionalComments"
              placeholder="Additional comments..."
              rows="4"
              value={comments}
              onChange={(e) => setComments(e.target.value)}
            />
            <button
              className="submitEvaluationBtn"
              type="button"
              onClick={submitFeedback}
            >
              Submit Feedback
            </button>
          </div>
        </div>
      ) : (
        <div className="previousFeedbackPageMain">
          {feedbacks.map((fb) => (
            <FeedbackCard 
              key={fb.id}
              studentName={fb.studentName}
              type={fb.type}
              date={fb.date}
              comment={fb.comment}
              rating={fb.rating}
            />
          ))}
        </div>
      )}
    </>
  );
}
