import React, { useMemo } from "react";
import students from "../Data/studentTable.json";

function clampProgress(value) {
  const n = Number(value);
  if (Number.isNaN(n)) return 0;
  return Math.max(0, Math.min(100, n));
}

export default function ProgressOverviewCard() {
  const rows = useMemo(
    () =>
      students.map((s) => ({
        id: s.id,
        studentName: s.student,
        companyName: s.company,
        progress: clampProgress(s.progress),
      })),
    [],
  );

  return (
    <div className="progressOverviewCard">
      <div className="progressOverviewCardHeader">
        <p className="progressOverviewCardTitle">Student Progress Overview</p>
      </div>

      <div className="progressOverviewList">
        {rows.map((r) => (
          <div key={r.id} className="progressOverviewRow">
            <div className="progressOverviewStudent">{r.studentName}</div>

            <div className="progressOverviewBarWrap" aria-label="Progress">
              <div className="progressOverviewBarTrack">
                <div
                  className="progressOverviewBarFill"
                  style={{ width: `${r.progress}%` }}
                />
              </div>
              <div className="progressOverviewPercent">{r.progress}%</div>
            </div>

            <div className="progressOverviewCompany">{r.companyName}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
