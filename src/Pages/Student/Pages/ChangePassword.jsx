import React, { useState } from "react";
import "../Styles/PersonalInformation.css";
import { Lock, Sparkles } from "lucide-react";

export default function ChangePassword() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

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

  return (
    <div className="personalInfoPage">
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

      {showToast && (
        <div className="successToast">
          <Sparkles size={16} />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
