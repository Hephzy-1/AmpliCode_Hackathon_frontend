import React from "react";
import "../styles/GoogleSignInButton.css";

const GoogleSignInButton = () => {
  return (
    <button className="google-sign-in">
      <img src="/assets/images/google-logo.png" alt="Google Logo" />
      Sign in with Google
    </button>
  );
};

export default GoogleSignInButton;