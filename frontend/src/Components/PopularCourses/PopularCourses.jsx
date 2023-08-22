import React, { useEffect, useState } from "react";
import "./PopularCourses.css";
import SectionHeader from "../SectionHeader/SectionHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import CourseBox from "../CourseBox/CourseBox";

export default function PopularCourses() {
  const [popularCourses, setPopularCourses] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/v1/courses/popular`)
      .then((res) => res.json())
      .then((allPopularCourses) => setPopularCourses(allPopularCourses));
  }, []);
  return (
    <div className="popular">
      <div className="container">
        <SectionHeader
          title={"محبوب ترین دوره ها"}
          desc={"دوره های محبوب بر اساس امتیاز دانشجو ها "}
        />

        <div className="courses-content">
          <div className="container">
            <div className="row">
              <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                loop={true}
                className="mySwiper"
              >
                {popularCourses.map((popularCourse) => (
                  <SwiperSlide key={popularCourse.id}>
                    <CourseBox {...popularCourse} isSlider={true} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
