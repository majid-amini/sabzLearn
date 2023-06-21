import React from "react";
import "./PresellCourses.css";
import SectionHeader from "../SectionHeader/SectionHeader";

export default function PresellCourses() {
  return (
    <div className="presell">
      <div className="container">
        <SectionHeader
          title={"دوره های در حال پیش فروش"}
          desc={"متن تستی برای توضیحات دوره های پیش فروش"}
        />
      </div>
    </div>
  );
}
