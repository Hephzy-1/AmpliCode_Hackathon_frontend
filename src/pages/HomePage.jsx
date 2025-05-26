import React from "react";
import "../styles/HomePage.css";

const HomePage = () => {
  return (
    <div className="home-page">
      <section className = "homepage-text">
        <h1>Welcome to Study Buddy</h1>
        <p>Your personal study assistant.</p>
      </section> 
      <section className="homepage-img"></section>
    </div>
  );
};

export default HomePage;