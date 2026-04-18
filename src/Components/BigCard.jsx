import React from "react";
import "../STYLES/BigCard.css";

export default function BigCard({
  icon: Icon,
  title,
  value,
  iconColor,
  iconColorValue,
  AlertNotification,
}) {
  return (
    <div className="big-card">
      <div className="left">
        <p className="card-title">{title}</p>
        <h3 className="card-value">{value}</h3>
        {AlertNotification && <p className="card-alert">{AlertNotification}</p>}
      </div>
      <div className="right">
        <div style={iconColor} className="icon-big-card">
          <Icon className="card-icon" style={{ color: iconColorValue }} />
        </div>
      </div>
    </div>
  );
}
