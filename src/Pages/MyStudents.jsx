import React, { useMemo, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, LinearProgress, Typography, Button } from "@mui/material";
import { Search } from "lucide-react";
import students from "../Data/studentTable.json";
import "../STYLES/MyStudents.css";

export default function MyStudents() {
  const [query, setQuery] = useState("");

  const rows = useMemo(() => {
    // Derive fields needed by the screenshot without changing your JSON.
    const withDerived = students.map((s) => {
      const status = s.risk === "At Risk" ? "At Risk" : "Active";

      // simple deterministic "programme" assignment for now
      const programme = s.id % 2 === 0 ? "BSc CS" : "BSc IT";

      return { ...s, status, programme };
    });

    const q = query.trim().toLowerCase();
    if (!q) return withDerived;
    return withDerived.filter((s) => {
      return (
        String(s.student).toLowerCase().includes(q) ||
        String(s.company).toLowerCase().includes(q) ||
        String(s.programme).toLowerCase().includes(q) ||
        String(s.status).toLowerCase().includes(q)
      );
    });
  }, [query]);

  const columns = useMemo(
    () => [
      { field: "student", headerName: "Name", flex: 1, minWidth: 180 },
      { field: "programme", headerName: "Programme", width: 130 },
      { field: "company", headerName: "Company", flex: 1, minWidth: 180 },
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
            <Box sx={{ width: "100%", display: "flex", alignItems: "center", gap: 1 }}>
              <LinearProgress
                variant="determinate"
                value={value}
                sx={{
                  flex: 1,
                  height: 6,
                  borderRadius: 999,
                  backgroundColor: "#e9edf3",
                  "& .MuiLinearProgress-bar": {
                    borderRadius: 999,
                    backgroundColor: "#0f2a52",
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
      {
        field: "status",
        headerName: "Status",
        width: 120,
        renderCell: (params) => {
          const status = params?.value === "At Risk" ? "At Risk" : "Active";
          return (
            <span
              className={`statusPill ${
                status === "At Risk" ? "statusAtRisk" : "statusActive"
              }`}
            >
              {status}
            </span>
          );
        },
      },
      {
        field: "action",
        headerName: "Action",
        width: 120,
        sortable: false,
        filterable: false,
        renderCell: () => (
          <Button
            variant="outlined"
            size="small"
            sx={{
              textTransform: "none",
              borderColor: "#e0e5eb",
              color: "#111827",
              backgroundColor: "#f8fafc",
            }}
          >
            View
          </Button>
        ),
      },
    ],
    [],
  );

  return (
    <div className="myStudentsPage">
      <div className="myStudentsHeader">
        <h2>Assigned Students</h2>
        <p>Students under your academic supervision</p>
      </div>

      <div className="myStudentsSearchRow">
        <Search size={16} color="#8894a2" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search students..."
        />
      </div>

      <div className="myStudentsTableCard">
        <DataGrid
          rows={rows}
          columns={columns}
          disableRowSelectionOnClick
          autoHeight
          initialState={{
            pagination: { paginationModel: { pageSize: 20 } },
          }}
          pageSizeOptions={[10, 15]}
          sx={{
            border: "none",
            // MUI X DataGrid v9 uses CSS variables for header background
            "--DataGrid-containerBackground": "#f4f6f7",
            "--DataGrid-headerBackground": "#f4f6f7",
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: "#f4f6f7",
            },
            "& .MuiDataGrid-columnHeader": {
              backgroundColor: "#f8fafc",
            },
            "& .MuiDataGrid-cell": {
              outline: "none",
            },
            "& .MuiDataGrid-columnSeparator": {
              display: "none",
            },
          }}
        />
      </div>
    </div>
  );
}
