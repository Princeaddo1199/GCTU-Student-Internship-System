import React, { useState } from "react";
import "../STYLES/StudentManagement.css";
import {
  Download,
  Plus,
  Search,
  SlidersHorizontal,
  MoreHorizontal,
  Users,
  UserCheck,
  AlertTriangle,
  Clock,
} from "lucide-react";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import rawStudents from "../../../Data/studentTable.json";

// Map department and supervisor dynamically so it matches real data
const preparedStudents = rawStudents.map((item) => {
  // Department logic
  let department = "Computer Science";
  if (item.id % 5 === 2) department = "Engineering";
  else if (item.id % 5 === 3) department = "Business";
  else if (item.id % 5 === 4) department = "Design";
  else if (item.id % 5 === 0) department = "Sciences";

  // Supervisor logic
  let supervisor = "Prof. Ama Boateng";
  if (item.id % 3 === 2) supervisor = "Dr. Kofi Mensah";
  else if (item.id % 3 === 0) supervisor = "Dr. Esi Appiah";

  // Status logic
  let status = "Active";
  if (item.risk === "At Risk") status = "At Risk";
  else if (item.progress === 100) status = "Completed";
  else if (item.progress === 0) status = "Pending";

  // Initials and avatar
  const initials = item.student
    .split(" ")
    .map((n) => n[0])
    .join("")
    .substring(0, 2);

  const studentIdStr = `STU${String(item.id).padStart(3, "0")}`;

  return {
    ...item,
    department,
    supervisor,
    status,
    initials,
    studentIdStr,
    avatarBg: `bg${(item.id % 8) + 1}`,
  };
});

