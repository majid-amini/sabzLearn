import React from "react";
import Topbar from "../../Components/Topbar/Topbar";
import Navbar from "../../Components/Navbar/Navbar";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import Footer from "../../Components/Footer/Footer";
import CourseBox from "../../Components/CourseBox/CourseBox";
import "./Courses.css";

export default function Courses() {
  return (
    <div>
      <Topbar />
      <Navbar />
      <BreadCrumb
        links={[
          { id: 1, title: "خانه", to: "" },
          {
            id: 2,
            title: "تمامی دوره ها",
            to: "courses",
          },
        ]}
      />

      <section className="courses">
        <div className="container">
          <div className="courses-content">
            <div className="container">
              <div className="row">
                <CourseBox />
                <CourseBox />
                <CourseBox />
                <CourseBox />
                <CourseBox />
                <CourseBox />
                <CourseBox />
                <CourseBox />
              </div>
            </div>
          </div>

          <div class="courses-pagination">
            <ul class="courses__pagination-list">
              <li class="courses__pagination-item">
                <a href="#" class="courses__pagination-link">
                  <i class="fas fa-long-arrow-alt-right courses__pagination-icon"></i>
                </a>
              </li>
              <li class="courses__pagination-item">
                <a
                  href="#"
                  class="courses__pagination-link courses__pagination-link--active"
                >
                  1
                </a>
              </li>
              <li class="courses__pagination-item">
                <a href="#" class="courses__pagination-link">
                  2
                </a>
              </li>
              <li class="courses__pagination-item">
                <a href="#" class="courses__pagination-link">
                  3
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
