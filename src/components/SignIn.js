import React, { useState } from 'react';
import './Signin.css'; // Import custom styles for the Signin component

const SignIn = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [errors, setErrors] = useState({}); // State to track form validation errors

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Form validation
  const validateForm = () => {
    let errors = {};
    if (!formData.username) {
      errors.username = 'Username is required';
    }
    if (!formData.password) {
      errors.password = 'Password is required';
    }
    return errors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors); // Set errors if validation fails
    } else {
      // Handle sign-in logic here
      alert('Sign In Successful!'); // Placeholder alert
      // Reset form fields
      setFormData({
        username: '',
        password: '',
      });
      setErrors({});
    }
  };

  return (
    <div className="signin-container">
      <header className="signin-header">
        <h1>Sign In</h1>
      </header>
      
      <section className="signin-content">
        <form onSubmit={handleSubmit}>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            placeholder="Your Username"
            value={formData.username}
            onChange={handleChange}
            required
          />
          {errors.username && <div className="error">{errors.username}</div>}
          
          <label>Password:</label>
          <input
            type="password"
            name="password"
            placeholder="Your Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          {errors.password && <div className="error">{errors.password}</div>}
          
          <button type="submit">Sign In</button>
        </form>
      </section>
    </div>
  );
};

export default SignIn;