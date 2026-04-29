import React, { useMemo, useState } from "react";
import { CalendarDays } from "lucide-react";
import students from "../Data/studentTable.json";
import attendanceRecords from "../Data/attendanceRecords.json";
import "../STYLES/AttendanceMonitoring.css";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function formatDateLabel(isoDate) {
  // Expected format: YYYY-MM-DD
  if (!isoDate || typeof isoDate !== "string") return "";
  const [_year, month, day] = isoDate.split("-");
  const m = Number(month) - 1;
  const d = String(day).padStart(2, "0");
  if (Number.isNaN(m)) return isoDate;
  return `${MONTHS[m]} ${Number(d)}`;
}

export default function AttendanceMonitoring() {
  const [activeView, setActiveView] = useState("attendance"); // "attendance" | "reports"
  const [selectedDate, setSelectedDate] = useState("TODAY");

  const studentById = useMemo(() => {
    return new Map(students.map((s) => [s.id, s.student]));
  }, []);

  const availableDates = useMemo(() => {
    const unique = Array.from(new Set(attendanceRecords.map((r) => r.date)));
    unique.sort((a, b) => new Date(a).getTime() - new Date(b).getTime());
    return unique;
  }, []);

  const latestDate = availableDates.length > 0 ? availableDates[availableDates.length - 1] : null;
  const resolvedDate = selectedDate === "TODAY" ? latestDate : selectedDate;

  const attendanceByStudentId = useMemo(() => {
    const map = new Map();
    if (!resolvedDate) return map;

    attendanceRecords
      .filter((r) => r.date === resolvedDate)
      .forEach((r) => {
        map.set(r.studentId, r);
      });

    return map;
  }, [resolvedDate]);

  const dateLabel = resolvedDate ? formatDateLabel(resolvedDate) : "";

  const dailyRows = useMemo(() => {
    // Keep table order consistent with studentTable.json
    return students.map((s) => {
      const rec = attendanceByStudentId.get(s.id);
      const status = rec?.status || "Unknown";
      return {
        studentId: s.id,
        studentName: studentById.get(s.id) || s.student,
        checkIn: rec?.checkIn ?? null,
        checkOut: rec?.checkOut ?? null,
        status,
      };
    });
  }, [attendanceByStudentId, studentById]);

  const counts = useMemo(() => {
    const c = { Present: 0, Absent: 0, Late: 0, Unknown: 0 };
    dailyRows.forEach((r) => {
      const statusKey = r.status;
      if (statusKey in c) c[statusKey] += 1;
      else c.Unknown += 1;
    });
    return c;
  }, [dailyRows]);

  const reportRows = useMemo(() => {
    return availableDates.map((date) => {
      const items = attendanceRecords.filter((r) => r.date === date);
      const countsByStatus = { Present: 0, Absent: 0, Late: 0, Unknown: 0 };
      items.forEach((r) => {
        const status = r?.status;
        if (status && status in countsByStatus) countsByStatus[status] += 1;
        else countsByStatus.Unknown += 1;
      });
      return { date, ...countsByStatus };
    });
  }, [availableDates]);

  const resolveStatusPillClass = (status) => {
    const s = String(status || "").toLowerCase();
    if (s === "present") return "attendanceStatusPresent";
    if (s === "absent") return "attendanceStatusAbsent";
    if (s === "late") return "attendanceStatusLate";
    return "attendanceStatusUnknown";
  };

  return (
    <>
      <div className="attendanceMonitoringTitle">
        <h2 className="attendanceMonitoringTitleMain">Attendance Monitoring</h2>
        <p className="attendanceMonitoringTitleSub">
          Monitor student check-in/check-out and view daily attendance status
        </p>
      </div>

      <div className="attendanceMonitoringTabs">
        <button
          type="button"
          className={`attendanceTabButton ${activeView === "attendance" ? "active" : ""}`}
          onClick={() => setActiveView("attendance")}
        >
          View Attendance
        </button>
        <button
          type="button"
          className={`attendanceTabButton ${activeView === "reports" ? "active" : ""}`}
          onClick={() => setActiveView("reports")}
        >
          Attendance Reports
        </button>
      </div>

      {activeView === "attendance" ? (
        <div className="attendanceMonitoringContent">
          <div className="attendanceHeaderRow">
            <div className="attendanceDailyTitle">
              <CalendarDays size={18} color="#8894a2" />
              <span>Daily Attendance</span>
            </div>

            <div className="attendanceDateSelectWrap">
              <select
                className="attendanceDateSelect"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
              >
                <option value="TODAY">Today</option>
                {availableDates.map((d) => (
                  <option key={d} value={d}>
                    {formatDateLabel(d)}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="attendanceTableCard">
            <table className="attendanceTable">
              <thead>
                <tr>
                  <th>Student</th>
                  <th>Date</th>
                  <th>Check In</th>
                  <th>Check Out</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {dailyRows.map((row) => (
                  <tr key={row.studentId}>
                    <td>{row.studentName}</td>
                    <td>{dateLabel}</td>
                    <td>{row.checkIn ? row.checkIn : "—"}</td>
                    <td>{row.checkOut ? row.checkOut : "—"}</td>
                    <td>
                      <span
                        className={`attendanceStatusPill ${resolveStatusPillClass(row.status)}`}
                      >
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="attendanceReportsContent">
          <div className="attendanceReportsGrid">
            <div className="attendanceReportCard">
              <div className="attendanceReportLabel">Present</div>
              <div className="attendanceReportValue" style={{ color: "#166534" }}>
                {counts.Present}
              </div>
            </div>
            <div className="attendanceReportCard">
              <div className="attendanceReportLabel">Late</div>
              <div className="attendanceReportValue" style={{ color: "#111827" }}>
                {counts.Late}
              </div>
            </div>
            <div className="attendanceReportCard">
              <div className="attendanceReportLabel">Absent</div>
              <div className="attendanceReportValue" style={{ color: "#991b1b" }}>
                {counts.Absent}
              </div>
            </div>
          </div>

          <div className="attendanceMiniTableCard">
            <div className="attendanceMiniTableTitle">
              Attendance Summary (by date)
            </div>
            <table className="attendanceMiniTable">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Present</th>
                  <th>Late</th>
                  <th>Absent</th>
                </tr>
              </thead>
              <tbody>
                {reportRows.map((r) => (
                  <tr key={r.date}>
                    <td>{formatDateLabel(r.date)}</td>
                    <td>{r.Present}</td>
                    <td>{r.Late}</td>
                    <td>{r.Absent}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
}
