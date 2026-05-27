import React from "react";
import "../STYLES/ApproveLogbookCard.css";
import LogbookManagementCard from "./LogbookManagementCard";
import { CircleCheckBig, CircleX } from "lucide-react";

export default function ApproveLogbookCard({ entry, studentName, onApprove, onReject }) {
  return (
    <LogbookManagementCard
      title={entry.title}
      description={entry.description}
      studentName={studentName}
      date={entry.date}
      showStatus={false}
      actions={
        <div className="approveLogbookActionButtons">
          <button
            type="button"
            className="approveLogbookActionButton approve"
            onClick={onApprove}
          >
            <CircleCheckBig size={16} style={{marginRight: "5px"}}/>
            Approve
          </button>
          <button
            type="button"
            className="approveLogbookActionButton reject"
            onClick={onReject}
          >
            <CircleX size={16} style={{marginRight: "5px"}}/>
            Reject
          </button>
        </div>
      }
    />
  );
}
