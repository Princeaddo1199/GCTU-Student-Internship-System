import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../../../assets/gctu-logo-1.png";
import "../../AcademicSupervisor/STYLES/Sidebar.css";
import {
  ChevronRight,
  LayoutDashboard,
  Users,
  GraduationCap,
  Building2,
  Briefcase,
  Eye,
  BookOpen,
  ClipboardCheck,
  BarChart3,
  MessageSquare,
  Bell,
  Settings,
  User,
  LogOut,
} from "lucide-react";
import { useAuth } from "../../../AuthContext.jsx";

export default function AdminSidebar() {
  const [isAcademicSupervisorsOpen, setIsAcademicSupervisorsOpen] = useState(false);
  const [isInternshipMonitoringOpen, setIsInternshipMonitoringOpen] = useState(false);
  const [isCommunicationOpen, setIsCommunicationOpen] = useState(false);
  const [isSystemSettingsOpen, setIsSystemSettingsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
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
          <span className="sidebarRole">Administrator</span>
        </div>
      </div>
      <nav className="sidebarNav">
        {/* 1. Dashboard */}
        <NavLink to="/admin-dashboard" className="navLink">
          <LayoutDashboard className="navIcon" />
          Dashboard
        </NavLink>

        {/* 2. Students Management */}
        <NavLink to="/admin-students-management" className="navLink">
          <GraduationCap className="navIcon" />
          Students Management
        </NavLink>

        {/* 3. Academic Supervisors (with submenu) */}
        <div className="navItem">
          <button
            type="button"
            className="navButton"
            onClick={() => setIsAcademicSupervisorsOpen((v) => !v)}
          >
            <span className="navButtonText">
              <Users className="buttonIcon" />
              Academic Supervisors
            </span>
            <span className={`arrow ${isAcademicSupervisorsOpen ? "open" : ""}`}>
              <ChevronRight />
            </span>
          </button>
          {isAcademicSupervisorsOpen && (
            <ul className="submenu">
              <li>
                <NavLink to="/admin-academic-supervisors" className="submenuLink">
                  All Academic Supervisors
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin-assign-supervisors" className="submenuLink">
                  Assign Supervisors
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin-supervisor-performance" className="submenuLink">
                  Supervisor Performance
                </NavLink>
              </li>
            </ul>
          )}
        </div>

        {/* 4. Industry Supervisors */}
        <NavLink to="/admin-industry-supervisors" className="navLink">
          <Users className="navIcon" />
          Industry Supervisors
        </NavLink>

        {/* 5. Organizations / Companies */}
        <NavLink to="/admin-organizations" className="navLink">
          <Building2 className="navIcon" />
          Organizations / Companies
        </NavLink>

        {/* 4. Internship Placement */}
        <NavLink to="/admin-internship-placement" className="navLink">
          <Briefcase className="navIcon" />
          Internship Placement
        </NavLink>

        {/* 5. Internship Monitoring (with submenu) */}
        <div className="navItem">
          <button
            type="button"
            className="navButton"
            onClick={() => setIsInternshipMonitoringOpen((v) => !v)}
          >
            <span className="navButtonText">
              <Eye className="buttonIcon" />
              Internship Monitoring
            </span>
            <span className={`arrow ${isInternshipMonitoringOpen ? "open" : ""}`}>
              <ChevronRight />
            </span>
          </button>
          {isInternshipMonitoringOpen && (
            <ul className="submenu">
              <li>
                <NavLink to="/admin-internship-monitoring" className="submenuLink">
                  Monitoring Dashboard
                </NavLink>
              </li>
            </ul>
          )}
        </div>

        {/* 6. Logbook Management */}
        <NavLink to="/admin-logbook-management" className="navLink">
          <BookOpen className="navIcon" />
          Logbook Management
        </NavLink>

        {/* 7. Evaluation Management */}
        <NavLink to="/admin-evaluation-management" className="navLink">
          <ClipboardCheck className="navIcon" />
          Evaluation Management
        </NavLink>

        {/* 8. Reports & Analytics */}
        <NavLink to="/admin-reports-analytics" className="navLink">
          <BarChart3 className="navIcon" />
          Reports & Analytics
        </NavLink>

        {/* 9. Communication (with submenu) */}
        <div className="navItem">
          <button
            type="button"
            className="navButton"
            onClick={() => setIsCommunicationOpen((v) => !v)}
          >
            <span className="navButtonText">
              <MessageSquare className="buttonIcon" />
              Communication
            </span>
            <span className={`arrow ${isCommunicationOpen ? "open" : ""}`}>
              <ChevronRight />
            </span>
          </button>
          {isCommunicationOpen && (
            <ul className="submenu">
              <li>
                <NavLink to="/admin-messages" className="submenuLink">
                  Messages
                </NavLink>
              </li>
            </ul>
          )}
        </div>

        {/* 10. Notifications */}
        <NavLink to="/admin-notifications" className="navLink">
          <Bell className="navIcon" />
          Notifications
        </NavLink>

        {/* 11. User Management */}
        <NavLink to="/admin-user-management" className="navLink">
          <Users className="navIcon" />
          User Management
        </NavLink>

        {/* 12. System Settings (with submenu) */}
        <div className="navItem">
          <button
            type="button"
            className="navButton"
            onClick={() => setIsSystemSettingsOpen((v) => !v)}
          >
            <span className="navButtonText">
              <Settings className="buttonIcon" />
              System Settings
            </span>
            <span className={`arrow ${isSystemSettingsOpen ? "open" : ""}`}>
              <ChevronRight />
            </span>
          </button>
          {isSystemSettingsOpen && (
            <ul className="submenu">
              <li>
                <NavLink to="/admin-system-settings" className="submenuLink">
                  General Settings
                </NavLink>
              </li>
            </ul>
          )}
        </div>

        {/* 13. Profile (with submenu) */}
        <div className="navItem">
          <button
            type="button"
            className="navButton"
            onClick={() => setIsProfileOpen((v) => !v)}
          >
            <span className="navButtonText">
              <User className="buttonIcon" />
              Profile
            </span>
            <span className={`arrow ${isProfileOpen ? "open" : ""}`}>
              <ChevronRight />
            </span>
          </button>
          {isProfileOpen && (
            <ul className="submenu">
              <li>
                <NavLink to="/admin-profile" className="submenuLink">
                  My Profile
                </NavLink>
              </li>
            </ul>
          )}
        </div>

        {/* Logout */}
        <button
          type="button"
          className="navButton logoutButton"
          onClick={handleLogout}
        >
          <span className="navButtonText">
            <LogOut className="buttonIcon" />
            Logout
          </span>
        </button>
      </nav>
    </div>
  );
}
