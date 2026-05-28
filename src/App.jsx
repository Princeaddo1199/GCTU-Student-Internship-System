import "./App.css";
import Sidebar from "./Pages/AcademicSupervisor/Components/Sidebar";
import LoginPage from "./Pages/LoginPage";
import { Routes, Route, Navigate } from "react-router-dom";
import { RequireAuth } from "./AuthContext.jsx";
import Dashboard from "./Pages/AcademicSupervisor/Pages/Dashboard";
import RecordVisitReport from "./Pages/AcademicSupervisor/Pages/RecordVisitReport";
import VisitHistory from "./Pages/AcademicSupervisor/Pages/VisitHistory";
import MyStudents from "./Pages/AcademicSupervisor/Pages/MyStudents";
import InternshipMonitoring from "./Pages/AcademicSupervisor/Pages/InternshipMonitoring";
import LogbookManagement from "./Pages/AcademicSupervisor/Pages/LogbookManagement";
import AttendanceMonitoring from "./Pages/AcademicSupervisor/Pages/AttendanceMonitoring";
import PerformanceEvaluation from "./Pages/AcademicSupervisor/Pages/PerformanceEvaluation";
import SupervisorFeedback from "./Pages/AcademicSupervisor/Pages/SupervisorFeedback";
import IndustryReports from "./Pages/AcademicSupervisor/Pages/IndustryReports";
import Messages from "./Pages/AcademicSupervisor/Pages/Messages";
import Notifications from "./Pages/AcademicSupervisor/Pages/Notifications";
import ReportsAnalysis from "./Pages/AcademicSupervisor/Pages/ReportsAnalysis";
import Profile from "./Pages/AcademicSupervisor/Pages/Profile";
import Searchbar from "./Pages/AcademicSupervisor/Components/Searchbar";
import StudentDashboard from "./Pages/Student/Pages/StudentDashboard";
import Attendance from "./Pages/Student/Pages/Attendance";
import ActivityLogbook from "./Pages/Student/Pages/ActivityLogbook";
import Documents from "./Pages/Student/Pages/Documents";

function MainLayout({ children }) {
  return (
    <div className="mainLayout">
      <Sidebar />
      <main className="mainContent" style={{ flex: 1 }}>
        <Searchbar />
        {children}
      </main>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<LoginPage />} />

      {/* Academic Supervisor routes */}
      <Route
        path="/dashboard"
        element={
          <RequireAuth allowedRoles={["Academic Supervisor"]}>
            <MainLayout>
              <Dashboard />
            </MainLayout>
          </RequireAuth>
        }
      />
      <Route
        path="/my-students"
        element={
          <RequireAuth allowedRoles={["Academic Supervisor"]}>
            <MainLayout>
              <MyStudents />
            </MainLayout>
          </RequireAuth>
        }
      />
      <Route
        path="/internship-monitoring"
        element={
          <RequireAuth allowedRoles={["Academic Supervisor"]}>
            <MainLayout>
              <InternshipMonitoring />
            </MainLayout>
          </RequireAuth>
        }
      />
      <Route
        path="/logbook-management"
        element={
          <RequireAuth allowedRoles={["Academic Supervisor"]}>
            <MainLayout>
              <LogbookManagement />
            </MainLayout>
          </RequireAuth>
        }
      />
      <Route
        path="/attendance-monitoring"
        element={
          <RequireAuth allowedRoles={["Academic Supervisor"]}>
            <MainLayout>
              <AttendanceMonitoring />
            </MainLayout>
          </RequireAuth>
        }
      />
      <Route
        path="/performance-evaluation"
        element={
          <RequireAuth allowedRoles={["Academic Supervisor"]}>
            <MainLayout>
              <PerformanceEvaluation />
            </MainLayout>
          </RequireAuth>
        }
      />
      <Route
        path="/supervisor-feedback"
        element={
          <RequireAuth allowedRoles={["Academic Supervisor"]}>
            <MainLayout>
              <SupervisorFeedback />
            </MainLayout>
          </RequireAuth>
        }
      />
      <Route
        path="/industry-reports"
        element={
          <RequireAuth allowedRoles={["Academic Supervisor"]}>
            <MainLayout>
              <IndustryReports />
            </MainLayout>
          </RequireAuth>
        }
      />
      <Route
        path="/record-visit-report"
        element={
          <RequireAuth allowedRoles={["Academic Supervisor"]}>
            <MainLayout>
              <RecordVisitReport />
            </MainLayout>
          </RequireAuth>
        }
      />
      <Route
        path="/visit-history"
        element={
          <RequireAuth allowedRoles={["Academic Supervisor"]}>
            <MainLayout>
              <VisitHistory />
            </MainLayout>
          </RequireAuth>
        }
      />
      <Route
        path="/messages"
        element={
          <RequireAuth allowedRoles={["Academic Supervisor"]}>
            <MainLayout>
              <Messages />
            </MainLayout>
          </RequireAuth>
        }
      />
      <Route
        path="/notifications"
        element={
          <RequireAuth allowedRoles={["Academic Supervisor"]}>
            <MainLayout>
              <Notifications />
            </MainLayout>
          </RequireAuth>
        }
      />
      <Route
        path="/reports-analysis"
        element={
          <RequireAuth allowedRoles={["Academic Supervisor"]}>
            <MainLayout>
              <ReportsAnalysis />
            </MainLayout>
          </RequireAuth>
        }
      />
      <Route
        path="/profile"
        element={
          <RequireAuth allowedRoles={["Academic Supervisor"]}>
            <MainLayout>
              <Profile />
            </MainLayout>
          </RequireAuth>
        }
      />

      {/* Student routes */}
      <Route
        path="/student-dashboard"
        element={
          <RequireAuth allowedRoles={["Student"]}>
            <MainLayout>
              <StudentDashboard />
            </MainLayout>
          </RequireAuth>
        }
      />
      <Route
        path="/attendance"
        element={
          <RequireAuth allowedRoles={["Student"]}>
            <MainLayout>
              <Attendance />
            </MainLayout>
          </RequireAuth>
        }
      />
      <Route
        path="/activity-logbook"
        element={
          <RequireAuth allowedRoles={["Student"]}>
            <MainLayout>
              <ActivityLogbook />
            </MainLayout>
          </RequireAuth>
        }
      />
      <Route
        path="/documents"
        element={
          <RequireAuth allowedRoles={["Student"]}>
            <MainLayout>
              <Documents />
            </MainLayout>
          </RequireAuth>
        }
      />

      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default App;
