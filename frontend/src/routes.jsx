import Index from "./Pages/Index";
import CourseInfo from "./Pages//CourseInfo/CourseInfo";
import Category from "./Pages/Category/Category";
import ArticleInfo from "./Pages/ArticleInfo/ArticleInfo";
import Courses from "./Pages/Courses/Courses";
import Articles from "./Pages/Articles/Articles";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Contact from "./Pages/Contact/Contact";

const routes = [
  { path: "/", element: <Index /> },
  { path: "/course-info/:courseName", element: <CourseInfo /> },
  { path: "/category-info/:categoryName/:page", element: <Category /> },
  { path: "/article-info/:articleName", element: <ArticleInfo /> },
  { path: "/courses/:page", element: <Courses /> },
  { path: "/articles/:page", element: <Articles /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/contact", element: <Contact /> },
];

export default routes;
