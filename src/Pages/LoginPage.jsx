import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import logoImage from "../assets/gctu-logo.png";
import "./LoginPage.css";
import { Mail, Lock } from "lucide-react";
import { useAuth } from "../AuthContext.jsx";

const credentialsHelp = [
  "Academic Supervisor: supervisor@gctu.edu / supervisor123",
  "Student: student@gctu.edu / student123",
  "Administrator: admin@gctu.edu / admin123",
];

function getHomePath(role) {
  if (role === "Student") return "/student-dashboard";
  if (role === "Administrator") return "/admin-dashboard";
  return "/dashboard";
}

export default function LoginPage() {
  const auth = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  if (auth.user) {
    return <Navigate to={getHomePath(auth.role)} replace />;
  }

  const handleLogin = () => {
    setError("");
    const result = auth.login({ email, password });

    if (!result) {
      setError("Invalid email or password.");
      return;
    }

    navigate(getHomePath(result.role));
  };

  return (
    <div className="containerMain">
      <div className="formContainer">
        <img className="logoImage" src={logoImage} alt="Logo image" />
        <h3 style={{ marginTop: "10px", color: "#11325f" }}>
          Student Internship System
        </h3>
        <h3 style={{ marginTop: "10px", color: "#11325f" }}>(SIS)</h3>
        <p
          style={{
            fontSize: "13px",
            fontWeight: "600",
            margin: "10px 0",
            color: "#4b6b9c",
          }}
        >
          Sign in to your account to continue
        </p>

        <div style={{ marginTop: "20px" }}>
          <p
            style={{
              marginBottom: "5px",
              fontSize: "13px",
              fontWeight: "600",
              color: "#4d4c4c",
            }}
          >
            Email address
          </p>
          <div className="emailInputContainer">
            <Mail size={18} className="emailIcon" />
            <input
              type="email"
              placeholder="you@live.gctu.edu.gh"
              className="textInput"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div style={{ marginTop: "20px" }}>
          <p
            style={{
              marginBottom: "5px",
              fontSize: "13px",
              fontWeight: "600",
              color: "#4d4c4c",
            }}
          >
            Password
          </p>
          <div className="emailInputContainer">
            <Lock size={18} className="emailIcon" />
            <input
              type="password"
              placeholder="**********"
              className="textInput"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        {error ? (
          <p style={{ color: "#c53030", marginTop: "12px", fontSize: "13px" }}>
            {error}
          </p>
        ) : (
          <div
            style={{ marginTop: "12px", fontSize: "12px", color: "#4d4c4c" }}
          >
            {credentialsHelp.map((hint) => (
              <div key={hint}>{hint}</div>
            ))}
          </div>
        )}

        <div>
          <button type="button" onClick={handleLogin} className="signInButton">
            Sign In
          </button>
        </div>

        <div className="requestAccount">
          <div>
            <span style={{ fontSize: "12px" }}>Need help? </span>
            <span
              role="button"
              onClick={() => alert("Forgot password logic")}
              style={{
                color: "#4b6b9c",
                cursor: "pointer",
                fontSize: "12px",
                fontWeight: "600",
                display: "inline-block",
                marginTop: "4px",
              }}
            >
              Forgot Password?
            </span>
          </div>
        </div>
      </div>
      <footer className="copyrightFooter">
        <p>Copyright &copy; 2026 GCTU Intern Track. All rights reserved.</p>
      </footer>
    </div>
  );
}
