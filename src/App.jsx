import "./App.css";
import Sidebar from "./Pages/AcademicSupervisor/Components/Sidebar";
import LoginPage from "./Pages/LoginPage";
import { Routes, Route, Navigate } from "react-router-dom";
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
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/dashboard"
        element={
          <MainLayout>
            <Dashboard />
          </MainLayout>
        }
      />
      <Route
        path="/my-students"
        element={
          <MainLayout>
            <MyStudents />
          </MainLayout>
        }
      />
      <Route
        path="/internship-monitoring"
        element={
          <MainLayout>
            <InternshipMonitoring />
          </MainLayout>
        }
      />
      <Route
        path="/logbook-management"
        element={
          <MainLayout>
            <LogbookManagement />
          </MainLayout>
        }
      />
      <Route
        path="/attendance-monitoring"
        element={
          <MainLayout>
            <AttendanceMonitoring />
          </MainLayout>
        }
      />
      <Route
        path="/performance-evaluation"
        element={
          <MainLayout>
            <PerformanceEvaluation />
          </MainLayout>
        }
      />
      <Route
        path="/supervisor-feedback"
        element={
          <MainLayout>
            <SupervisorFeedback />
          </MainLayout>
        }
      />
      <Route
        path="/industry-reports"
        element={
          <MainLayout>
            <IndustryReports />
          </MainLayout>
        }
      />
      <Route
        path="/record-visit-report"
        element={
          <MainLayout>
            <RecordVisitReport />
          </MainLayout>
        }
      />
      <Route
        path="/visit-history"
        element={
          <MainLayout>
            <VisitHistory />
          </MainLayout>
        }
      />
      <Route
        path="/messages"
        element={
          <MainLayout>
            <Messages />
          </MainLayout>
        }
      />
      <Route
        path="/notifications"
        element={
          <MainLayout>
            <Notifications />
          </MainLayout>
        }
      />
      <Route
        path="/reports-analysis"
        element={
          <MainLayout>
            <ReportsAnalysis />
          </MainLayout>
        }
      />
      <Route
        path="/profile"
        element={
          <MainLayout>
            <Profile />
          </MainLayout>
        }
      />
    </Routes>
  );
}

export default App;
