import React, { useState } from "react";
import "../Styles/PersonalInformation.css";
import { User, Mail, Phone, Building2, Check, Sparkles } from "lucide-react";

export default function PersonalInformation() {
  const [fullName, setFullName] = useState("Akosua Kwarteng");
  const [email, setEmail] = useState("a.kwarteng@university.edu");
  const [phone, setPhone] = useState("+233 24 123 4567");
  const [department, setDepartment] = useState("Computer Science");
  
  // Notification toast state
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate API update
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  // Get initials for profile bubble
  const getInitials = (name) => {
    return name
      .split(" ")
      .map((part) => part[0])
      .slice(0, 2)
      .join("")
      .toUpperCase();
  };

  return (
    <div className="personalInfoPage">
      {/* Header section */}
      <div className="personalInfoHeader">
        <h2>Personal Information</h2>
        <p className="personalInfoSubtitle">View and update your details</p>
      </div>

      {/* Profile Form Card */}
      <div className="personalInfoCard">
        <form onSubmit={handleSubmit}>
          {/* Avatar and Meta row */}
          <div className="profileHeaderWrap">
            <div className="largeProfileAvatar">
              {getInitials(fullName) || "AK"}
            </div>
            <div className="profileMeta">
              <span className="profileMetaName">{fullName || "Akosua Kwarteng"}</span>
              <span className="profileMetaId">Student ID: STU-2026-0042</span>
            </div>
          </div>

          {/* Form Fields Grid */}
          <div className="formInputsGrid">
            {/* Full Name */}
            <div className="formFieldGroup">
              <div className="formFieldLabelRow">
                <User size={14} />
                <label htmlFor="fullName">Full Name</label>
              </div>
              <input
                type="text"
                id="fullName"
                className="formInput"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>

            {/* Email */}
            <div className="formFieldGroup">
              <div className="formFieldLabelRow">
                <Mail size={14} />
                <label htmlFor="email">Email</label>
              </div>
              <input
                type="email"
                id="email"
                className="formInput"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Phone */}
            <div className="formFieldGroup">
              <div className="formFieldLabelRow">
                <Phone size={14} />
                <label htmlFor="phone">Phone</label>
              </div>
              <input
                type="text"
                id="phone"
                className="formInput"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>

            {/* Department */}
            <div className="formFieldGroup">
              <div className="formFieldLabelRow">
                <Building2 size={14} />
                <label htmlFor="department">Department</label>
              </div>
              <input
                type="text"
                id="department"
                className="formInput"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Save Changes Action */}
          <button type="submit" className="saveChangesBtn">
            Save Changes
          </button>
        </form>
      </div>

      {/* Success Toast */}
      {showToast && (
        <div className="successToast">
          <Sparkles size={16} />
          <span>Changes saved successfully!</span>
        </div>
      )}
    </div>
  );
}
