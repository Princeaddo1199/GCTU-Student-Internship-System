import React, { useState } from "react";
import "../STYLES/LogbookManagement.css";

export default function LogbookManagement() {
  const [activeView, setActiveView] = useState("entries"); // "entries" | "reviews" | "reports"
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
        <p className="logbookManagementSectionTitle">Logbook entries</p>
        <p className="logbookManagementSectionSub">
          This section will list student logbook entries.
        </p>
      </div>
    ) : activeView === "reviews" ? (
      <div className="logbookManagementContent">
        <p className="logbookManagementSectionTitle">Reviews</p>
        <p className="logbookManagementSectionSub">
          This section will handle review/approval of submitted logbooks.
        </p>
      </div>
    ) : (
      <div className="logbookManagementContent">
        <p className="logbookManagementSectionTitle">Reports</p>
        <p className="logbookManagementSectionSub">
          This section will show summaries and downloadable reports.
        </p>
      </div>
    )}
    </>
  )
}
