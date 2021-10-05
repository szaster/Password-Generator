import React from "react";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div>
      <p> [Front page] </p>
      <nav>
        <Link to="about">About</Link>
      </nav>
    </div>
  );
}

export function About() {
  return (
    <div>
      <p> About the app and me info </p>
      <Link to="/">Home</Link>
    </div>
  );
}
