import React from "react";
import Header from "../Components/Header/Header";
import LastCourses from "../Components/LastCourses/LastCourses";
import AboutUs from "../Components/AboutUs/AboutUs";
import PopularCourses from "../Components/PopularCourses/PopularCourses";
import PresellCourses from "../Components/PresellCourses/PresellCourses";
import LastArticles from "../Components/LastArticles/LastArticles";
import Footer from "../Components/Footer/Footer";
import CircleSpinner from "../Components/CircleSpinner/CircleSpinner";

export default function Index() {
  return (
    <div>
      {/* <CircleSpinner /> */}
      <Header />
      <LastCourses />
      <AboutUs />
      <PopularCourses />
      <PresellCourses />
      <LastArticles />
      <Footer />
    </div>
  );
}
