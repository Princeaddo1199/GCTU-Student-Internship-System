import React, { useState } from "react";
import "../Styles/PersonalInformation.css";
import { User, Mail, Phone, Building2, Lock, Sparkles } from "lucide-react";

export default function PersonalInformation() {
  const [fullName, setFullName] = useState("Akosua Kwarteng");
  const [email, setEmail] = useState("a.kwarteng@university.edu");
  const [phone, setPhone] = useState("+233 24 123 4567");
  const [department, setDepartment] = useState("Computer Science");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setToastMessage("Changes saved successfully!");
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setToastMessage("New passwords do not match.");
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
      return;
    }

    setToastMessage("Password updated successfully!");
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
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
                disabled
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
                disabled
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
                disabled
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
                disabled
              />
            </div>
          </div>

          {/* Save Changes Action */}
          <button type="submit" className="saveChangesBtn">
            Save Changes
          </button>
        </form>
      </div>

      <div className="changePasswordSection">
        <div className="changePasswordHeader">
          <h2>Change Password</h2>
          <p className="changePasswordSubtitle">Update your account password</p>
        </div>

        <div className="personalInfoCard">
          <form onSubmit={handlePasswordSubmit}>
            <div className="passwordFieldsStack">
              <div className="formFieldGroup">
                <div className="formFieldLabelRow">
                  <Lock size={14} />
                  <label htmlFor="currentPassword">Current Password</label>
                </div>
                <input
                  type="password"
                  id="currentPassword"
                  className="formInput"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  placeholder="Enter current password"
                  required
                />
              </div>

              <div className="formFieldGroup">
                <div className="formFieldLabelRow">
                  <Lock size={14} />
                  <label htmlFor="newPassword">New Password</label>
                </div>
                <input
                  type="password"
                  id="newPassword"
                  className="formInput"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Enter new password"
                  required
                />
              </div>

              <div className="formFieldGroup">
                <div className="formFieldLabelRow">
                  <Lock size={14} />
                  <label htmlFor="confirmPassword">Confirm New Password</label>
                </div>
                <input
                  type="password"
                  id="confirmPassword"
                  className="formInput"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm new password"
                  required
                />
              </div>
            </div>

            <button type="submit" className="saveChangesBtn">
              Update Password
            </button>
          </form>
        </div>
      </div>

      {showToast && (
        <div className="successToast">
          <Sparkles size={16} />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
