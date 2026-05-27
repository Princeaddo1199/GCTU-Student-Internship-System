import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../STYLES/RecordVisitReport.css";
import Students from "../Data/studentTable.json";
import { CalendarDays, MapPin } from "lucide-react";

export default function RecordVisitReport() {
  const [selectedId, setSelectedId] = useState("");
  const [visitType, setVisitType] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [comments, setComments] = useState("");
  // const student = Students.find((s) => s.id === parseInt(selectedId));

  return (
    <>
      <div className="industryReportsTitle">
        <h2 className="industryReportsTitleMain">Visit Reports</h2>
        <p className="industryReportsTitleSub">
          Record internship visit documentation
        </p>
      </div>
      <div className="recordVisitReportPageMain">
        <div
          style={{
            display: "flex",
            gap: "10px",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <MapPin size={18} />
          <p className="subTitle">New Visit Report</p>
        </div>
        <div className="inputSection">
          <div className="selectStudent">
            <label htmlFor="student">Student</label>
            <select
              className="selectStudentContainer"
              value={selectedId}
              onChange={(e) => setSelectedId(e.target.value)}
            >
              <option value="">Select Student</option>
              {Students.map((student) => (
                <option key={student.id} value={student.id}>
                  {student.student}
                </option>
              ))}
            </select>
          </div>
          <div className="visitType">
            <label htmlFor="visit type">Visit type</label>
            <select
              className="selectVisitContainer"
              value={visitType}
              onChange={(e) => setVisitType(e.target.value)}
            >
              <option value="">Visit Type</option>
              <option value="Physical">Physical</option>
              <option value="Virtual">Virtual</option>
            </select>
          </div>
        </div>
        <div className="inputSection" style={{ marginTop: "20px" }}>
          <div className="visitDate">
            <label htmlFor="visit date">Visit Date</label>
            <div className="datePickerWrapper">
              <DatePicker
                showIcon
                icon={<CalendarDays />}
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                className="datePickerContainer"
                placeholderText="mm/dd/yyyy"
                dateFormat="MM/dd/yyyy"
              />
            </div>
          </div>
        </div>
        <div className="observationArea">
          <p style={{ marginTop: "30px" }}>Observations & Recommendations</p>
          <textarea
            className="commentsArea"
            placeholder="Observations and recommendations..."
            rows="8"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
          />
        </div>
        <div className="actionsArea">
          <p style={{ marginTop: "30px" }}>Action Items</p>
          <textarea
            className="actionItemsArea"
            placeholder="Action Items (If any...)"
            rows="8"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
          />
        </div>
        <div className="attachmentsArea">
          <p style={{ marginTop: "30px" }}>Attachments</p>
          <div className="uploadArea">
            <p style={{ textAlign: "center" }}>
              Drag & drop files here of click to browse <br />
              Supports PDF, Images, and documents (max 10mb)
            </p>
            <button
              className="uploadFilesButton"
              onClick={() => alert("Upload Files logic will go here")}
            >
              Choose Files
            </button>
          </div>
        </div>
        <button
          className="submitVisitBtn"
          type="button"
          onClick={() => alert("Submit Evaluation logic goes here")}
        >
          Submit Visit Report
        </button>
      </div>
      <div className="recentVisits">
        <p>Recent Visits</p>
      </div>
    </>
  );
}
