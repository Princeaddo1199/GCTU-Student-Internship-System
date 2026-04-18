import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/gctu-logo-1.png";
import "../STYLES/Sidebar.css";
import {
  ChevronRight,
  LayoutDashboard,
  Briefcase,
  Users,
  Eye,
  BookOpen,
  UserCheck,
  CalendarCheck,
  Star,
  FileText,
  MapPin,
  MessageSquare,
  Bell,
  ChartColumn,
  User,
} from "lucide-react";

export default function Sidebar() {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const toggleSubmenu = () => {
    setIsSubmenuOpen(!isSubmenuOpen);
  };

  return (
    <div className="sidebarLayoutMain">
      <div className="logo">
        <img src={Logo} alt="GCTU Logo" width="40" height="40" />
        <p>GCTU SIS</p>
      </div>
      <nav className="sidebarNav">
        <NavLink to="/dashboard" className="navLink">
          <LayoutDashboard className="navIcon" />
          Dashboard
        </NavLink>
        <NavLink to="/my-students" className="navLink">
          <Users className="navIcon" />
          My Students
        </NavLink>
        <NavLink to="/internship-monitoring" className="navLink">
          <Eye className="navIcon" />
          Internship Monitoring
        </NavLink>
        <NavLink to="/logbook-management" className="navLink">
          <BookOpen className="navIcon" />
          Logbook Management
        </NavLink>
        <NavLink to="/attendance-monitoring" className="navLink">
          <UserCheck className="navIcon" />
          Attendance Monitoring
        </NavLink>
        <NavLink to="/performance-evaluation" className="navLink">
          <CalendarCheck className="navIcon" />
          Performance Evaluation
        </NavLink>
        <NavLink to="/supervisor-feedback" className="navLink">
          <Star className="navIcon" />
          Supervisor Feedback
        </NavLink>
        <NavLink to="/industry-reports" className="navLink">
          <FileText className="navIcon" />
          Industry Reports
        </NavLink>

        <div className="navItem">
          <button className="navButton" onClick={toggleSubmenu}>
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
      </nav>
    </div>
  );
}
