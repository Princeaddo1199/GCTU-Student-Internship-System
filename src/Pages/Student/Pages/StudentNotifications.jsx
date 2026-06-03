import React, { useMemo, useState } from "react";
import "../Styles/StudentNotifications.css";
import {
  Bell,
  Check,
  Clock,
  MessageSquare,
  FileText,
  AlertTriangle,
  MoreVertical,
} from "lucide-react";

const initialNotifications = [
  {
    id: "n1",
    title: "Logbook entry approved",
    message:
      "Your logbook entry for March 12 has been approved by your industry supervisor.",
    timeAgo: "2h ago",
    group: "new",
    read: false,
    tone: "success",
    Icon: Check,
  },
  {
    id: "n2",
    title: "New message from Dr. Ama Mensah",
    message: "Please submit your weekly report by Friday.",
    timeAgo: "5h ago",
    group: "new",
    read: false,
    tone: "info",
    Icon: MessageSquare,
  },
  {
    id: "n3",
    title: "Attendance alert",
    message: "You missed check-in on March 10. Please provide a reason.",
    timeAgo: "1d ago",
    group: "new",
    read: false,
    tone: "warning",
    Icon: AlertTriangle,
  },
  {
    id: "n4",
    title: "Evaluation completed",
    message: "Your industry supervisor has submitted a new evaluation.",
    timeAgo: "3d ago",
    group: "earlier",
    read: true,
    tone: "neutral",
    Icon: FileText,
  },
  {
    id: "n5",
    title: "System update",
    message: "New features have been added to the activity logbook.",
    timeAgo: "3d ago",
    group: "earlier",
    read: true,
    tone: "neutral",
    Icon: Bell,
  },
  {
    id: "n6",
    title: "Weekly report submitted",
    message: "Your Week 6 report has been successfully submitted.",
    timeAgo: "5d ago",
    group: "earlier",
    read: true,
    tone: "success",
    Icon: Check,
  },
  {
    id: "n7",
    title: "Message from Admin Office",
    message: "Internship orientation schedule has been updated.",
    timeAgo: "1w ago",
    group: "earlier",
    read: true,
    tone: "info",
    Icon: MessageSquare,
  },
  {
    id: "n8",
    title: "Deadline reminder",
    message: "Final internship report is due in 3 weeks.",
    timeAgo: "1w ago",
    group: "earlier",
    read: true,
    tone: "warning",
    Icon: Clock,
  },
];

export default function StudentNotifications() {
  const [activeTab, setActiveTab] = useState("all"); // all | new | earlier
  const [items, setItems] = useState(initialNotifications);

  const newCount = useMemo(
    () => items.filter((n) => n.group === "new" && !n.read).length,
    [items],
  );

  const filtered = useMemo(() => {
    if (activeTab === "new") return items.filter((n) => n.group === "new");
    if (activeTab === "earlier")
      return items.filter((n) => n.group === "earlier");
    return items;
  }, [activeTab, items]);

  const markAllRead = () => {
    setItems((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  const sections = useMemo(() => {
    const byGroup = filtered.reduce(
      (acc, n) => {
        acc[n.group].push(n);
        return acc;
      },
      { new: [], earlier: [] },
    );
    return byGroup;
  }, [filtered]);

  return (
    <div className="notifPage">
      <div className="notifHeaderRow">
        <div>
          <h2 className="notifTitle">Notifications</h2>
          <p className="notifSubtitle">
            Alerts for feedback, approvals, and system updates
          </p>
        </div>

        <div className="notifHeaderActions">
          <div className="notifCount">{newCount} new</div>
          <button type="button" className="notifMarkAll" onClick={markAllRead}>
            <Check size={16} />
            Mark all read
          </button>
        </div>
      </div>

      <div className="notifTabs">
        <button
          type="button"
          className={`notifTab ${activeTab === "all" ? "active" : ""}`}
          onClick={() => setActiveTab("all")}
        >
          All
        </button>
        <button
          type="button"
          className={`notifTab ${activeTab === "new" ? "active" : ""}`}
          onClick={() => setActiveTab("new")}
        >
          New ({newCount})
        </button>
        <button
          type="button"
          className={`notifTab ${activeTab === "earlier" ? "active" : ""}`}
          onClick={() => setActiveTab("earlier")}
        >
          Earlier
        </button>
      </div>

      {activeTab !== "earlier" && sections.new.length > 0 && (
        <div className="notifSection">
          <div className="notifSectionLabel">NEW</div>
          <div className="notifList">
            {sections.new.map((n) => (
              <NotificationItem key={n.id} n={n} />
            ))}
          </div>
        </div>
      )}

      {activeTab !== "new" && sections.earlier.length > 0 && (
        <div className="notifSection">
          <div className="notifSectionLabel">EARLIER</div>
          <div className="notifList">
            {sections.earlier.map((n) => (
              <NotificationItem key={n.id} n={n} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function NotificationItem({ n }) {
  const Icon = n.Icon;

  return (
    <div className={`notifItem ${n.read ? "read" : "unread"}`}>
      <div className={`notifAccent ${n.tone}`} aria-hidden="true" />

      <div className="notifBody">
        <div className="notifTopRow">
          <div className="notifLeft">
            <div className={`notifIcon ${n.tone}`}>
              <Icon size={16} />
            </div>
            <div className="notifText">
              <div className="notifItemTitle">{n.title}</div>
              <div className="notifItemMsg">{n.message}</div>
            </div>
          </div>

          <div className="notifRight">
            <div className="notifTime">{n.timeAgo}</div>
            <button
              type="button"
              className="notifMenu"
              onClick={() => alert("More actions coming soon")}
              aria-label="More actions"
            >
              <MoreVertical size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

