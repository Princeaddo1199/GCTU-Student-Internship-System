import React, { useState } from "react";
import "../STYLES/CompanyManagement.css";
import "../STYLES/AcademicSupervisors.css";
import {
  Download,
  Search,
  SlidersHorizontal,
  Building2,
  Users,
  MapPin,
  Eye,
} from "lucide-react";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import industrySupervisors from "../../../Data/industrySupervisors.json";

const initialCompanies = industrySupervisors.map((sup) => ({
  id: sup.id,
  name: sup.company,
  email: sup.companyEmail || sup.email,
  industry: sup.industry || "Technology",
  location: sup.location || "Accra",
  contact: sup.name,
  internsCount: sup.studentsCount,
  status: sup.status,
}));

export default function CompanyManagement() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredData = initialCompanies.filter((comp) => {
    const term = searchTerm.toLowerCase();
    return (
      comp.name.toLowerCase().includes(term) ||
      comp.email.toLowerCase().includes(term) ||
      comp.industry.toLowerCase().includes(term) ||
      comp.location.toLowerCase().includes(term) ||
      comp.contact.toLowerCase().includes(term) ||
      comp.status.toLowerCase().includes(term)
    );
  });

  // Calculations for Stat Cards
  const totalCompanies = initialCompanies.length;
  const activePartners = initialCompanies.filter((c) => c.status === "Active").length;
  const totalInternsPlaced = initialCompanies.reduce((acc, curr) => acc + curr.internsCount, 0);

  const columns = [
    {
      field: "company",
      headerName: "Company",
      flex: 1.5,
      minWidth: 250,
      renderCell: (params) => (
        <div className="companyCellContainer">
          <div className="companyIconBox">
            <Building2 size={16} />
          </div>
          <div className="companyNameGroup">
            <span className="companyNameText">{params.row.name}</span>
            <span className="companyEmailText">{params.row.email}</span>
          </div>
        </div>
      ),
    },
    {
      field: "industry",
      headerName: "Industry",
      flex: 1.2,
      minWidth: 160,
      renderCell: (params) => (
        <span className="departmentPill">{params.value}</span>
      ),
    },
    {
      field: "location",
      headerName: "Location",
      flex: 1.2,
      minWidth: 160,
      renderCell: (params) => (
        <div className="locationGroup">
          <MapPin size={14} />
          <span>{params.value}</span>
        </div>
      ),
    },
    {
      field: "contact",
      headerName: "Contact",
      flex: 1.2,
      minWidth: 160,
      renderCell: (params) => (
        <span style={{ color: "#475569", fontWeight: 500 }}>{params.value}</span>
      ),
    },
    {
      field: "internsCount",
      headerName: "Interns",
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
      headerName: "Status",
      width: 100,
      sortable: false,
      renderCell: () => (
        <button type="button" className="viewActionLink">
          <Eye size={14} />
          View
        </button>
      ),
    },
  ];

  return (
    <div className="companyManagement">
      {/* Header */}
      <div className="companyHeader">
        <div className="companyTitle">
          <h2>Company Management</h2>
          <p>Manage partner companies</p>
        </div>
        <button className="exportCompanyBtn">
          <Download size={16} />
          Export
        </button>
      </div>

      {/* Stat Cards Grid (3 Columns) */}
      <div className="supervisorsStatCards">
        {/* Total Companies */}
        <div className="supervisorsStatCard">
          <div className="supStatInfo">
            <p className="supStatLabel">Total Companies</p>
            <h3>{totalCompanies}</h3>
          </div>
          <div className="supStatIcon blue">
            <Building2 size={22} />
          </div>
        </div>

        {/* Active Partners */}
        <div className="supervisorsStatCard">
          <div className="supStatInfo">
            <p className="supStatLabel">Active Partners</p>
            <h3>{activePartners}</h3>
            <p className="smStatSub" style={{ marginTop: "2px" }}>↑ Accepting interns</p>
          </div>
          <div className="supStatIcon green">
            <Building2 size={22} />
          </div>
        </div>

        {/* Total Interns Placed */}
        <div className="supervisorsStatCard">
          <div className="supStatInfo">
            <p className="supStatLabel">Total Interns Placed</p>
            <h3>{totalInternsPlaced}</h3>
          </div>
          <div className="supStatIcon purple">
            <Users size={22} />
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="companyTableCard">
        <div className="companyTableHeader">
          <h3>All Companies</h3>
          <div className="companyTableControls">
            <div className="companySearchInput">
              <Search size={16} color="#94a3b8" />
              <input
                type="text"
                placeholder="Search companies..."
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
        <Box sx={{ height: 500, width: "100%" }}>
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
