import React, { useEffect, useState } from "react";
import "./PresellCourses.css";
import SectionHeader from "../SectionHeader/SectionHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import CourseBox from "../CourseBox/CourseBox";

export default function PresellCourses() {
  const [presellCourses, setPresellCourses] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:4000/v1/courses/presell`)
      .then((res) => res.json())
      .then((presellCourses) => setPresellCourses(presellCourses));
  }, []);
  return (
    <>
      <div className="presell">
        <div className="container">
          <SectionHeader
            title={"دوره های در حال پیش فروش"}
            desc={"متن تستی برای توضیحات دوره های پیش فروش"}
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
                  {presellCourses.map((presellCourse) => (
                    <SwiperSlide key={presellCourse.id}>
                      <CourseBox {...presellCourse} isSlider={true} />
                    </SwiperSlide>
                  ))}
                </Swiper>
                {console.log(presellCourses)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
