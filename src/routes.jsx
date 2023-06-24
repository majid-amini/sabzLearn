import Index from "./Pages/Index";
import CourseInfo from "./Pages/CourseInfo";
import Category from "./Pages/Category/Category";
import ArticleInfo from "./Pages/ArticleInfo";

const routes = [
  { path: "/", element: <Index /> },
  { path: "/course-info/:courseName", element: <CourseInfo /> },
  { path: "/category-info/:categoryName", element: <Category /> },
  { path: "/article-info/:articleName", element: <ArticleInfo /> },
];

export default routes;
