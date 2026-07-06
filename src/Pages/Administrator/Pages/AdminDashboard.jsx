import React from "react";
import "../STYLES/AdminDashboard.css";
import {
  Users,
  Building2,
  UserCheck,
  TrendingUp,
  UserPlus,
  MapPin,
  ClipboardCheck,
  Send,
  ArrowRight,
  FileText,
  CheckCircle,
  AlertTriangle,
  Clock,
} from "lucide-react";

const statCards = [
  {
    label: "Total Students",
    value: "195",
    trend: "↑ 12 this month",
    trendClass: "positive",
    iconClass: "blue",
    Icon: Users,
  },
  {
    label: "Active Companies",
    value: "48",
    trend: "↑ 3 new partners",
    trendClass: "positive",
    iconClass: "green",
    Icon: Building2,
  },
  {
    label: "Supervisors",
    value: "32",
    trend: "16 Academic · 16 Industry",
    trendClass: "neutral",
    iconClass: "orange",
    Icon: UserCheck,
  },
  {
    label: "Completion Rate",
    value: "87%",
    trend: "↑ 3% vs last semester",
    trendClass: "positive",
    iconClass: "purple",
    Icon: TrendingUp,
  },
];

const quickActions = [
  { label: "Add Student", sub: "→", Icon: UserPlus, colorClass: "coral" },
  { label: "Assign Placement", sub: "→", Icon: MapPin, colorClass: "sky" },
  { label: "View Evaluations", sub: "→", Icon: ClipboardCheck, colorClass: "amber" },
  { label: "Send Announcement", sub: "→", Icon: Send, colorClass: "violet" },
];

const barChartData = [
  { label: "Computer Sc.", value: 45 },
  { label: "Engineering", value: 38 },
  { label: "Business", value: 25 },
  { label: "Design", value: 15 },
  { label: "Sciences", value: 30 },
];

const internshipStatusData = {
  active: 120,
  pending: 22,
  completed: 45,
  atRisk: 8,
};

const recentActivities = [
  {
    text: "Kwame Mensah submitted a logbook entry",
    time: "2 min ago",
    type: "logbook",
    Icon: FileText,
  },
  {
    text: "Dr. Asante approved 3 logbook entries",
    time: "15 min ago",
    type: "approved",
    Icon: CheckCircle,
  },
  {
    text: "New student Ama Darko registered",
    time: "1 hour ago",
    type: "newStudent",
    Icon: UserPlus,
  },
  {
    text: "Yaw Boateng attendance below threshold",
    time: "2 hours ago",
    type: "alert",
    Icon: AlertTriangle,
  },
  {
    text: "New placement assigned at TechCorp Ghana",
    time: "3 hours ago",
    type: "placement",
    Icon: Building2,
  },
];

const placementRequests = [
  {
    student: "Ama Darko",
    company: "Google Ghana",
    department: "Computer Science",
    date: "Mar 15",
    status: "Approved",
  },
  {
    student: "Kweku Baah",
    company: "MTN Group",
    department: "Engineering",
    date: "Mar 14",
    status: "Pending",
  },
  {
    student: "Efua Mills",
    company: "Vodafone",
    department: "Business",
    date: "Mar 13",
    status: "Approved",
  },
  {
    student: "Nana Yaw",
    company: "Andela",
    department: "Computer Science",
    date: "Mar 12",
    status: "Pending",
  },
  {
    student: "Akosua Poku",
    company: "Hubtel",
    department: "Design",
    date: "Mar 11",
    status: "Approved",
  },
];

const systemSummary = [
  { label: "Logbook Submissions", value: "78%", fill: 78, color: "blue" },
  { label: "Evaluations Completed", value: "62%", fill: 62, color: "green" },
  { label: "Attendance Rate", value: "91%", fill: 91, color: "purple" },
  { label: "Reports Submitted", value: "45%", fill: 45, color: "orange" },
];

// Weekly activity data for line chart
const weeklyData = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
  attendance: [35, 42, 38, 45, 40],
  logSubmissions: [28, 35, 30, 38, 32],
};

