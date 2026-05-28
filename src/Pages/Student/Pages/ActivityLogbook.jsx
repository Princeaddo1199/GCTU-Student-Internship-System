import React, { useMemo, useState } from "react";
import "../Styles/ActivityLogbook.css";
import { CheckCircle2, Clock, Plus } from "lucide-react";

export default function ActivityLogbook() {
  const [activeTab, setActiveTab] = useState("all"); // all | daily | weekly

  const entries = useMemo(
    () => [
      {
        id: "rest-api-dev",
        title: "REST API Development",
        date: "March 12, 2026",
        type: "Daily",
        description:
          "Built RESTful API endpoints for the user management module. Implemented CRUD operations and JWT authentication middleware.",
        tags: ["Node.js", "Express", "JWT"],
        status: "Approved",
        statusTone: "approved",
      },
      {
        id: "sprint-planning",
        title: "Sprint Planning & Standup",
        date: "March 11, 2026",
        type: "Daily",
        description:
          "Participated in the sprint planning session. Presented demo of completed features and received feedback from senior developers.",
        tags: ["Agile", "Communication"],
        status: "Approved",
        statusTone: "approved",
      },
      {
        id: "auth-bugfixes",
        title: "Bug Fixes - Authentication Module",
        date: "March 10, 2026",
        type: "Daily",
        description:
          "Identified and resolved critical bugs in the login flow. Fixed session persistence issues and improved error handling.",
        tags: ["Debugging", "React", "TypeScript"],
        status: "Pending",
        statusTone: "pending",
      },
      {
        id: "db-schema",
        title: "Database Schema Design",
        date: "March 7, 2026",
        type: "Daily",
        description:
          "Designed normalized database schema for the new reporting feature. Created ER diagrams and documented relationships.",
        tags: ["PostgreSQL", "Database Design"],
        status: "Approved",
        statusTone: "approved",
      },
      {
        id: "week-7-summary",
        title: "Week 7 Summary Report",
        date: "March 5, 2026",
        type: "Weekly",
        description:
          "Compiled weekly summary of activities including API development, testing, and team collaboration tasks.",
        tags: ["Documentation", "Reporting"],
        status: "Approved",
        statusTone: "approved",
      },
    ],
    [],
  );

  const filteredEntries = useMemo(() => {
    if (activeTab === "daily") return entries.filter((e) => e.type === "Daily");
    if (activeTab === "weekly")
      return entries.filter((e) => e.type === "Weekly");
    return entries;
  }, [activeTab, entries]);

  return (
    <div className="logbookPage">
      <div className="logbookHeaderRow">
        <div>
          <h2 className="logbookTitle">Activity Logbook</h2>
          <p className="logbookSubtitle">
            Record your daily and weekly internship activities
          </p>
        </div>
        <button
          type="button"
          className="logbookNewButton"
          onClick={() => alert("New entry form coming soon")}
        >
          <Plus size={16} />
          New Entry
        </button>
      </div>

      <div className="logbookTabs">
        <button
          type="button"
          className={`logbookTab ${activeTab === "all" ? "active" : ""}`}
          onClick={() => setActiveTab("all")}
        >
          All
        </button>
        <button
          type="button"
          className={`logbookTab ${activeTab === "daily" ? "active" : ""}`}
          onClick={() => setActiveTab("daily")}
        >
          Daily
        </button>
        <button
          type="button"
          className={`logbookTab ${activeTab === "weekly" ? "active" : ""}`}
          onClick={() => setActiveTab("weekly")}
        >
          Weekly
        </button>
      </div>

      <div className="logbookList">
        {filteredEntries.map((e) => (
          <article key={e.id} className="logbookCard">
            <div className="logbookTimelineDot" aria-hidden="true" />

            <div className="logbookCardInner">
              <div className="logbookCardTop">
                <div className="logbookCardMain">
                  <div className="logbookCardTitle">{e.title}</div>
                  <div className="logbookMetaRow">
                    <span className="logbookMetaItem">{e.date}</span>
                    <span className="logbookMetaDivider" />
                    <span className="logbookPill">{e.type}</span>
                  </div>
                </div>

                <div className={`logbookStatus ${e.statusTone}`}>
                  {e.statusTone === "approved" ? (
                    <CheckCircle2 size={14} />
                  ) : (
                    <Clock size={14} />
                  )}
                  {e.status}
                </div>
              </div>

              <p className="logbookDescription">{e.description}</p>

              <div className="logbookTags">
                {e.tags.map((t) => (
                  <span key={`${e.id}-${t}`} className="logbookTag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
