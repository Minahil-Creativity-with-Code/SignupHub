import { useState } from "react";
import './App.css';
import { SiGnuprivacyguard } from "react-icons/si";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(""); // Clear error while typing
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    console.log("Form submitted:", formData);

    // Clear form after successful submit
    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: ""
    });
    setError("");
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit} className="signup-form">
        <h2><SiGnuprivacyguard /> Join SignupHub</h2>

        <input name="name" type="text" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input name="password" type="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
        <input name="confirmPassword" type="password" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} required />

        {error && <p className="error-message">{error}</p>}

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default App;
