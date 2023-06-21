import React from "react";
import "./LastArticles.css";
import SectionHeader from "../SectionHeader/SectionHeader";

export default function LastArticles() {
  return (
    <section className="articles">
      <div className="container">
        <SectionHeader
          title={"جدیدترین مقاله ها "}
          desc={"پیش به سوی ارتقای دانش"}
          btnTitle={"تمامی دوره ها"}
        />
      </div>
    </section>
  );
}
