import React, { useState } from "react";
import { GraduationCap, Lock, User } from "lucide-react";
import "../STYLES/Profile.css";
import studentTable from "../Data/studentTable.json";

export default function Profile() {
  const [activeView, setActiveView] = useState("personalInformation");
  const studentsAssigned = studentTable.length;
  return (
    <>
      <div className="supervisorFeedbackTitle">
        <h2 className="supervisorFeedbackTitleMain">Profile</h2>
        <p className="supervisorFeedbackTitleSub">
          View and manage your profile information
        </p>
      </div>
      <div className="profileTabs">
        <button
          type="button"
          className={`profileTabButton ${activeView === "personalInformation" ? "active" : ""}`}
          onClick={() => setActiveView("personalInformation")}
        >
          Personal Information
        </button>
        <button
          type="button"
          className={`profileTabButton ${activeView === "changePassword" ? "active" : ""}`}
          onClick={() => setActiveView("changePassword")}
        >
          Change Password
        </button>
      </div>

      {activeView === "personalInformation" ? (
        <div className="personalInformationPageMain">
          <div className="subTitle">
            <User size={16} />
            <p style={{ fontWeight: "bold", fontSize: "16px" }}>
              Personal Details
            </p>
          </div>
          <div className="personDetailsContainer">
            <div className="detailsWrapperRow1">
              <div className="fullName">
                <label htmlFor="full-name" style={{ fontSize: "14px" }}>
                  Full Name
                </label>
                <div className="inputContainer">
                  <input
                    type="text"
                    placeholder="Prof. Ama Boateng"
                    className="profileInputs"
                  />
                </div>
              </div>
              <div className="email">
                <label htmlFor="email" style={{ fontSize: "14px" }}>
                  Email
                </label>
                <div className="inputContainer">
                  <input
                    type="email"
                    placeholder="a.boateng@gctu.edu.gh"
                    className="profileInputs"
                    disabled
                  />
                </div>
              </div>
            </div>
            <div className="detailsWrapperRow2">
              <div className="phone">
                <label htmlFor="phone" style={{ fontSize: "14px" }}>
                  Phone Number
                </label>
                <div className="inputContainer">
                  <input
                    type="text"
                    placeholder="+233 24 123 4567"
                    className="profileInputs"
                  />
                </div>
              </div>
              <div className="staffId">
                <label htmlFor="staffId" style={{ fontSize: "14px" }}>
                  Staff ID
                </label>
                <div className="inputContainer">
                  <input
                    type="text"
                    placeholder="GCTU-ACS-042"
                    className="profileInputs"
                    disabled
                  />
                </div>
              </div>
            </div>
            <div className="detailsWrapperRow3">
              <div className="department">
                <label htmlFor="department" style={{ fontSize: "14px" }}>
                  Department
                </label>
                <div className="inputContainer">
                  <input
                    type="text"
                    placeholder="Computer Science"
                    className="profileInputs"
                  />
                </div>
              </div>
              <div className="faculty">
                <label htmlFor="faculty" style={{ fontSize: "14px" }}>
                  Faculty
                </label>
                <div className="inputContainer">
                  <input
                    className="profileInputs"
                    type="text"
                    placeholder="Faculty of Computing and IT"
                    disabled
                  />
                </div>
              </div>
            </div>
            <div className="roleContainer">
              <div className="left">
                <GraduationCap size={16} />
              </div>
              <div className="right">
                <p>Academic Supervisor</p>
                <div className="studentAssined">
                  <p style={{ fontSize: "11px", fontWeight: "normal" }}>
                    {studentsAssigned} students assigned
                  </p>
                  <p style={{ fontSize: "11px", fontWeight: "normal" }}>
                    2026 Internship Cycle
                  </p>
                </div>
              </div>
            </div>
            <button
              className="saveChangesBtn"
              onClick={() =>
                alert("Save changes logic to update the details goes here")
              }
            >
              Save Changes
            </button>
          </div>
        </div>
      ) : (
        <div className="personalInformationPageMain">
          <div className="subTitle">
            <Lock size={16} />
            <p style={{ fontWeight: "bold", fontSize: "16px" }}>
              Personal Details
            </p>
          </div>
          <div className="personDetailsContainer">
            <div className="fullName">
              <label htmlFor="full-name" style={{ fontSize: "14px" }}>
                Current Password
              </label>
              <div className="inputContainer">
                <input
                  type="password"
                  placeholder=""
                  className="passwordChangeInputs"
                />
              </div>
            </div>
            <div className="email">
              <label htmlFor="email" style={{ fontSize: "14px" }}>
                New Password
              </label>
              <div className="inputContainer">
                <input
                  type="password"
                  placeholder=""
                  className="passwordChangeInputs"
                />
              </div>
            </div>
            <div className="email">
              <label htmlFor="email" style={{ fontSize: "14px" }}>
                Confirm New Password
              </label>
              <div className="inputContainer">
                <input
                  type="email"
                  placeholder=""
                  className="passwordChangeInputs"
                />
              </div>
            </div>
            <button
              className="updatePasswordBtn"
              onClick={() =>
                alert("Update password logic to update the password of supervisor goes here")
              }
            >
              Update Password
            </button>
          </div>
        </div>
      )}
    </>
  );
}
