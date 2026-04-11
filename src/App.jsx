import { useState } from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import LoginPage from "./Pages/LoginPage";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import InternshipDetails from "./Pages/InternshipDetails";
import PlacementInformation from "./Pages/PlacementInformation";
import InternshipGuidelines from "./Pages/InternshipGuidelines";

function MainLayout({ children }) {
  return (
    <div className="mainLayout">
      <Sidebar />
      <main className="mainContent" style={{ flex: 1 }}>
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
        path="/internship-details"
        element={
          <MainLayout>
            <InternshipDetails />
          </MainLayout>
        }
      />
      <Route
        path="/placement-information"
        element={
          <MainLayout>
            <PlacementInformation />
          </MainLayout>
        }
      />
      <Route
        path="/internship-guidelines"
        element={
          <MainLayout>
            <InternshipGuidelines />
          </MainLayout>
        }
      />
    </Routes>
  );
}

export default App;
