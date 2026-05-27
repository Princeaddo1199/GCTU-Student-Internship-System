import React from 'react';
import '../STYLES/FeedbackCard.css';
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

export default function IndustryFeedbackCard({ studentName, company, supervisorName, date, comment, rating }) {
  return (
    <div className="feedbackCard">
      <div className="feedbackCardHeader">
        <div className="feedbackCardHeaderLeft">
          <span className="feedbackCardStudentName">{studentName}</span>
          <span className="feedbackCardTypeBadge">{company}</span>
        </div>
        <div className="feedbackCardRating">
          {[...Array(5)].map((_, index) => {
            const starNumber = index + 1;
            if (rating >= starNumber) {
              return <FaStar key={index} color="#ffc107" />;
            } else if (rating >= starNumber - 0.5) {
              return <FaStarHalfAlt key={index} color="#ffc107" />;
            } else {
              return <FaRegStar key={index} color="#e4e5e9" />;
            }
          })}
        </div>
      </div>
      <div className="feedbackCardDate">By {supervisorName} - {date}</div>
      <div className="feedbackCardComment">{comment}</div>
    </div>
  );
}
