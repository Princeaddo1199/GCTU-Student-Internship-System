import { createContext, useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const AuthContext = createContext(null);

const mockUsers = [
  {
    email: "supervisor@gctu.edu",
    password: "supervisor123",
    role: "Academic Supervisor",
    name: "Academic Supervisor",
  },
  {
    email: "student@gctu.edu",
    password: "student123",
    role: "Student",
    name: "Student User",
  },
  {
    email: "admin@gctu.edu",
    password: "admin123",
    role: "Administrator",
    name: "Dr. Kwame Asante",
  },
];

const storageKey = "gctu-sis-auth";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    if (typeof window === "undefined") return null;
    const stored = window.localStorage.getItem(storageKey);
    return stored ? JSON.parse(stored) : null;
  });

  useEffect(() => {
    if (user) {
      window.localStorage.setItem(storageKey, JSON.stringify(user));
    } else {
      window.localStorage.removeItem(storageKey);
    }
  }, [user]);

  const login = ({ email, password }) => {
    const normalizedEmail = email?.trim().toLowerCase() ?? "";
    const match = mockUsers.find(
      (account) =>
        account.email === normalizedEmail && account.password === password,
    );

    if (!match) {
      return null;
    }

    const session = { email: match.email, role: match.role, name: match.name };
    setUser(session);
    return session;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, role: user?.role ?? null, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}

export function RequireAuth({ children, allowedRoles = [] }) {
  const auth = useAuth();

  if (!auth.user) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles.length > 0 && !allowedRoles.includes(auth.role)) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
