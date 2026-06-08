import React, { useState, useMemo } from "react";
import "../Styles/IndustrySupervisor.css";
import {
  Star,
  Calendar,
  Clock,
  Inbox,
  CheckCheck,
  User
} from "lucide-react";

const INITIAL_FEEDBACK = [
  {
    id: 1,
    supervisorName: "Michael Osei",
    role: "Industry",
    date: "Mar 12, 2026",
    time: "2:30 PM",
    comment: "Excellent teamwork and initiative shown during the sprint. Very pleased with your contributions.",
    rating: 5,
    unread: true,
    category: "current",
  },
  {
    id: 2,
    supervisorName: "Michael Osei",
    role: "Industry",
    date: "Feb 28, 2026",
    time: "4:45 PM",
    comment: "Good technical skills demonstrated. Work on communication with the broader team.",
    rating: 4,
    unread: false,
    category: "current",
  },
  {
    id: 3,
    supervisorName: "Michael Osei",
    role: "Industry",
    date: "Jan 20, 2026",
    time: "3:10 PM",
    comment: "Good start at the company. Needs to improve punctuality.",
    rating: 3,
    unread: false,
    category: "past",
  },
];

export default function IndustrySupervisor() {
  const [feedbackList, setFeedbackList] = useState(INITIAL_FEEDBACK);
  const [activeTab, setActiveTab] = useState("all");

  // Count unread items
  const unreadCount = useMemo(() => {
    return feedbackList.filter((item) => item.unread).length;
  }, [feedbackList]);

  // Tab count stats
  const tabCounts = useMemo(() => {
    return {
      all: feedbackList.length,
      current: feedbackList.filter((item) => item.category === "current").length,
      past: feedbackList.filter((item) => item.category === "past").length,
    };
  }, [feedbackList]);

  // Filtered feedback list
  const filteredFeedback = useMemo(() => {
    if (activeTab === "all") return feedbackList;
    return feedbackList.filter((item) => item.category === activeTab);
  }, [feedbackList, activeTab]);

  // Actions
  const handleMarkAllRead = () => {
    setFeedbackList((prev) =>
      prev.map((item) => ({ ...item, unread: false }))
    );
  };

  const handleMarkSingleRead = (id) => {
    setFeedbackList((prev) =>
      prev.map((item) => (item.id === id ? { ...item, unread: false } : item))
    );
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<Star key={i} size={16} className="starFilled" />);
      } else {
        stars.push(<Star key={i} size={16} className="starEmpty" />);
      }
    }
    return stars;
  };

  return (
    <div className="industrySupervisorPage">
      {/* Header section */}
      <div className="feedbackHeaderRow">
        <div className="feedbackTitleInfo">
          <h2>Industry Supervisor Feedback</h2>
          <p className="feedbackSubtitle">Feedback from your industry supervisor</p>
        </div>
        <div className="feedbackHeaderActions">
          {unreadCount > 0 && (
            <span className="newCountText">
              {unreadCount} new
            </span>
          )}
          <button
            type="button"
            className="markAllReadBtn"
            onClick={handleMarkAllRead}
            disabled={unreadCount === 0}
            style={{
              opacity: unreadCount === 0 ? 0.6 : 1,
              cursor: unreadCount === 0 ? "default" : "pointer"
            }}
          >
            <CheckCheck size={16} />
            Mark all read
          </button>
        </div>
      </div>

      {/* Tabs header row */}
      <div className="feedbackTabsRow">
        <div className="tabsList">
          <button
            type="button"
            className={`feedbackTab ${activeTab === "all" ? "active" : ""}`}
            onClick={() => setActiveTab("all")}
          >
            All Feedback
            <span className="tabCountBadge">{tabCounts.all}</span>
          </button>
          <button
            type="button"
            className={`feedbackTab ${activeTab === "current" ? "active" : ""}`}
            onClick={() => setActiveTab("current")}
          >
            Current
            <span className="tabCountBadge">{tabCounts.current}</span>
          </button>
          <button
            type="button"
            className={`feedbackTab ${activeTab === "past" ? "active" : ""}`}
            onClick={() => setActiveTab("past")}
          >
            Past
            <span className="tabCountBadge">{tabCounts.past}</span>
          </button>
        </div>
      </div>

      {/* Feedback items list */}
      <div className="feedbackList">
        {filteredFeedback.length === 0 ? (
          <div className="emptyStateContainer">
            <Inbox size={48} />
            <div className="emptyStateTitle">No Feedback Found</div>
            <p>There is no feedback available in this category.</p>
          </div>
        ) : (
          filteredFeedback.map((item) => (
            <div
              key={item.id}
              className={`feedbackCard ${item.unread ? "unread" : ""}`}
              onClick={() => item.unread && handleMarkSingleRead(item.id)}
            >
              <div className="feedbackCardLeft">
                <div className="avatarWrapper">
                  <div className="avatarIcon">
                    <User size={20} />
                  </div>
                </div>
                <div className="feedbackDetailsWrap">
                  <div className="feedbackMetaRow">
                    <span className="supervisorName">{item.supervisorName}</span>
                    <span className="tagBadge industry">{item.role}</span>
                    {item.unread && (
                      <span className="tagBadge new">New</span>
                    )}
                  </div>
                  <div className="dateRow">
                    <Calendar size={13} />
                    <span>{item.date}</span>
                    <span>at</span>
                    <Clock size={13} style={{ marginLeft: "2px" }} />
                    <span>{item.time}</span>
                  </div>
                  <p className="feedbackComment">{item.comment}</p>
                </div>
              </div>
              <div className="feedbackCardRight">
                <div className="starsContainer">
                  {renderStars(item.rating)}
                </div>
                {item.unread && (
                  <div className="cardActionBtns">
                    <button
                      type="button"
                      className="cardQuickReadBtn"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleMarkSingleRead(item.id);
                      }}
                    >
                      Mark read
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
