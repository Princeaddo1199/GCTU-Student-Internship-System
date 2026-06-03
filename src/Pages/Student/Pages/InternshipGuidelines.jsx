import React from "react";
import "../Styles/InternshipGuidelines.css";
import { Info, Shield, ClipboardCheck, BookOpen, MessageCircle, Award } from "lucide-react";

export default function InternshipGuidelines() {
  return (
    <div className="guidelinesPage">
      <div className="guidelinesHeader">
        <h2 className="guidelinesTitle">Internship Guidelines</h2>
        <p className="guidelinesSubtitle">
          University policies and instructions for your internship
        </p>
      </div>

      <section className="guidelinesGrid">
        <div className="guidelinesCard">
          <div className="guidelinesCardHead">
            <span className="guidelinesIcon">
              <ClipboardCheck size={16} />
            </span>
            <div className="guidelinesCardTitle">Attendance Policy</div>
          </div>
          <div className="guidelinesCardBody">
            Students must maintain a minimum of 80% attendance throughout the
            internship period. Daily check-in and check-out is required.
          </div>
        </div>

        <div className="guidelinesCard">
          <div className="guidelinesCardHead">
            <span className="guidelinesIcon">
              <BookOpen size={16} />
            </span>
            <div className="guidelinesCardTitle">Logbook Submission</div>
          </div>
          <div className="guidelinesCardBody">
            Activity logbook entries must be submitted weekly. Late submissions
            may affect final evaluation scores.
          </div>
        </div>

        <div className="guidelinesCard">
          <div className="guidelinesCardHead">
            <span className="guidelinesIcon">
              <Award size={16} />
            </span>
            <div className="guidelinesCardTitle">Professional Conduct</div>
          </div>
          <div className="guidelinesCardBody">
            Students are expected to maintain professional conduct, adhere to
            company policies, and dress appropriately.
          </div>
        </div>

        <div className="guidelinesCard">
          <div className="guidelinesCardHead">
            <span className="guidelinesIcon">
              <MessageCircle size={16} />
            </span>
            <div className="guidelinesCardTitle">Supervisor Communication</div>
          </div>
          <div className="guidelinesCardBody">
            Students must respond to supervisor feedback within 48 hours and
            schedule regular check-in meetings.
          </div>
        </div>

        <div className="guidelinesCard">
          <div className="guidelinesCardHead">
            <span className="guidelinesIcon">
              <FileTextIcon />
            </span>
            <div className="guidelinesCardTitle">Final Report</div>
          </div>
          <div className="guidelinesCardBody">
            A comprehensive internship report must be submitted at least one
            week before the end of the internship period.
          </div>
        </div>

        <div className="guidelinesCard">
          <div className="guidelinesCardHead">
            <span className="guidelinesIcon">
              <Shield size={16} />
            </span>
            <div className="guidelinesCardTitle">Confidentiality</div>
          </div>
          <div className="guidelinesCardBody">
            Students must respect the confidentiality of company information and
            sign any required NDAs.
          </div>
        </div>
      </section>

      <section className="guidelinesNotice">
        <div className="guidelinesNoticeHead">
          <span className="guidelinesNoticeIcon">
            <Info size={16} />
          </span>
          <div className="guidelinesNoticeTitle">Important Notice</div>
        </div>
        <div className="guidelinesNoticeBody">
          Failure to comply with these guidelines may result in a deduction of
          marks or termination of the internship placement. Contact your
          academic supervisor for any clarifications.
        </div>
      </section>
    </div>
  );
}

function FileTextIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7l-5-5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 2v5h5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 13h6M9 17h6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
