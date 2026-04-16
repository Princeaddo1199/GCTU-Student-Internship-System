import React from "react";
import "../STYLES/Searchbar.css";
import {
  Bell,
  Globe,
  MessageSquare,
  PanelLeft,
  Search,
  Settings,
} from "lucide-react";

export default function Searchbar() {
  return (
    <div className="mainSearchbarContainer">
      <div className="sideBarToggle">
        <PanelLeft size={18} />
      </div>
      <div className="searchbarMessage">
        <p style={{ color: "#8894A2", marginRight: "20px" }}>
          Welcome To{" "}
          <span style={{ color: "#000", fontWeight: "bold" }}>
            Intern Track
          </span>
        </p>
      </div>
      <div className="searchbarContainer">
        <Search
          color="#8894a2"
          size={20}
          style={{ marginLeft: "10px", marginRight: "10px" }}
        />
        <div className="searchbar">
          <input type="text" placeholder="Search...." />
        </div>
      </div>
      <div className="settings">
        <Settings size={20} color="#8894a2" />
      </div>
      <div className="selectLanguage">
        <Globe size={16} color="#8894a2" />
        English
      </div>
      <div className="messages">
        <MessageSquare
          size={16}
          color="#8894a2"
          style={{ fontWeight: "bold" }}
        />
      </div>
      <div className="notifications">
        <Bell size={16} color="#8894a2" />
      </div>
      <div className="searchbarProfile">
        <div className="profileIcon">
          <p>PA</p>
        </div>
        <div>
          <p style={{ fontWeight: "bold" }}>Prof Ama Boateng</p>
          <p style={{ color: "#8894a2" }}>Academic Supervisor</p>
        </div>
      </div>
    </div>
  );
}
