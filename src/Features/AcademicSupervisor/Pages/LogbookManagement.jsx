import React, { useState } from "react";
import "../STYLES/LogbookManagement.css";
import LogbookManagementCard from "../Components/LogbookManagementCard";
import ApproveLogbookCard from "../Components/ApproveLogbookCard";
import LogbookCommentCard from "../Components/LogbookCommentCard";
import logbookEntries from "../Data/logbookEntries.json"
import students from "../Data/studentTable.json"

export default function LogbookManagement() {
  const [activeView, setActiveView] = useState("entries"); // "entries" | "reviews" | "reports"
  const [entries, setEntries] = useState(logbookEntries);
  const [commentsByEntryId, setCommentsByEntryId] = useState({});

  const pendingEntries = entries.filter(
    (e) => String(e.status || "").trim().toLowerCase() === "pending"
  );

  const getStudentName = (entryId) =>
    students.find((s) => s.id === entryId)?.student ?? "Unknown Student";

  const updateEntryStatus = (entryId, newStatus) => {
    setEntries((prev) =>
      prev.map((e) => (e.id === entryId ? { ...e, status: newStatus } : e))
    );
  };

  const submitComment = (entryId, commentText) => {
    setCommentsByEntryId((prev) => ({
      ...prev,
      [entryId]: commentText,
    }));
  };

  return (
    <>
     <div className="logbookManagementTitle">
        <h2 className="logbookManagementTitleMain">Logbook Management</h2>
        <p className="logbookManagementTitleSub">
          Review, approve, and comment on student logbook entries
        </p>
    </div>

    <div className="logbookManagementTabs">
      <button
        type="button"
        className={`logbookTabButton ${activeView === "entries" ? "active" : ""}`}
        onClick={() => setActiveView("entries")}
      >
        View Entries
      </button>
      <button
        type="button"
        className={`logbookTabButton ${activeView === "reviews" ? "active" : ""}`}
        onClick={() => setActiveView("reviews")}
      >
        Approve Logbook
      </button>
      <button
        type="button"
        className={`logbookTabButton ${activeView === "reports" ? "active" : ""}`}
        onClick={() => setActiveView("reports")}
      >
        Comment
      </button>
    </div>

    {activeView === "entries" ? (
      <div className="logbookManagementContent">
        
        {entries.map((entry) => {
          const studentName = getStudentName(entry.id);
          return (
            <LogbookManagementCard
              key={entry.id}
              title={entry.title}
              status={entry.status}
              description={entry.description}
              studentName={studentName}
              date={entry.date}
            />
          );
        })}
      </div>
    ) : activeView === "reviews" ? (
      <div className="logbookManagementContent">

        {pendingEntries.map((entry) => {
          const studentName = getStudentName(entry.id);
          return (
            <ApproveLogbookCard
              key={entry.id}
              studentName={studentName}
              entry={entry}
              onApprove={() => updateEntryStatus(entry.id, "Approved")}
              onReject={() => updateEntryStatus(entry.id, "Rejected")}
            />
          );
        })}
      </div>
    ) : (
      <div className="logbookManagementContent">
        {entries.map((entry) => {
          const studentName = getStudentName(entry.id);
          return (
            <LogbookCommentCard
              key={entry.id}
              entry={entry}
              studentName={studentName}
              onSubmitComment={(text) => submitComment(entry.id, text)}
            />
          );
        })}
      </div>
    )}
    </>
  )
}
