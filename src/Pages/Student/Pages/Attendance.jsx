import React, { useMemo, useState } from "react";
import "../Styles/Attendance.css";
import { LogIn, LogOut } from "lucide-react";

export default function Attendance() {
  const [isCheckedIn, setIsCheckedIn] = useState(false);
  const [checkInTime, setCheckInTime] = useState("09:36 AM");
  const [checkOutTime, setCheckOutTime] = useState("09:36 AM");

  const todayLabel = useMemo(() => {
    const now = new Date();
    const day = now.toLocaleDateString(undefined, { weekday: "long" });
    const month = now.toLocaleDateString(undefined, { month: "short" });
    const date = now.getDate();
    return `${day}, ${month} ${date}`;
  }, []);

  const history = [
    {
      date: "Mar 13, 2026",
      day: "Friday",
      checkIn: "8:02 AM",
      checkOut: "4:58 PM",
      hours: "8h 56m",
      status: "Present",
      tone: "present",
    },
    {
      date: "Mar 12, 2026",
      day: "Thursday",
      checkIn: "7:56 AM",
      checkOut: "5:10 PM",
      hours: "9h 15m",
      status: "Present",
      tone: "present",
    },
    {
      date: "Mar 11, 2026",
      day: "Wednesday",
      checkIn: "8:15 AM",
      checkOut: "5:00 PM",
      hours: "8h 45m",
      status: "Late",
      tone: "late",
    },
    {
      date: "Mar 10, 2026",
      day: "Tuesday",
      checkIn: "—",
      checkOut: "—",
      hours: "—",
      status: "Absent",
      tone: "absent",
    },
    {
      date: "Mar 9, 2026",
      day: "Monday",
      checkIn: "7:50 AM",
      checkOut: "4:45 PM",
      hours: "8h 55m",
      status: "Present",
      tone: "present",
    },
    {
      date: "Mar 6, 2026",
      day: "Friday",
      checkIn: "8:00 AM",
      checkOut: "5:00 PM",
      hours: "9h 00m",
      status: "Present",
      tone: "present",
    },
  ];

  const summary = useMemo(() => {
    const present = history.filter((h) => h.status === "Present").length;
    const late = history.filter((h) => h.status === "Late").length;
    const absent = history.filter((h) => h.status === "Absent").length;
    return { present, late, absent };
  }, [history]);

  const handleCheckIn = () => {
    const now = new Date().toLocaleTimeString(undefined, {
      hour: "2-digit",
      minute: "2-digit",
    });
    setIsCheckedIn(true);
    setCheckInTime(now);
  };

  const handleCheckOut = () => {
    const now = new Date().toLocaleTimeString(undefined, {
      hour: "2-digit",
      minute: "2-digit",
    });
    setIsCheckedIn(false);
    setCheckOutTime(now);
  };

  return (
    <div className="attendancePage">
      <div className="attendanceHeader">
        <h2 className="attendanceTitle">Attendance</h2>
        <p className="attendanceSubtitle">
          Check in, check out, and view your attendance history
        </p>
      </div>

      <section className="attendanceStats">
        <div className="attendanceStatCard">
          <div className="attendanceStatValue present">{summary.present}</div>
          <div className="attendanceStatLabel">Present</div>
        </div>
        <div className="attendanceStatCard">
          <div className="attendanceStatValue late">{summary.late}</div>
          <div className="attendanceStatLabel">Late</div>
        </div>
        <div className="attendanceStatCard">
          <div className="attendanceStatValue absent">{summary.absent}</div>
          <div className="attendanceStatLabel">Absent</div>
        </div>
      </section>

      <section className="attendanceActionsGrid">
        <div className="attendanceActionCard">
          <div className="attendanceActionTop">
            <div className="attendanceActionIcon in">
              <LogIn size={18} />
            </div>
          </div>
          <div className="attendanceTime">{checkInTime}</div>
          <div className="attendanceDate">{todayLabel}</div>
          <button
            type="button"
            className="attendanceButton in"
            onClick={handleCheckIn}
            disabled={isCheckedIn}
          >
            Check In
          </button>
        </div>

        <div className="attendanceActionCard">
          <div className="attendanceActionTop">
            <div className="attendanceActionIcon out">
              <LogOut size={18} />
            </div>
          </div>
          <div className="attendanceTime">{checkOutTime}</div>
          <div className="attendanceDate">{todayLabel}</div>
          <button
            type="button"
            className="attendanceButton out"
            onClick={handleCheckOut}
            disabled={!isCheckedIn}
          >
            Check Out
          </button>
        </div>
      </section>

      <section className="attendanceTableCard">
        <div className="attendanceTableHeader">
          <div className="attendanceTableTitle">Attendance History</div>
        </div>

        <div className="attendanceTableWrap">
          <table className="attendanceTable">
            <thead>
              <tr>
                <th>Date</th>
                <th>Day</th>
                <th>Check-In</th>
                <th>Check-Out</th>
                <th>Hours</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {history.map((row) => (
                <tr key={`${row.date}-${row.status}`}>
                  <td>{row.date}</td>
                  <td>{row.day}</td>
                  <td>{row.checkIn}</td>
                  <td>{row.checkOut}</td>
                  <td>{row.hours}</td>
                  <td>
                    <span className={`attendanceBadge ${row.tone}`}>
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
