import React from "react";
import "../STYLES/IndustryReports.css"
import { useState } from "react";
import Students from "../Data/studentTable.json";
import SupervisorFeedbacks from "../Data/supervisorFeedback.json";
import IndustryFeedbackCard from "../Components/IndustryFeedbackCard";
import CollaborationNotesData from "../Data/collaborationNotes.json";
import CollaborationNoteCard from "../Components/CollaborationNoteCard";

let globalNotes = [...CollaborationNotesData];

export default function IndustryReports() {
  const [activeView, setActiveView] = useState("industryFeedback");
  const [notes, setNotes] = useState(globalNotes);
  const [newNoteText, setNewNoteText] = useState("");

  const saveNote = () => {
    if (!newNoteText.trim()) return;
    
    const newNote = {
      id: Date.now(),
      supervisorName: "Prof. Ama Boateng",
      company: "Academic Supervisor",
      title: "New Note",
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      comment: newNoteText
    };

    const updatedNotes = [...notes, newNote];
    setNotes(updatedNotes);
    globalNotes = updatedNotes;
    setNewNoteText("");
  };
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
          className={`industryReportsTabButton ${activeView === "collaborationNotes" ? "active" : ""}`}
          onClick={() => setActiveView("collaborationNotes")}
        >
          Collaboration Notes
        </button>
      </div>

      {activeView === "industryFeedback" ? (
        <div className="industryFeedbackPageMain">
          {SupervisorFeedbacks.map((feedback) => {
            const student = Students.find(s => s.id === feedback.studentId);
            if (!student) return null;
            return (
              <IndustryFeedbackCard
                key={feedback.id}
                studentName={student.student}
                company={student.company}
                supervisorName={feedback.supervisorName}
                date={feedback.date}
                comment={feedback.comment}
                rating={feedback.rating}
              />
            );
          })}
        </div>
      ) : (
        <div className="collaborationNotesPageMain">
          <div className="collaborationNotesList">
            {notes.map((note) => (
              <CollaborationNoteCard 
                key={note.id}
                supervisorName={note.supervisorName}
                company={note.company}
                title={note.title}
                date={note.date}
                comment={note.comment}
              />
            ))}
          </div>
          <div className="addNoteContainer">
            <h3 className="addNoteTitle">Add Collaboration Note</h3>
            <textarea 
              className="addNoteTextarea" 
              placeholder="Record your collaboration notes..." 
              value={newNoteText}
              onChange={(e) => setNewNoteText(e.target.value)}
            />
            <button className="saveNoteBtn" onClick={saveNote}>Save Note</button>
          </div>
        </div>
      )}
    </>
  );
}
