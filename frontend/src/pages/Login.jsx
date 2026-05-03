import React, { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/auth/login", form);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);

      if (res.data.role === "admin") {
        navigate("/admin-dashboard");
      } else {
        navigate("/user-dashboard");
      }
    } catch (err) {
      alert(err.response?.data?.msg || "Login failed");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        {/* APP TITLE */}
        <h1 className="app-title">Task Manager</h1>
        <p className="app-subtitle">Manage your work efficiently</p>

        <h2>Login</h2>

        <form className="auth-form" onSubmit={handleSubmit}>
  <input
    type="email"
    placeholder="Email"
    required
    onChange={(e) =>
      setForm({ ...form, email: e.target.value })
    }
  />

  <input
    type="password"
    placeholder="Password"
    required
    onChange={(e) =>
      setForm({ ...form, password: e.target.value })
    }
  />

  <button type="submit">Login</button>
</form>

        <p onClick={() => navigate("/register")} className="link">
          Don't have an account? Register
        </p>
      </div>
    </div>
  );
}

export default Login;