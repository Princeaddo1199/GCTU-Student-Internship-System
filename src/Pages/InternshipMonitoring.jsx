import React, { useMemo, useState } from "react";
import InternshipMonitoringCard from "../Components/InternshipMonitoringCard";
import "../STYLES/InternshipMonitoring.css";
import students from "../Data/studentTable.json";
import ProgressOverviewCard from "../Components/ProgressOverviewCard";

export default function InternshipMonitoring() {
  const [activeView, setActiveView] = useState("cards"); // "cards" | "other"

  const rows = useMemo(
    () =>
      students.map((student) => ({
        id: student.id,
        student: student.student,
        company: student.company,
        startDate: student.startDate,
        endDate: student.endDate,
        internshipDuration: student.internshipDuration,
        progress: student.progress,
      })),
    [],
  );
  return (
    <>
    <div className="internshipMonitoringTitle">
        <h2 className="internshipMonitoringTitleMain">Internship Monitoring</h2>
        <p className="internshipMonitoringTitleSub">Track student internship details and progress</p>
    </div>

    <div className="internshipMonitoringTabs">
      <button
        type="button"
        className={`tabButton ${activeView === "cards" ? "active" : ""}`}
        onClick={() => setActiveView("cards")}
      >
        Student Cards
      </button>
      <button
        type="button"
        className={`tabButton ${activeView === "other" ? "active" : ""}`}
        onClick={() => setActiveView("other")}
      >
        Other Info
      </button>
    </div>

    {activeView === "cards" ? (
      <div className="internshipMonitoringCards">
        {rows.map((s) => (
          <InternshipMonitoringCard
            key={s.id}
            studentName={s.student}
            companyName={s.company}
            internshipStartDate={s.startDate}
            internshipEndDate={s.endDate}
            internshipDuration={s.internshipDuration}
            progress={s.progress}
          />
        ))}
      </div>
    ) : (
      <div className="internshipMonitoringOther">
        <p className="internshipMonitoringOtherTitle">Student Progress Overview</p>
        <ProgressOverviewCard/>
      </div>
    )}
    </>
  )
}
