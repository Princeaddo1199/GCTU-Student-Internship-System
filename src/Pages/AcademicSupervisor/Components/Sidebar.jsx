import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../../../assets/gctu-logo-1.png";
import "../STYLES/Sidebar.css";
import {
  ChevronRight,
  LayoutDashboard,
  Users,
  Eye,
  BookOpen,
  CalendarCheck,
  Star,
  FileText,
  MapPin,
  MessageSquare,
  Bell,
  ChartColumn,
  User,
} from "lucide-react";
import { useAuth } from "../../../AuthContext.jsx";

const supervisorLinks = [
  { to: "/dashboard", label: "Dashboard", Icon: LayoutDashboard },
  { to: "/my-students", label: "My Students", Icon: Users },
  { to: "/internship-monitoring", label: "Internship Monitoring", Icon: Eye },
  { to: "/logbook-management", label: "Logbook Management", Icon: BookOpen },
  {
    to: "/attendance-monitoring",
    label: "Attendance Monitoring",
    Icon: CalendarCheck,
  },
  {
    to: "/performance-evaluation",
    label: "Performance Evaluation",
    Icon: CalendarCheck,
  },
  { to: "/supervisor-feedback", label: "Supervisor Feedback", Icon: Star },
  { to: "/industry-reports", label: "Industry Reports", Icon: FileText },
];

