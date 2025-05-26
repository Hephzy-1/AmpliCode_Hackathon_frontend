import React, { useState } from "react";
import LoginForm from "../components/Login";
import SignUpForm from "../components/SignUp";
import GoogleSignInButton from "../components/GoogleSignInButton";
import "../styles/AuthPage.css";

const AuthPage = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="auth-page">
      <h2>Let’s start learning</h2>
      <p>Please sign up or login to continue</p>

      {showLogin ? (
        <>
          <LoginForm />
          <p>
            Don’t have an account?{" "}
            <span onClick={() => setShowLogin(false)} className="toggle-btn">
              Sign Up
            </span>
          </p>
        </>
      ) : (
        <>
          <SignUpForm />
          <GoogleSignInButton />
          <p>
            Already have an account?{" "}
            <span onClick={() => setShowLogin(true)} className="toggle-btn">
              Login
            </span>
          </p>
        </>
      )}
    </div>
  );
};

export default AuthPage;