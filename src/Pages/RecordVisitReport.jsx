import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../STYLES/RecordVisitReport.css";
import Students from "../Data/studentTable.json";
import { CalendarDays } from "lucide-react";

export default function RecordVisitReport() {
  const [selectedId, setSelectedId] = useState("");
  const [visitType, setVisitType] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
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
        <p className="subTitle">New Visit Report</p>
        <div className="inputSection">
          <div className="selectStudent">
            <label htmlFor="student">Student</label>
            <select
              className="selectContainer"
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
              className="selectContainer"
              value={visitType}
              onChange={(e) => setVisitType(e.target.value)}
            >
              <option value="">Visit Type</option>
              <option value="Mid-Term">Mid-Term</option>
              <option value="Final">Final</option>
              <option value="Other">Other</option>
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
                className="selectContainer"
                placeholderText="mm/dd/yyyy"
                dateFormat="MM/dd/yyyy"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
