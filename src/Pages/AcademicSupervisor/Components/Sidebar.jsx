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

const studentLinks = [
  { to: "/student-dashboard", label: "Dashboard", Icon: LayoutDashboard },
  { to: "/attendance", label: "Attendance", Icon: CalendarCheck },
  { to: "/activity-logbook", label: "Activity Logbook", Icon: BookOpen },
  { to: "/documents", label: "Documents", Icon: FileText },
];

export default function Sidebar() {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const { role, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  if (!role) {
    return null;
  }

  const links = role === "Student" ? studentLinks : supervisorLinks;

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
        {links.map(({ to, label, Icon }) => (
          <NavLink key={to} to={to} className="navLink">
            <Icon className="navIcon" />
            {label}
          </NavLink>
        ))}

        {role !== "Student" && (
          <>
            <div className="navItem">
              <button
                className="navButton"
                onClick={() => setIsSubmenuOpen(!isSubmenuOpen)}
              >
                <MapPin className="buttonIcon" />
                Visit Reports
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