export default function StudentManagement() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter students based on search term
  const filteredStudents = preparedStudents.filter((student) => {
    const term = searchTerm.toLowerCase();
    return (
      student.student.toLowerCase().includes(term) ||
      student.studentIdStr.toLowerCase().includes(term) ||
      student.department.toLowerCase().includes(term) ||
      student.company.toLowerCase().includes(term) ||
      student.supervisor.toLowerCase().includes(term) ||
      student.status.toLowerCase().includes(term)
    );
  });

  // Calculate statistics
  const totalStudents = preparedStudents.length;
  const activeInterns = preparedStudents.filter((s) => s.status === "Active").length;
  const atRiskStudents = preparedStudents.filter((s) => s.status === "At Risk").length;
  const pendingPlacement = preparedStudents.filter((s) => s.status === "Pending" || !s.company).length || 1;

  // Columns definition for MUI DataGrid
  const columns = [
    {
      field: "student",
      headerName: "Student",
      flex: 1.5,
      minWidth: 220,
      renderCell: (params) => (
        <div className="studentCell">
          <div className={`studentAvatar ${params.row.avatarBg}`}>
            {params.row.initials}
          </div>
          <div className="studentNameGroup">
            <span className="studentNameText">{params.row.student}</span>
            <span className="studentIdText">{params.row.studentIdStr}</span>
          </div>
        </div>
      ),
    },
    {
      field: "department",
      headerName: "Department",
      flex: 1.2,
      minWidth: 160,
    },
    {
      field: "company",
      headerName: "Company",
      flex: 1.2,
      minWidth: 160,
      renderCell: (params) => (
        <span className="companyLink">{params.value || "Not Assigned"}</span>
      ),
    },
    {
      field: "supervisor",
      headerName: "Supervisor",
      flex: 1.2,
      minWidth: 160,
    },
    {
      field: "progress",
      headerName: "Progress",
      flex: 1.2,
      minWidth: 160,
      renderCell: (params) => {
        const val = params.value || 0;
        return (
          <div className="progressCell" style={{ width: "100%", display: "flex", alignItems: "center" }}>
            <div className="progressBarTrack">
              <div
                className={`progressBarFill ${
                  val >= 70 ? "high" : val >= 40 ? "medium" : "low"
                }`}
                style={{ width: `${val}%` }}
              />
            </div>
            <span className="progressPercent">{val}%</span>
          </div>
        );
      },
    },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
      minWidth: 120,
      renderCell: (params) => (
        <span className={`smStatusBadge ${params.value.toLowerCase().replace(" ", "")}`}>
          {params.value}
        </span>
      ),
    },
    {
      field: "actions",
      headerName: "",
      width: 60,
      sortable: false,
      renderCell: () => (
        <button className="actionsBtn">
          <MoreHorizontal size={16} />
        </button>
      ),
    },
  ];

  return (
    <div className="studentMgmt">
      {/* Header */}
      <div className="studentMgmtHeader">
        <div className="studentMgmtTitle">
          <h2>Student Management</h2>
          <p>Manage student internship placements and assignments</p>
        </div>
        <div className="studentMgmtActions">
          <button className="exportBtn">
            <Download size={16} />
            Export
          </button>
          <button className="addStudentBtn">
            <Plus size={16} />
            Add Student
          </button>
        </div>
      </div>

      {/* Stat Cards Row */}
      <div className="studentMgmtStatCards">
        {/* Card 1: Total Students */}
        <div className="studentMgmtStatCard">
          <div className="smStatInfo">
            <p className="smStatLabel">Total Students</p>
            <h3>{totalStudents}</h3>
          </div>
          <div className="smStatIcon blue">
            <Users size={22} />
          </div>
        </div>

        {/* Card 2: Active Interns */}
        <div className="studentMgmtStatCard">
          <div className="smStatInfo">
            <p className="smStatLabel">Active Interns</p>
            <h3>{activeInterns}</h3>
            <p className="smStatSub">↑ Currently placed</p>
          </div>
          <div className="smStatIcon green">
            <UserCheck size={22} />
          </div>
        </div>

        {/* Card 3: At Risk */}
        <div className="studentMgmtStatCard" style={{ borderColor: "#fee2e2" }}>
          <div className="smStatInfo">
            <p className="smStatLabel">At Risk</p>
            <h3>{atRiskStudents}</h3>
          </div>
          <div className="smStatIcon red">
            <AlertTriangle size={22} />
          </div>
        </div>

        {/* Card 4: Pending Placement */}
        <div className="studentMgmtStatCard">
          <div className="smStatInfo">
            <p className="smStatLabel">Pending Placement</p>
            <h3>{pendingPlacement}</h3>
          </div>
          <div className="smStatIcon purple">
            <Clock size={22} />
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="studentMgmtTableSection">
        <div className="studentMgmtTableHeader">
          <h3>All Students</h3>
          <div className="studentMgmtTableControls">
            <div className="studentSearchInput">
              <Search size={16} color="#94a3b8" />
              <input
                type="text"
                placeholder="Search students..."
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>
            <button className="filterBtn">
              <SlidersHorizontal size={16} />
            </button>
          </div>
        </div>

        {/* Material UI DataGrid */}
        <Box sx={{ height: 500, width: "100%" }}>
          <DataGrid
            rows={filteredStudents}
            columns={columns}
            rowHeight={65}
            disableRowSelectionOnClick
            initialState={{
              pagination: {
                paginationModel: { pageSize: 8 },
              },
            }}
            pageSizeOptions={[8, 15, 20]}
            sx={{
              border: "none",
              fontFamily: "inherit",
              "& .MuiDataGrid-columnHeaders": {
                backgroundColor: "#f8fafc",
                borderBottom: "1px solid #e2e8f0",
              },
              "& .MuiDataGrid-columnHeaderTitle": {
                fontWeight: 600,
                color: "#64748b",
                fontSize: "12px",
              },
              "& .MuiDataGrid-cell": {
                borderBottom: "1px solid #f1f5f9",
              },
              "& .MuiDataGrid-row:hover": {
                backgroundColor: "#f8fafc",
              },
              "& .MuiDataGrid-footerContainer": {
                borderTop: "1px solid #f1f5f9",
              },
              "& .MuiTablePagination-root": {
                color: "#64748b",
              },
            }}
          />
        </Box>
      </div>
    </div>
  );
}
