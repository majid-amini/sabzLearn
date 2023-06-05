import React from "react";
import "./Header.css";
import Navbar from "../Navbar/Navbar";
import Topbar from "../Topbar/Topbar";

export default function Header() {
  return (
    <div>
      <header className="header">
        <Topbar />
        <Navbar />
      </header>
    </div>
  );
}
