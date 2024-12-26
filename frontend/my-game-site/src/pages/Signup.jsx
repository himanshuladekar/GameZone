import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../styles/Signup.css";

const Signup = () => {
  const [formData, setFormData] = useState({ email: "", password: "" }); // Update state keys
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;

    if (!email || !password) {
      setError("All fields are required!");
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address!");
      return;
    }

    // Simulate API call to save user details
    setTimeout(() => {
      alert("Signup successful!");
      navigate("/login"); // Redirect to the login page
    }, 500);
  };

  return (
    <div className="signup">
      <form onSubmit={handleSubmit}>
        <h2>Signup</h2>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit">Signup</button>
       
      </form>
      
    </div>
  );
};

export default Signup;
