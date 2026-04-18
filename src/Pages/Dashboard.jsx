import React from "react";
import BigCard from "../Components/BigCard";
import { Building2, CalendarCheck, TriangleAlert, Users } from "lucide-react";
export default function Dashboard() {
  return (
    <div>
      <div className="dashboardTitle">
        <h2 className="dashboardTitleMain">Academic Supervisor Dashboard</h2>
        <p className="dashboardTitleSub">Monitor student internships progress and performance</p>
      </div>
      <div className="dashboard-cards">
        <BigCard
          icon={Users}
          title="Total Interns"
          value="12"
          iconColor={{
            backgroundColor: "#ebeaf0",
          }}
        />
        <BigCard
          icon={CalendarCheck}
          title="Pending Evaluations"
          value="4"
          iconColor={{
            backgroundColor: "#ebeaf0",
          }}
        />
        <BigCard
          icon={Building2}
          title="Companies"
          value="8"
          iconColor={{
            backgroundColor: "#ebeaf0",
          }}
        />
        <BigCard
          icon={TriangleAlert}
          title="Needs Attention"
          value="2"
          iconColor={{
            backgroundColor: "#ebeaf0",
          }}
          AlertNotification="Late submissions"
        />
      </div>
    </div>
  );
}
