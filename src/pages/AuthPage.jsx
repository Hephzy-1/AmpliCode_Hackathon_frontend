import React from "react";
import LoginForm from "../components/Login";
import SignUpForm from "../components/SignUp";
import GoogleSignInButton from "../components/GoogleSignInButton";
import "../styles/AuthPage.css";

const AuthPage = () => {
  return (
    <div className="auth-page">
      <h2>Start Learning Today!</h2>
      <SignUpForm />
      <GoogleSignInButton />
      <p>Already have an account? Login below:</p>
      <LoginForm />
    </div>
  );
};

export default AuthPage;