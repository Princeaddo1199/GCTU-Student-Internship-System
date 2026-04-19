import React from "react";
import BigCard from "../Components/BigCard";
import { Building2, CalendarCheck, TriangleAlert, Users } from "lucide-react";
import students from "../Data/studentTable.json";
import { DataGrid } from "@mui/x-data-grid";
import "../STYLES/Dashboard.css";

const columns = [
  { field: "student", headerName: "Student", width: 250 },
  { field: "company", headerName: "Company", width: 200 },
  { field: "progress", headerName: "Progress", width: 110 },
  { field: "lastLog", headerName: "Last Log", width: 160 },
  { field: "risk", headerName: "risk", width: 200 },
];
export default function Dashboard() {
  return (
    <div>
      <div className="dashboardTitle">
        <h2 className="dashboardTitleMain">Academic Supervisor Dashboard</h2>
        <p className="dashboardTitleSub">
          Monitor student internships progress and performance
        </p>
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
      <div className="tableBarContainer">
        <div className="studentsTableContainer">
          <p style={{fontWeight: "bold", fontSize: "20px", marginBottom: "10px"}}>Student Monitoring</p>
          <DataGrid
            rows={students}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { pageSize: 5 },
              },
            }}
            pageSizeOptions={[5]}
            pagination
          />
        </div>
        <div className="progressTrendContainer">
          <p style={{fontWeight: "bold", fontSize: "20px", marginBottom: "10px"}}>Avg. Progress Bar</p>
        </div>
      </div>
    </div>
  );
}
