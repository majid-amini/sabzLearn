import React from "react";
import "./LastCourses.css";
import SectionHeader from "../SectionHeader/SectionHeader";

export default function LastCourses() {
  return (
    <div>
      <div class="courses">
        <div class="container">
          <SectionHeader
            title={"جدیدترین دوره ها"}
            desc={"سکوی پرتاب شما به سمت موفقیت"}
            btnTitle={"تمامی دوره ها س"}
          />
        </div>
      </div>
    </div>
  );
}
