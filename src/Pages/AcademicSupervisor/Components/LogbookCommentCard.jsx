import React, { useState } from "react";
import "../STYLES/LogbookCommentCard.css";
import { MessageSquare } from "lucide-react";

export default function LogbookCommentCard({ entry, studentName, onSubmitComment }) {
  const [comment, setComment] = useState("");

  const handleSubmit = () => {
    const trimmed = comment.trim();
    if (!trimmed) return;
    onSubmitComment?.(trimmed);
    setComment("");
  };

  return (
    <div className="logbookCommentCard">
      <div className="logbookCommentHeader">
        <p className="logbookCommentTitle">{entry.title}</p>
        <p className="logbookCommentStudent">{studentName}</p>
      </div>

      <p className="logbookCommentDescription">{entry.description}</p>

      <textarea
        className="logbookCommentTextarea"
        placeholder="Write your comment..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        rows={4}
      />

      <button
        type="button"
        className="logbookCommentSubmit"
        onClick={handleSubmit}
        disabled={!comment.trim()}
      >
        <MessageSquare size={16} style={{marginRight: "5px"}}/>
        Submit Comment
      </button>
    </div>
  );
}
