import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../STYLES/Sidebar.css";
import { ChevronRight, LayoutDashboard, Briefcase } from "lucide-react";

export default function Sidebar() {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const toggleSubmenu = () => {
    setIsSubmenuOpen(!isSubmenuOpen);
  };

  return (
    <div className="sidebarLayoutMain">
      <nav className="sidebarNav">
        <NavLink to="/dashboard" className="navLink">
          <LayoutDashboard className="navIcon" />
          Dashboard
        </NavLink>

        <div className="navItem">
          <button className="navButton" onClick={toggleSubmenu}>
            <Briefcase className="buttonIcon" />
            My Internship
            <span className={`arrow ${isSubmenuOpen ? "open" : ""}`}>
              <ChevronRight />
            </span>
          </button>
          {isSubmenuOpen && (
            <ul className="submenu">
              <li>
                <NavLink to="/internship-details" className="submenuLink">
                  Internship Details
                </NavLink>
              </li>
              <li>
                <NavLink to="/placement-information" className="submenuLink">
                  Placement Information
                </NavLink>
              </li>
              <li>
                <NavLink to="/internship-guidelines" className="submenuLink">
                  Internship Guidelines
                </NavLink>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
}
