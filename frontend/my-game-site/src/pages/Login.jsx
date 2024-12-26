import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom"; // Import Link for navigation
import "./../styles/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulating successful login
    if (email && password) {
      localStorage.setItem("token", "dummy-token");
      navigate("/games");
    } else {
      alert("Please enter valid credentials.");
    }
  };

  return (
    <div className="login">
      <form onSubmit={handleLogin}>
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        <p>
          Don't have an account? <Link to="/signup">Create an account</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
