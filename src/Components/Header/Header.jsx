import React from "react";
import "./Header.css";
import Navbar from "../Navbar/Navbar";
import Topbar from "../Topbar/Topbar";
import Landing from "../Landing/Landing";

export default function Header() {
  return (
    <div>
      <header className="header">
        <Topbar />
        <Navbar />
        <Landing />
      </header>
    </div>
  );
}
