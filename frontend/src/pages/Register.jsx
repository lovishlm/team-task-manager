import React, { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "member"
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/auth/signup", form);
      navigate("/");
    } catch (err) {
      alert(err.response?.data?.msg || "Registration failed");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        {/* APP TITLE */}
        <h1 className="app-title">Task Manager</h1>
        <p className="app-subtitle">Create your account</p>

        <h2>Register</h2>

        <form className="auth-form" onSubmit={handleSubmit}>
  <input
    placeholder="Name"
    required
    onChange={(e) =>
      setForm({ ...form, name: e.target.value })
    }
  />

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

  {/* FIXED DROPDOWN */}
  <select
    onChange={(e) =>
      setForm({ ...form, role: e.target.value })
    }
  >
    <option value="member">Member</option>
    <option value="admin">Admin</option>
  </select>

  {/* BUTTON FULL WIDTH */}
  <button type="submit">Register</button>
</form>

        <p onClick={() => navigate("/")} className="link">
          Already have an account? Login
        </p>
      </div>
    </div>
  );
}

export default Register;