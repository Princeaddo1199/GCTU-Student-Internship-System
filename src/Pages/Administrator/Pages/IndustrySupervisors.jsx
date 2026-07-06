import React, { useState } from "react";
import "../STYLES/IndustrySupervisors.css";
import "../STYLES/AcademicSupervisors.css";
import {
  Plus,
  Search,
  SlidersHorizontal,
  MoreHorizontal,
  Users,
  UserCheck,
  Building2,
} from "lucide-react";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";

const initialSupervisors = [
  {
    id: 1,
    name: "Michael Osei",
    initials: "MO",
    email: "m.osei@techcorp.com",
    company: "TechCorp Ghana",
    phone: "+233 20 111 2222",
    studentsCount: 3,
    status: "Active",
    avatarBg: "bg3",
  },
  {
    id: 2,
    name: "Sarah Mensah",
    initials: "SM",
    email: "s.mensah@dataflow.com",
    company: "DataFlow Inc.",
    phone: "+233 20 333 4444",
    studentsCount: 2,
    status: "Active",
    avatarBg: "bg2",
  },
  {
    id: 3,
    name: "Grace Appiah",
    initials: "GA",
    email: "g.appiah@mtn.com",
    company: "MTN Group",
    phone: "+233 20 555 6666",
    studentsCount: 4,
    status: "Active",
    avatarBg: "bg1",
  },
  {
    id: 4,
    name: "Peter Yeboah",
    initials: "PY",
    email: "p.yeboah@vodafone.com",
    company: "Vodafone Ghana",
    phone: "+233 20 777 8888",
    studentsCount: 0,
    status: "Inactive",
    avatarBg: "bg4",
  },
  {
    id: 5,
    name: "Rita Asante",
    initials: "RA",
    email: "r.asante@hubtel.com",
    company: "Hubtel",
    phone: "+233 20 999 0000",
    studentsCount: 2,
    status: "Active",
    avatarBg: "bg5",
  },
];

export default function IndustrySupervisors() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredData = initialSupervisors.filter((sup) => {
    const term = searchTerm.toLowerCase();
    return (
      sup.name.toLowerCase().includes(term) ||
      sup.email.toLowerCase().includes(term) ||
      sup.company.toLowerCase().includes(term) ||
      sup.status.toLowerCase().includes(term)
    );
  });

  // Calculations for Stat Cards
  const totalSupervisors = initialSupervisors.length;
  const activeSupervisors = initialSupervisors.filter((s) => s.status === "Active").length;
  const totalStudentsSupervised = initialSupervisors.reduce((acc, curr) => acc + curr.studentsCount, 0);

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
      field: "company",
      headerName: "Company",
      flex: 1.2,
      minWidth: 180,
      renderCell: (params) => (
        <div className="companyCellGroup">
          <Building2 size={15} className="companyIconColor" />
          <span>{params.value}</span>
        </div>
      ),
    },
    {
      field: "phone",
      headerName: "Phone",
      flex: 1.2,
      minWidth: 160,
      renderCell: (params) => (
        <span style={{ color: "#475569" }}>{params.value}</span>
      ),
    },
    {
      field: "studentsCount",
      headerName: "Students",
      flex: 0.8,
      minWidth: 100,
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
      minWidth: 120,
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
    <div className="industrySupervisors">
      {/* Header */}
      <div className="indSupervisorsHeader">
        <div className="indSupervisorsTitle">
          <h2>All Industry Supervisors</h2>
          <p>View registered industry supervisors</p>
        </div>
        <button className="registerSupervisorBtn">
          <Plus size={16} />
          Register Supervisor
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
            <Users size={22} />
          </div>
        </div>

        {/* Active Supervisors */}
        <div className="supervisorsStatCard">
          <div className="supStatInfo">
            <p className="supStatLabel">Active Supervisors</p>
            <h3>{activeSupervisors}</h3>
          </div>
          <div className="supStatIcon green">
            <UserCheck size={22} />
          </div>
        </div>

        {/* Students Supervised */}
        <div className="supervisorsStatCard">
          <div className="supStatInfo">
            <p className="supStatLabel">Students Supervised</p>
            <h3>{totalStudentsSupervised}</h3>
          </div>
          <div className="supStatIcon purple">
            <Users size={22} />
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="indSupervisorsTableCard">
        <div className="indSupervisorsTableHeader">
          <h3>Industry Supervisors</h3>
          <div className="indSupervisorsTableControls">
            <div className="indSupervisorsSearchInput">
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
            rows={filteredData}
            columns={columns}
            rowHeight={65}
            disableRowSelectionOnClick
            hideFooter={filteredData.length <= 8}
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
