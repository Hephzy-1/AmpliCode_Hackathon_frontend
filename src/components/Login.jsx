import React from "react";
import "../styles/AuthPage.css";

const LoginForm = () => {
  return (
    <div className="login-container">
      <h2>Login</h2>
       <form>
        <div className="input-group">
          <i className="fas fa-envelope"></i>
          <input type="email" placeholder="Your Email" required />
        </div>
        <div className="input-group">
          <i className="fas fa-lock"></i>
          <input type="password" placeholder="Your Password" required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;