import React, { useEffect, useState } from "react";
import Footer from "../../Components/Footer/Footer";
import Topbar from "../../Components/Topbar/Topbar";
import Navbar from "../../Components/Navbar/Navbar";
import CourseBox from "../../Components/CourseBox/CourseBox";
import "./Category.css";
import Pagination from "../../Components/Pagination/Pagination";
import { useParams } from "react-router-dom";
import Courses from "../Courses/Courses";

export default function Category() {
  const [courses, setCourses] = useState([]);
  const [orderedCourses, setOrderedCourses] = useState([]);
  const [showCourses, setShowCourses] = useState([]);
  const [status, setStatus] = useState("default");
  const { categoryName } = useParams();
  const [statusTitle, setStatusTitle] = useState("مرتب سازی پیش فرض");

  useEffect(() => {
    fetch(`http://localhost:4000/v1/courses/category/${categoryName}`)
      .then((res) => res.json())
      .then((allCourses) => {
        console.log(allCourses);
        setCourses(allCourses);
        setOrderedCourses(allCourses);
      });
  }, [categoryName]);

  useEffect(() => {
    switch (status) {
      case "free": {
        const freeCourses = courses.filter((course) => course.price === 0);
        setOrderedCourses(freeCourses);
        break;
      }
      case "money": {
        const nonFreeCourses = courses.filter((course) => course.price !== 0);
        setOrderedCourses(nonFreeCourses);
        break;
      }
      case "last": {
        setOrderedCourses(courses);
        break;
      }
      case "first": {
        const reversedCourses = courses.slice().reverse();
        setOrderedCourses(reversedCourses);
        break;
      }
      case "cheap": {
        const cheap = courses
          .slice()
          .sort((a, b) => a.price.toString().localeCompare(b.price.toString()));
        setOrderedCourses(cheap);
        break;
      }
      case "expensive": {
        const expensive = courses
          .slice()
          .sort((a, b) => b.price.toString().localeCompare(a.price.toString()));
        setOrderedCourses(expensive);

        break;
      }
      default: {
        setOrderedCourses(courses);
      }
    }
  }, [status]);

  const titleChangeHandler = (event) => {
    setStatusTitle(event.target.textContent);
  };
  return (
    <>
      <Topbar />
      <Navbar />

      <section className="courses">
        <div className="container">
          <div className="courses-content">
            <div className="container">
              <div className="row">
                {courses.length !== 0 ? (
                  <>
                    <div className="courses-top-bar">
                      <div className="courses-top-bar__right">
                        <div className="courses-top-bar__row-btn courses-top-bar__icon--active">
                          <i className="fas fa-border-all courses-top-bar__icon"></i>
                        </div>
                        <div className="courses-top-bar__column-btn">
                          <i className="fas fa-align-left courses-top-bar__icon"></i>
                        </div>

                        <div className="courses-top-bar__selection">
                          <span className="courses-top-bar__selection-title">
                            {statusTitle}
                            <i className="fas fa-angle-down courses-top-bar__selection-icon"></i>
                          </span>
                          <ul className="courses-top-bar__selection-list">
                            <li
                              className="courses-top-bar__selection-item courses-top-bar__selection-item--active"
                              onClick={(event) => {
                                setStatus("default");
                                titleChangeHandler(event);
                              }}
                            >
                              مرتب سازی پیش فرض
                            </li>
                            <li
                              className="courses-top-bar__selection-item"
                              onClick={(event) => {
                                setStatus("free");
                                titleChangeHandler(event);
                              }}
                            >
                              مرتب سازی بر اساس دوره رایگان
                            </li>
                            <li
                              className="courses-top-bar__selection-item"
                              onClick={(event) => {
                                setStatus("money");
                                titleChangeHandler(event);
                              }}
                            >
                              مرتب سازی بر اساس دوره پولی
                            </li>
                            <li
                              className="courses-top-bar__selection-item"
                              onClick={(event) => {
                                setStatus("last");
                                titleChangeHandler(event);
                              }}
                            >
                              مرتب سازی بر اساس آخرین
                            </li>
                            <li
                              className="courses-top-bar__selection-item"
                              onClick={(event) => {
                                setStatus("first");
                                titleChangeHandler(event);
                              }}
                            >
                              مرتب سازی بر اساس اولین
                            </li>
                            <li
                              className="courses-top-bar__selection-item"
                              onClick={(event) => {
                                setStatus("cheap");
                                titleChangeHandler(event);
                              }}
                            >
                              مرتب سازی بر اساس ارزان ترین
                            </li>
                            <li
                              className="courses-top-bar__selection-item"
                              onClick={(event) => {
                                setStatus("expensive");
                                titleChangeHandler(event);
                              }}
                            >
                              مرتب سازی بر اساس گران ترین
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="courses-top-bar__left">
                        <form action="#" className="courses-top-bar__form">
                          <input
                            type="text"
                            className="courses-top-bar__input"
                            placeholder="جستجوی دوره ..."
                          />
                          <i className="fas fa-search courses-top-bar__search-icon"></i>
                        </form>
                      </div>
                    </div>
                    {showCourses.map((course) => (
                      <CourseBox {...course} />
                    ))}
                    <Pagination
                      items={orderedCourses}
                      itemCount={3}
                      pathName={`/category-info/${categoryName}`}
                      setShowItems={setShowCourses}
                    />
                  </>
                ) : (
                  <div className="alert alert-warning">
                    هنوز هیچ دوره ای برای این دسته بندی وجود ندارد
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
