import React from "react";
import "../styles/AuthPage.css";

const SignUpForm = () => {
  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form>
        <input type="email" placeholder="Your Email" required />
        <input type="password" placeholder="Your Password" required />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;