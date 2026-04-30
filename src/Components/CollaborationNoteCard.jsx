import React from 'react';
import '../STYLES/CollaborationNoteCard.css';
import { FaRegBuilding } from "react-icons/fa";

export default function CollaborationNoteCard({ supervisorName, company, title, date, comment }) {
  return (
    <div className="collaborationNoteCard">
      <div className="collaborationNoteCardHeader">
        <FaRegBuilding className="collaborationNoteCardIcon" />
        <span className="collaborationNoteCardSupervisor">{supervisorName}</span>
        <span className="collaborationNoteCardCompany">({company})</span>
      </div>
      <div className="collaborationNoteCardTitle">{title}</div>
      <div className="collaborationNoteCardDate">{date}</div>
      <div className="collaborationNoteCardComment">{comment}</div>
    </div>
  );
}
