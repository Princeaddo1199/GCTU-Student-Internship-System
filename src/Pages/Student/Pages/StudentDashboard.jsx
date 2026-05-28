import React from "react";
import "../Styles/StudentDashboard.css";
import {
  Briefcase,
  BookOpen,
  Star,
  TrendingUp,
  CheckCircle2,
  Clock,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function StudentDashboard() {
  const studentName = "Jane";

  const statCards = [
    {
      title: "Internship Status",
      value: "Active",
      subtext: "Next Check-in: 3 days",
      Icon: Briefcase,
    },
    {
      title: "Activity Logs",
      value: "42",
      subtext: "Last submitted: 6 this week",
      Icon: BookOpen,
    },
    {
      title: "Feedback Score",
      value: "4.2/5",
      subtext: "From 3 supervisors",
      Icon: Star,
    },
    {
      title: "Completion",
      value: "68%",
      subtext: "8 of 12 weeks done",
      Icon: TrendingUp,
    },
  ];

  const weeklyBars = [
    { label: "W1", value: 35 },
    { label: "W2", value: 22 },
    { label: "W3", value: 50 },
    { label: "W4", value: 34 },
    { label: "W5", value: 62 },
    { label: "W6", value: 18 },
    { label: "W7", value: 48 },
    { label: "W8", value: 37 },
  ];

  const progressItems = [
    { label: "Duration", valueText: "8/12 weeks", percent: 67 },
    { label: "Tasks Completed", valueText: "42/60", percent: 70 },
    { label: "Attendance", valueText: "85%", percent: 85 },
    { label: "Reports Submitted", valueText: "6/8", percent: 75 },
  ];

  const activityLogs = [
    {
      title: "Developed REST API endpoints for user module.",
      date: "Mar 12, 2026",
      status: "Approved",
      statusTone: "success",
    },
    {
      title: "Attended team standup and sprint planning.",
      date: "Mar 11, 2026",
      status: "Approved",
      statusTone: "success",
    },
    {
      title: "Fixed authentication bugs in login flow.",
      date: "Mar 10, 2026",
      status: "Pending",
      statusTone: "warning",
    },
    {
      title: "Designed database schema for new feature.",
      date: "Mar 9, 2026",
      status: "Approved",
      statusTone: "success",
    },
  ];

  return (
    <div className="studentDashboard">
      <div className="studentHeader">
        <div>
          <h2 className="studentTitle">Welcome back, {studentName}</h2>
          <p className="studentSubtitle">
            Here’s an overview of your internship progress
          </p>
        </div>
      </div>

      <section className="studentStatsGrid">
        {statCards.map(({ title, value, subtext, Icon }) => (
          <div key={title} className="studentCard">
            <div className="studentCardTop">
              <div>
                <p className="studentCardTitle">{title}</p>
                <p className="studentCardValue">{value}</p>
                <p className="studentCardSubtext">{subtext}</p>
              </div>
              <div className="studentCardIconWrap">
                <Icon size={18} />
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="studentGrid2">
        <div className="studentPanel">
          <div className="studentPanelHeader">
            <h3 className="studentPanelTitle">Weekly Activity Submissions</h3>
          </div>
          <div className="studentChart">
            <div className="studentRechartWrap">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={weeklyBars} margin={{ top: 8, right: 10, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="4 4" vertical={false} stroke="#eef2f6" />
                  <XAxis
                    dataKey="label"
                    tickLine={false}
                    axisLine={true}
                    tick={{ fill: "#7a8898", fontSize: 11, fontWeight: 600 }}
                  />
                  <YAxis
                    domain={[0, 100]}
                    axisLine={{ stroke: "#7a8898" }}
                    tickLine={{ stroke: "#7a8898" }}
                    tick={{ fill: "#7a8898", fontSize: 11, fontWeight: 600 }}
                    width={34}
                  />
                    
                  <Tooltip
                    cursor={{ fill: "rgba(17, 50, 95, 0.06)" }}
                    contentStyle={{
                      borderRadius: 10,
                      border: "1px solid #e6ebf1",
                      boxShadow: "0 8px 20px rgba(15, 31, 51, 0.08)",
                      fontSize: 12,
                    }}
                    labelStyle={{ fontWeight: 700 }}
                  />
                  <Bar dataKey="value" fill="#11325f" radius={[3, 3, 0, 0]} maxBarSize={100} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="studentPanel">
          <div className="studentPanelHeader">
            <h3 className="studentPanelTitle">Internship Progress</h3>
          </div>
          <div className="studentProgressList">
            {progressItems.map((p) => (
              <div key={p.label} className="studentProgressItem">
                <div className="studentProgressRow">
                  <div className="studentProgressLabel">{p.label}</div>
                  <div className="studentProgressValue">{p.valueText}</div>
                </div>
                <div className="studentProgressTrack">
                  <div
                    className="studentProgressFill"
                    style={{ width: `${p.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="studentPanel studentPanelFull">
        <div className="studentPanelHeader">
          <h3 className="studentPanelTitle">Recent Activity Logs</h3>
        </div>
        <div className="studentActivityList">
          {activityLogs.map((a) => (
            <div key={`${a.title}-${a.date}`} className="studentActivityItem">
              <div className="studentActivityLeft">
                <div className="studentActivityIcon">
                  {a.statusTone === "success" ? (
                    <CheckCircle2 size={16} />
                  ) : (
                    <Clock size={16} />
                  )}
                </div>
                <div>
                  <div className="studentActivityTitle">{a.title}</div>
                  <div className="studentActivityDate">{a.date}</div>
                </div>
              </div>
              <div className={`studentBadge ${a.statusTone}`}>
                {a.status}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