export default function AdminDashboard() {
  const maxBarValue = Math.max(...barChartData.map((d) => d.value));
  const totalInternships =
    internshipStatusData.active +
    internshipStatusData.pending +
    internshipStatusData.completed +
    internshipStatusData.atRisk;

  // Donut chart calculations
  const radius = 65;
  const circumference = 2 * Math.PI * radius;
  const segments = [
    { key: "active", value: internshipStatusData.active, color: "#142339" },
    { key: "pending", value: internshipStatusData.pending, color: "#f59e0b" },
    { key: "completed", value: internshipStatusData.completed, color: "#22c55e" },
    { key: "atRisk", value: internshipStatusData.atRisk, color: "#ef4444" },
  ];

  let cumulativeOffset = 0;
  const donutSegments = segments.map((seg) => {
    const percentage = seg.value / totalInternships;
    const dashLength = percentage * circumference;
    const dashOffset = circumference - cumulativeOffset;
    cumulativeOffset += dashLength;
    return {
      ...seg,
      dashArray: `${dashLength} ${circumference - dashLength}`,
      dashOffset,
    };
  });

  // Line chart SVG calculations
  const lineChartWidth = 600;
  const lineChartHeight = 180;
  const lineMaxVal = Math.max(
    ...weeklyData.attendance,
    ...weeklyData.logSubmissions
  );
  const linePointsAttendance = weeklyData.attendance
    .map(
      (val, i) =>
        `${(i / (weeklyData.labels.length - 1)) * lineChartWidth},${lineChartHeight - (val / lineMaxVal) * (lineChartHeight - 20)}`
    )
    .join(" ");
  const linePointsLogs = weeklyData.logSubmissions
    .map(
      (val, i) =>
        `${(i / (weeklyData.labels.length - 1)) * lineChartWidth},${lineChartHeight - (val / lineMaxVal) * (lineChartHeight - 20)}`
    )
    .join(" ");

  // Area fill for attendance
  const areaAttendance = `0,${lineChartHeight} ${linePointsAttendance} ${lineChartWidth},${lineChartHeight}`;

  return (
    <div className="adminDashboard">
      {/* Header */}
      <div className="adminDashboardHeader">
        <div className="adminDashboardTitle">
          <h2>Admin Dashboard</h2>
          <p>
            System overview and internship management — March 17, 2026
          </p>
        </div>
        <button className="generateReportBtn">
          <FileText size={16} />
          Generate Report
        </button>
      </div>

      {/* Stat Cards */}
      <div className="adminStatCards">
        {statCards.map((card, index) => (
          <div className="adminStatCard" key={index}>
            <div className="adminStatCardInfo">
              <p className="statLabel">{card.label}</p>
              <h3>{card.value}</h3>
              <p className={`statTrend ${card.trendClass}`}>{card.trend}</p>
            </div>
            <div className={`adminStatIcon ${card.iconClass}`}>
              <card.Icon size={22} />
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="adminQuickActions">
        {quickActions.map((action, index) => (
          <div className="adminQuickActionCard" key={index}>
            <div className={`quickActionIcon ${action.colorClass}`}>
              <action.Icon size={20} />
            </div>
            <div className="quickActionText">
              <h4>{action.label}</h4>
              <p>
                <ArrowRight size={12} />
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Row: Bar + Donut */}
      <div className="adminChartsRow">
        {/* Bar Chart */}
        <div className="adminChartCard">
          <div className="adminChartCardHeader">
            <h3>Students by Department</h3>
            <span>2025/2026</span>
          </div>
          <div className="adminBarChart">
            {barChartData.map((bar, index) => (
              <div className="adminBar" key={index}>
                <span className="adminBarValue">{bar.value}</span>
                <div
                  className="adminBarFill"
                  style={{
                    height: `${(bar.value / maxBarValue) * 100}%`,
                  }}
                />
                <span className="adminBarLabel">{bar.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Donut Chart */}
        <div className="adminChartCard">
          <div className="adminChartCardHeader">
            <h3>Internship Status</h3>
          </div>
          <div className="adminDonutChart">
            <div className="donutContainer">
              <svg viewBox="0 0 180 180">
                {donutSegments.map((seg) => (
                  <circle
                    key={seg.key}
                    cx="90"
                    cy="90"
                    r={radius}
                    fill="none"
                    stroke={seg.color}
                    strokeWidth="20"
                    strokeDasharray={seg.dashArray}
                    strokeDashoffset={seg.dashOffset}
                    strokeLinecap="round"
                  />
                ))}
              </svg>
              <div className="donutCenter">
                <span className="donutTotal">{totalInternships}</span>
                <span className="donutLabel">Total</span>
              </div>
            </div>
            <div className="donutLegend">
              <div className="donutLegendItem">
                <span className="donutLegendDot active" />
                Active
                <span className="donutLegendValue">
                  {internshipStatusData.active}
                </span>
              </div>
              <div className="donutLegendItem">
                <span className="donutLegendDot completed" />
                Completed
                <span className="donutLegendValue">
                  {internshipStatusData.completed}
                </span>
              </div>
              <div className="donutLegendItem">
                <span className="donutLegendDot pending" />
                Pending
                <span className="donutLegendValue">
                  {internshipStatusData.pending}
                </span>
              </div>
              <div className="donutLegendItem">
                <span className="donutLegendDot atRisk" />
                At Risk
                <span className="donutLegendValue">
                  {internshipStatusData.atRisk}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Activity Row: Line Chart + Recent Activity */}
      <div className="adminActivityRow">
        {/* Line Chart */}
        <div className="adminChartCard">
          <div className="adminChartCardHeader">
            <h3>Weekly Activity Overview</h3>
            <span>This Week</span>
          </div>
          <div className="adminLineChart">
            <svg
              className="lineChartCanvas"
              viewBox={`0 0 ${lineChartWidth} ${lineChartHeight + 30}`}
              preserveAspectRatio="none"
            >
              {/* Grid lines */}
              {[0.2, 0.4, 0.6, 0.8].map((pct) => (
                <line
                  key={pct}
                  x1="0"
                  y1={lineChartHeight - pct * (lineChartHeight - 20)}
                  x2={lineChartWidth}
                  y2={lineChartHeight - pct * (lineChartHeight - 20)}
                  stroke="#e2e8f0"
                  strokeWidth="1"
                />
              ))}

              {/* Y-axis labels */}
              {[0, 10, 20, 30, 40, 50].map((val) => (
                <text
                  key={val}
                  x="-5"
                  y={lineChartHeight - (val / lineMaxVal) * (lineChartHeight - 20) + 4}
                  fontSize="10"
                  fill="#94a3b8"
                  textAnchor="start"
                >
                  {val}
                </text>
              ))}

              {/* Area fill */}
              <polygon points={areaAttendance} fill="#eff6ff" opacity="0.6" />

              {/* Attendance line */}
              <polyline
                points={linePointsAttendance}
                fill="none"
                stroke="#3b82f6"
                strokeWidth="2.5"
                strokeLinejoin="round"
                strokeLinecap="round"
              />

              {/* Log submissions line */}
              <polyline
                points={linePointsLogs}
                fill="none"
                stroke="#22c55e"
                strokeWidth="2.5"
                strokeLinejoin="round"
                strokeLinecap="round"
              />

              {/* Dots - Attendance */}
              {weeklyData.attendance.map((val, i) => (
                <circle
                  key={`att-${i}`}
                  cx={(i / (weeklyData.labels.length - 1)) * lineChartWidth}
                  cy={lineChartHeight - (val / lineMaxVal) * (lineChartHeight - 20)}
                  r="4"
                  fill="#3b82f6"
                  stroke="#fff"
                  strokeWidth="2"
                />
              ))}

              {/* Dots - Log Submissions */}
              {weeklyData.logSubmissions.map((val, i) => (
                <circle
                  key={`log-${i}`}
                  cx={(i / (weeklyData.labels.length - 1)) * lineChartWidth}
                  cy={lineChartHeight - (val / lineMaxVal) * (lineChartHeight - 20)}
                  r="4"
                  fill="#22c55e"
                  stroke="#fff"
                  strokeWidth="2"
                />
              ))}

              {/* X-axis labels */}
              {weeklyData.labels.map((label, i) => (
                <text
                  key={label}
                  x={(i / (weeklyData.labels.length - 1)) * lineChartWidth}
                  y={lineChartHeight + 24}
                  fontSize="11"
                  fill="#94a3b8"
                  textAnchor="middle"
                >
                  {label}
                </text>
              ))}
            </svg>
          </div>
          <div className="adminLineChartLegend">
            <div className="legendItem">
              <span className="legendDot blue" />
              Attendance
            </div>
            <div className="legendItem">
              <span className="legendDot green" />
              Log Submissions
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="adminChartCard">
          <div className="adminChartCardHeader">
            <h3>Recent Activity</h3>
          </div>
          <div className="adminActivityFeed">
            {recentActivities.map((activity, index) => (
              <div className="activityItem" key={index}>
                <div className={`activityIcon ${activity.type}`}>
                  <activity.Icon size={16} />
                </div>
                <div className="activityContent">
                  <p>{activity.text}</p>
                  <span>{activity.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Row: Placement Table + System Summary */}
      <div className="adminBottomRow">
        {/* Placement Requests Table */}
        <div className="adminTableCard">
          <div className="adminTableHeader">
            <h3>Recent Placement Requests</h3>
            <span className="viewAllLink">
              View All <ArrowRight size={14} />
            </span>
          </div>
          <table className="adminPlacementTable">
            <thead>
              <tr>
                <th>Student</th>
                <th>Company</th>
                <th>Department</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {placementRequests.map((req, index) => (
                <tr key={index}>
                  <td>
                    <span className="studentNameLink">{req.student}</span>
                  </td>
                  <td>{req.company}</td>
                  <td>{req.department}</td>
                  <td>{req.date}</td>
                  <td>
                    <span
                      className={`statusBadge ${req.status.toLowerCase()}`}
                    >
                      {req.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* System Summary */}
        <div className="adminSystemSummary">
          <h3>System Summary</h3>
          <div className="summaryItems">
            {systemSummary.map((item, index) => (
              <div className="summaryItem" key={index}>
                <div className="summaryItemHeader">
                  <span>{item.label}</span>
                  <span>{item.value}</span>
                </div>
                <div className="summaryProgressBar">
                  <div
                    className={`summaryProgressFill ${item.color}`}
                    style={{ width: `${item.fill}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="lastUpdated">
            <Clock size={12} />
            Last updated: Today at 2:30 PM
          </div>
        </div>
      </div>
    </div>
  );
}
