import React from "react";
import "../styles/GoogleSignInButton.css";

const GoogleSignInButton = () => {
  return (
    <button className="google-sign-in">
      <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google Logo" style={{ width: "20px", marginRight: "8px" }} />
      Sign in with Google
    </button>
  );
};

export default GoogleSignInButton;