export default function Sidebar() {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [isStudentFeedbackOpen, setIsStudentFeedbackOpen] = useState(false);
  const [isStudentAnalyticsOpen, setIsStudentAnalyticsOpen] = useState(false);
  const [isStudentInternshipOpen, setIsStudentInternshipOpen] = useState(false);
  const [isStudentProfileOpen, setIsStudentProfileOpen] = useState(false);
  const { role, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  if (!role) {
    return null;
  }

  return (
    <div className="sidebarLayoutMain">
      <div className="logo">
        <img src={Logo} alt="GCTU Logo" width="40" height="40" />
        <div>
          <p>GCTU SIS</p>
          <span className="sidebarRole">{role}</span>
        </div>
      </div>
      <nav className="sidebarNav">
        {role === "Student" ? (
          <>
            {/* 1. Dashboard */}
            <NavLink to="/student-dashboard" className="navLink">
              <LayoutDashboard className="navIcon" />
              Dashboard
            </NavLink>

            {/* 2. My Internship */}
            <div className="navItem">
              <button
                type="button"
                className="navButton"
                onClick={() => setIsStudentInternshipOpen((v) => !v)}
              >
                <span className="navButtonText">
                  <Eye className="buttonIcon" />
                  My Internship
                </span>
                <span
                  className={`arrow ${isStudentInternshipOpen ? "open" : ""}`}
                >
                  <ChevronRight />
                </span>
              </button>
              {isStudentInternshipOpen && (
                <ul className="submenu">
                  <li>
                    <NavLink
                      to="/student-my-internship/details"
                      className="submenuLink"
                    >
                      Internship Details
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/student-my-internship/placement"
                      className="submenuLink"
                    >
                      Placement Information
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/student-my-internship/guidelines"
                      className="submenuLink"
                    >
                      Internship Guidelines
                    </NavLink>
                  </li>
                </ul>
              )}
            </div>

            {/* 3. Activity Logbook */}
            <NavLink to="/activity-logbook" className="navLink">
              <BookOpen className="navIcon" />
              Activity Logbook
            </NavLink>

            {/* 4. Tasks and Attachments */}
            <NavLink to="/tasks-attachments" className="navLink">
              <FileText className="navIcon" />
              Tasks & Attachments
            </NavLink>

            {/* 5. Attendance */}
            <NavLink to="/attendance" className="navLink">
              <CalendarCheck className="navIcon" />
              Attendance
            </NavLink>

            {/* 6. Supervisor Feedback */}
            <div className="navItem">
              <button
                type="button"
                className="navButton"
                onClick={() => setIsStudentFeedbackOpen((v) => !v)}
              >
                <span className="navButtonText">
                  <Star className="buttonIcon" />
                  Supervisor Feedback
                </span>
                <span
                  className={`arrow ${isStudentFeedbackOpen ? "open" : ""}`}
                >
                  <ChevronRight />
                </span>
              </button>
              {isStudentFeedbackOpen && (
                <ul className="submenu">
                  <li>
                    <NavLink
                      to="/student-supervisor-feedback/academic"
                      className="submenuLink"
                    >
                      Academic Supervisor
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/student-supervisor-feedback/industry"
                      className="submenuLink"
                    >
                      Industry Supervisor
                    </NavLink>
                  </li>
                </ul>
              )}
            </div>

            {/* 7. Performance Analytics */}
            <div className="navItem">
              <button
                type="button"
                className="navButton"
                onClick={() => setIsStudentAnalyticsOpen((v) => !v)}
              >
                <span className="navButtonText">
                  <ChartColumn className="buttonIcon" />
                  Performance Analytics
                </span>
                <span
                  className={`arrow ${isStudentAnalyticsOpen ? "open" : ""}`}
                >
                  <ChevronRight />
                </span>
              </button>
              {isStudentAnalyticsOpen && (
                <ul className="submenu">
                  <li>
                    <NavLink
                      to="/student-performance-analytics/score"
                      className="submenuLink"
                    >
                      Performance Score
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/student-performance-analytics/progress"
                      className="submenuLink"
                    >
                      Progress Tracker
                    </NavLink>
                  </li>
                </ul>
              )}
            </div>

            {/* 8. Notifications */}
            <NavLink to="/student-notifications" className="navLink">
              <Bell className="navIcon" />
              Notifications
            </NavLink>

            {/* 9. Internship Report */}
            <NavLink to="/internship-report" className="navLink">
              <FileText className="navIcon" />
              Internship Report
            </NavLink>

            {/* Profile Dropdown */}
            <div className="navItem">
              <button
                type="button"
                className="navButton"
                onClick={() => setIsStudentProfileOpen((v) => !v)}
              >
                <span className="navButtonText">
                  <User className="buttonIcon" />
                  Profile
                </span>
                <span className={`arrow ${isStudentProfileOpen ? "open" : ""}`}>
                  <ChevronRight />
                </span>
              </button>
              {isStudentProfileOpen && (
                <ul className="submenu">
                  <li>
                    <NavLink
                      to="/student-profile/personal-info"
                      className="submenuLink"
                    >
                      Personal Information
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/student-profile/internship-info"
                      className="submenuLink"
                    >
                      Internship Information
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/student-profile/change-password"
                      className="submenuLink"
                    >
                      Change Password
                    </NavLink>
                  </li>
                </ul>
              )}
            </div>
          </>
        ) : (
          <>
            {/* Supervisor routes mapping */}
            {supervisorLinks.map(({ to, label, Icon }) => (
              <NavLink key={to} to={to} className="navLink">
                <Icon className="navIcon" />
                {label}
              </NavLink>
            ))}

            <div className="navItem">
              <button
                type="button"
                className="navButton"
                onClick={() => setIsSubmenuOpen(!isSubmenuOpen)}
              >
                <span className="navButtonText">
                  <MapPin className="buttonIcon" />
                  Visit Reports
                </span>
                <span className={`arrow ${isSubmenuOpen ? "open" : ""}`}>
                  <ChevronRight />
                </span>
              </button>
              {isSubmenuOpen && (
                <ul className="submenu">
                  <li>
                    <NavLink to="/record-visit-report" className="submenuLink">
                      Record Visit Report
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/visit-history" className="submenuLink">
                      Visit History
                    </NavLink>
                  </li>
                </ul>
              )}
            </div>
            <NavLink to="/messages" className="navLink">
              <MessageSquare className="navIcon" />
              Messages
            </NavLink>
            <NavLink to="/notifications" className="navLink">
              <Bell className="navIcon" />
              Notifications
            </NavLink>
            <NavLink to="/reports-analysis" className="navLink">
              <ChartColumn className="navIcon" />
              Reports & Analysis
            </NavLink>
            <NavLink to="/profile" className="navLink">
              <User className="navIcon" />
              Profile
            </NavLink>
          </>
        )}

        {/* 10. Logout */}
        <button
          type="button"
          className="navButton logoutButton"
          onClick={handleLogout}
        >
          Logout
        </button>
      </nav>
    </div>
  );
}
