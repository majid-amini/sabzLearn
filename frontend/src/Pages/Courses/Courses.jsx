import React, { useEffect, useState } from "react";
import Topbar from "../../Components/Topbar/Topbar";
import Navbar from "../../Components/Navbar/Navbar";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import Footer from "../../Components/Footer/Footer";
import CourseBox from "../../Components/CourseBox/CourseBox";
import "./Courses.css";
import Pagination from "../../Components/Pagination/Pagination";


export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [showCourses, setShowCourses] = useState([]);
  
  useEffect(() => {
    fetch(`http://localhost:4000/v1/courses`)
      .then((res) => res.json())
      .then((allCourses) => setCourses(allCourses));
  }, []);
  
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
                {showCourses.map((course) => (
                  <CourseBox key={course.id} {...course} />
                ))}
              </div>
            </div>
          </div>

          <Pagination 
          items={courses}
          itemCount={3}
          pathName="/courses"
          setShowCourses={setShowCourses}
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}
