import React, { useMemo, useRef, useState } from "react";
import "../Styles/InternshipReport.css";
import { CheckCircle2, Eye, FileText, Upload } from "lucide-react";

export default function InternshipReport() {
  const [activeTab, setActiveTab] = useState("submit"); // submit | status
  const [reflections, setReflections] = useState("");
  const [recommendations, setRecommendations] = useState("");
  const [selectedFileName, setSelectedFileName] = useState("");
  const fileRef = useRef(null);

  const submissions = useMemo(
    () => [
      {
        id: "s1",
        title: "Final Internship Report",
        filename: "Final_Report.pdf",
        submittedAt: "Mar 13, 2026 at 10:52 AM",
        status: "Submitted",
        tone: "submitted",
      },
      {
        id: "s2",
        title: "Final Internship Report",
        filename: "Final_Report_v2.pdf",
        submittedAt: "Mar 14, 2026 at 08:15 AM",
        status: "Under Review",
        tone: "review",
      },
    ],
    [],
  );

  const pickFile = () => fileRef.current?.click();

  const onFileSelected = (e) => {
    const file = e.target.files?.[0];
    setSelectedFileName(file?.name ?? "");
  };

  const submitFinal = () => {
    alert("Submit flow coming soon");
  };

  return (
    <div className="reportPage">
      <div className="reportHeader">
        <h2 className="reportTitle">Internship Report</h2>
        <p className="reportSubtitle">
          Submit your final report and track submission status
        </p>
      </div>

      <div className="reportTabs">
        <button
          type="button"
          className={`reportTab ${activeTab === "submit" ? "active" : ""}`}
          onClick={() => setActiveTab("submit")}
        >
          <Upload size={16} />
          Submit Report
        </button>
        <button
          type="button"
          className={`reportTab ${activeTab === "status" ? "active" : ""}`}
          onClick={() => setActiveTab("status")}
        >
          <Eye size={16} />
          View Status
        </button>
      </div>

      {activeTab === "submit" ? (
        <section className="reportCard">
          <div className="reportCardTitle">Final Internship Report</div>

          <div
            className="reportDropzone"
            role="button"
            tabIndex={0}
            onClick={pickFile}
            onKeyDown={(e) => (e.key === "Enter" ? pickFile() : null)}
          >
            <div className="reportUploadIcon">
              <Upload size={20} />
            </div>
            <div className="reportDropMain">Upload Final Report</div>
            <div className="reportDropHint">PDF format, max 20MB</div>
            {selectedFileName ? (
              <div className="reportFilePill">
                <FileText size={14} />
                {selectedFileName}
              </div>
            ) : null}
          </div>

          <input
            ref={fileRef}
            type="file"
            accept=".pdf"
            style={{ display: "none" }}
            onChange={onFileSelected}
          />

          <div className="reportField">
            <div className="reportLabel">Personal Reflections</div>
            <textarea
              className="reportTextarea"
              value={reflections}
              onChange={(e) => setReflections(e.target.value)}
              placeholder="Reflect on your internship experience, key learnings, challenges overcome, and skills developed..."
            />
          </div>

          <div className="reportField">
            <div className="reportLabel">Recommendations</div>
            <textarea
              className="reportTextarea"
              value={recommendations}
              onChange={(e) => setRecommendations(e.target.value)}
              placeholder="Any recommendations for the internship program or future interns..."
            />
          </div>

          <button type="button" className="reportSubmitBtn" onClick={submitFinal}>
            Submit Final Report
          </button>
        </section>
      ) : (
        <section className="reportCard">
          <div className="reportCardTitle">Submission Status</div>
          <div className="reportStatusList">
            {submissions.map((s) => (
              <div key={s.id} className="reportStatusItem">
                <div className="reportStatusLeft">
                  <div className="reportStatusIcon">
                    <FileText size={16} />
                  </div>
                  <div className="reportStatusText">
                    <div className="reportStatusName">{s.filename}</div>
                    <div className="reportStatusMeta">{s.submittedAt}</div>
                  </div>
                </div>
                <span className={`reportBadge ${s.tone}`}>
                  <CheckCircle2 size={14} />
                  {s.status}
                </span>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

