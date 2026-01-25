import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useState, useEffect } from "react";
import AdminDashboard from "../pages/AdminDashboard";
import FacultyDashboard from "../pages/FacultyDashboard";
import StudentDashboard from "../pages/StudentDashboard";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import NotFound from "../pages/NotFound";
import MaintenancePage from "../pages/MaintenancePage";
import axios from "axios";

const views = () => {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [isMaintenance, setIsMaintenance] = useState(false);

  const setAuth = (boolean) => {
    setAuthenticated(boolean);
  };

  async function isAuth() {
    try {
      const response = await axios.get("server_API_AUTH_VERIFY", {
        headers: {
          token: localStorage.token,
        },
      });
      if (response.status === 200) {
        setAuthenticated(response.data === true);
      }
    } catch (error) {
      // Backend is in maintenance
    }
  }

  useEffect(() => {
    isAuth();
  }, []);

  return (
    <>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/admin/*" element={<AdminDashboard />} />
            <Route path="/faculty/*" element={<FacultyDashboard />} />
            <Route path="/student/*" element={<StudentDashboard />} />
            <Route path="/maintenance*" element={<MaintenancePage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default views;
