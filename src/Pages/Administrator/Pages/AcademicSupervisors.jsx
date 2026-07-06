import React, { useState } from "react";
import "../STYLES/AcademicSupervisors.css";
import {
  Plus,
  Search,
  SlidersHorizontal,
  MoreHorizontal,
  GraduationCap,
  CheckCircle,
  Users,
} from "lucide-react";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";

// Mock supervisors data matching the screenshot
const initialSupervisors = [
  {
    id: 1,
    name: "Dr. Kwame Asante",
    initials: "KA",
    email: "k.asante@uni.edu",
    department: "Computer Science",
    studentsCount: 5,
    status: "Active",
    avatarBg: "bg1",
  },
  {
    id: 2,
    name: "Prof. Ama Mensah",
    initials: "AM",
    email: "a.mensah@uni.edu",
    department: "Engineering",
    studentsCount: 4,
    status: "Active",
    avatarBg: "bg2",
  },
  {
    id: 3,
    name: "Dr. Yaw Boateng",
    initials: "YB",
    email: "y.boateng@uni.edu",
    department: "Business Admin",
    studentsCount: 3,
    status: "Active",
    avatarBg: "bg3",
  },
  {
    id: 4,
    name: "Dr. Efua Owusu",
    initials: "EO",
    email: "e.owusu@uni.edu",
    department: "IT",
    studentsCount: 6,
    status: "On Leave",
    avatarBg: "bg4",
  },
  {
    id: 5,
    name: "Prof. Kofi Djan",
    initials: "KD",
    email: "k.djan@uni.edu",
    department: "Sciences",
    studentsCount: 4,
    status: "Active",
    avatarBg: "bg5",
  },
];

export default function AcademicSupervisors() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredSupervisors = initialSupervisors.filter((sup) => {
    const term = searchTerm.toLowerCase();
    return (
      sup.name.toLowerCase().includes(term) ||
      sup.email.toLowerCase().includes(term) ||
      sup.department.toLowerCase().includes(term) ||
      sup.status.toLowerCase().includes(term)
    );
  });

  // Calculations for Stat Cards
  const totalSupervisors = initialSupervisors.length;
  const activeSupervisors = initialSupervisors.filter((s) => s.status === "Active").length;
  const totalStudentsAssigned = initialSupervisors.reduce((acc, curr) => acc + curr.studentsCount, 0);

  const columns = [
    {
      field: "supervisor",
      headerName: "Supervisor",
      flex: 1.5,
      minWidth: 250,
      renderCell: (params) => (
        <div className="supervisorCell">
          <div className={`supervisorAvatar ${params.row.avatarBg}`}>
            {params.row.initials}
          </div>
          <div className="supervisorNameGroup">
            <span className="supervisorNameText">{params.row.name}</span>
            <span className="supervisorEmailText">{params.row.email}</span>
          </div>
        </div>
      ),
    },
    {
      field: "department",
      headerName: "Department",
      flex: 1.2,
      minWidth: 180,
      renderCell: (params) => (
        <span className="departmentPill">{params.value}</span>
      ),
    },
    {
      field: "studentsCount",
      headerName: "Students",
      flex: 1,
      minWidth: 120,
      type: "number",
      align: "left",
      headerAlign: "left",
      renderCell: (params) => (
        <span style={{ fontWeight: 600, color: "#334155" }}>{params.value}</span>
      ),
    },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
      minWidth: 140,
      renderCell: (params) => (
        <span
          className={
            params.value === "Active" ? "statusBadgeActive" : "statusBadgeLeave"
          }
        >
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
    <div className="academicSupervisors">
      {/* Header */}
      <div className="supervisorsHeader">
        <div className="supervisorsTitle">
          <h2>All Academic Supervisors</h2>
          <p>View and manage university supervisors</p>
        </div>
        <button className="addSupervisorBtn">
          <Plus size={16} />
          Add Supervisor
        </button>
      </div>

      {/* Stat Cards Grid (3 Columns) */}
      <div className="supervisorsStatCards">
        {/* Total Supervisors */}
        <div className="supervisorsStatCard">
          <div className="supStatInfo">
            <p className="supStatLabel">Total Supervisors</p>
            <h3>{totalSupervisors}</h3>
          </div>
          <div className="supStatIcon blue">
            <GraduationCap size={22} />
          </div>
        </div>

        {/* Active Supervisors */}
        <div className="supervisorsStatCard">
          <div className="supStatInfo">
            <p className="supStatLabel">Active Supervisors</p>
            <h3>{activeSupervisors}</h3>
          </div>
          <div className="supStatIcon green">
            <CheckCircle size={22} />
          </div>
        </div>

        {/* Students Assigned */}
        <div className="supervisorsStatCard">
          <div className="supStatInfo">
            <p className="supStatLabel">Students Assigned</p>
            <h3>{totalStudentsAssigned}</h3>
          </div>
          <div className="supStatIcon purple">
            <Users size={22} />
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="supervisorsTableSection">
        <div className="supervisorsTableHeader">
          <h3>All Academic Supervisors</h3>
          <div className="supervisorsTableControls">
            <div className="supervisorSearchInput">
              <Search size={16} color="#94a3b8" />
              <input
                type="text"
                placeholder="Search supervisors..."
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>
            <button className="filterBtn">
              <SlidersHorizontal size={16} />
            </button>
          </div>
        </div>

        {/* DataGrid Table */}
        <Box sx={{ height: 420, width: "100%" }}>
          <DataGrid
            rows={filteredSupervisors}
            columns={columns}
            rowHeight={65}
            disableRowSelectionOnClick
            hideFooter={filteredSupervisors.length <= 8}
            initialState={{
              pagination: {
                paginationModel: { pageSize: 8 },
              },
            }}
            pageSizeOptions={[8]}
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
                display: "flex",
                alignItems: "center",
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
