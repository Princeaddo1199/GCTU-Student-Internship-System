import React from 'react'
import "../STYLES/LogbookManagementCard.css"

export default function LogbookManagementCard({
  title,
  status,
  description,
  studentName,
  date,
  showStatus = true,
  actions,
}) {
  const statusKey = String(status || "").trim().toLowerCase();
  const statusClass =
    statusKey === "approved"
      ? "statusApproved"
      : statusKey === "rejected"
        ? "statusRejected"
        : "statusPending";

  return (
    <div className='logbookManagamentCards'>
      <div className="logbookCardRow">
        <div className="logbookCardMain">
          <div className="entriesTitle">
            <p className='title'>{title}</p>
            {showStatus ? (
              <p className={`status ${statusClass}`}>{status}</p>
            ) : null}
          </div>
          <div className='entriesName'>
            <p className='studentName'>{studentName}</p>
            <p className='date'>{date}</p>
          </div>
          <div className='description'>{description}</div>
        </div>

        {actions ? <div className="logbookCardActions">{actions}</div> : null}
      </div>
    </div>
  )
}
