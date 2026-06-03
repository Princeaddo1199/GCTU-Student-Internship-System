import React, { useMemo, useRef, useState } from "react";
import "../Styles/TasksAttachments.css";
import { FileText, Upload } from "lucide-react";

export default function TasksAttachments() {
  const [activeTab, setActiveTab] = useState("upload"); // upload | view
  const inputRef = useRef(null);

  const uploads = useMemo(
    () => [
      {
        id: "wk6",
        name: "Week_6_Report.pdf",
        meta: "1.2 MB • Mar 13, 2026 at 10:52 AM",
        status: "Submitted",
        tone: "submitted",
      },
      {
        id: "wk7",
        name: "Week_7_Report.pdf",
        meta: "1.1 MB • Mar 12, 2026 at 9:18 AM",
        status: "Draft",
        tone: "draft",
      },
      {
        id: "api-doc",
        name: "API_Documentation.docx",
        meta: "813 KB • Mar 11, 2026 at 9:47 AM",
        status: "Submitted",
        tone: "submitted",
      },
    ],
    [],
  );

  const pickFiles = () => inputRef.current?.click();

  const onFilesSelected = (e) => {
    // Placeholder: hook this to your backend later.
    const count = e.target.files?.length ?? 0;
    if (count > 0) alert(`Selected ${count} file(s). Upload integration pending.`);
    e.target.value = "";
  };

  return (
    <div className="tasksPage">
      <div className="tasksHeader">
        <h2 className="tasksTitle">Tasks & Attachments</h2>
        <p className="tasksSubtitle">Upload internship tasks and manage your files</p>
      </div>

      <div className="tasksTabs">
        <button
          type="button"
          className={`tasksTab ${activeTab === "upload" ? "active" : ""}`}
          onClick={() => setActiveTab("upload")}
        >
          <Upload size={16} />
          Upload Tasks
        </button>
        <button
          type="button"
          className={`tasksTab ${activeTab === "view" ? "active" : ""}`}
          onClick={() => setActiveTab("view")}
        >
          <FileText size={16} />
          View Files
        </button>
      </div>

      {activeTab === "upload" ? (
        <section className="tasksDropzoneCard">
          <div
            className="tasksDropzone"
            role="button"
            tabIndex={0}
            onClick={pickFiles}
            onKeyDown={(e) => (e.key === "Enter" ? pickFiles() : null)}
          >
            <div className="tasksUploadIcon">
              <Upload size={20} />
            </div>
            <div className="tasksDropTitle">Drop files here or click to upload</div>
            <div className="tasksDropHint">PDF, DOC, DOCX, Images up to 10MB</div>
          </div>

          <input
            ref={inputRef}
            type="file"
            multiple
            accept=".pdf,.doc,.docx,image/*"
            style={{ display: "none" }}
            onChange={onFilesSelected}
          />

          <button
            type="button"
            className="tasksSubmitBtn"
            onClick={() => alert("Submit flow coming soon")}
          >
            Submit Entry
          </button>
        </section>
      ) : (
        <section className="tasksDropzoneCard">
          <div className="tasksViewNotice">
            Your uploaded files will appear here. (Hook to your API when ready.)
          </div>
        </section>
      )}

      <section className="tasksRecentCard">
        <div className="tasksRecentHeader">Recent Uploads</div>
        <div className="tasksRecentList">
          {uploads.map((u) => (
            <div key={u.id} className="tasksRecentItem">
              <div className="tasksRecentLeft">
                <div className="tasksFileIcon">
                  <FileText size={16} />
                </div>
                <div className="tasksFileMeta">
                  <div className="tasksFileName">{u.name}</div>
                  <div className="tasksFileSub">{u.meta}</div>
                </div>
              </div>
              <span className={`tasksBadge ${u.tone}`}>{u.status}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

