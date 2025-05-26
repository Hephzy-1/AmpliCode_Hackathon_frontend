import React from "react";
import "../styles/AuthPage.css";

const SignUpForm = () => {
  return (
    <form>
      <input type="email" placeholder="Your Email" required />
      <input type="password" placeholder="Your Password" required />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUpForm;