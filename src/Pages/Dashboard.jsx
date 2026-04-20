import React from "react";
import BigCard from "../Components/BigCard";
import { Building2, Calendar, CalendarCheck, TriangleAlert, Users } from "lucide-react";
import students from "../Data/studentTable.json";
import { DataGrid } from "@mui/x-data-grid";
import { Box, LinearProgress, Typography } from "@mui/material";
import "../STYLES/Dashboard.css";
import Chart from "../Components/Chart";

const columns = [
  { field: "student", headerName: "Student", width: 250 },
  { field: "company", headerName: "Company", width: 200 },
  {
    field: "progress",
    headerName: "Progress",
    width: 200,
    sortable: true,
    renderCell: (params) => {
      const raw = params?.value;
      const value =
        typeof raw === "number" && Number.isFinite(raw)
          ? Math.min(100, Math.max(0, raw))
          : 0;

      return (
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            paddingRight: "20px",
            gap: 1,
          }}
        >
          <LinearProgress
            variant="determinate"
            value={value}
            sx={{
              flex: 1,
              height: 8,
              borderRadius: 999,
              backgroundColor: "#e9edf3",
              "& .MuiLinearProgress-bar": {
                borderRadius: 999,
                backgroundColor:
                  value >= 70 ? "#22c55e" : value >= 40 ? "#f59e0b" : "#ef4444",
              },
            }}
          />
          <Typography variant="body2" sx={{ minWidth: 36 }}>
            {value}%
          </Typography>
        </Box>
      );
    },
  },
  { field: "lastLog", headerName: "Last Log", width: 200 },
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
            sx={{
              "& .MuiDataGrid-columnSeparator": {
                display: "none",
              },
            }}
            initialState={{
              pagination: {
                paginationModel: { pageSize: 5 },
              },
            }}
            pageSizeOptions={[5]}
            pagination
          />
        </div>
        <div>
        <div className="progressTrendContainer">
          <p style={{fontWeight: "bold", fontSize: "20px", marginBottom: "10px"}}>Avg. Progress Bar</p>
          <Chart />
        </div>
        <div className="upcomingVisitsContainer">
          <p
            style={{
              fontWeight: "bold",
              fontSize: "20px",
              marginBottom: "10px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <Calendar size={20} color="#8894a2" />
            Upcoming Visits
          </p>
          <div>
          visit cards go here
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
