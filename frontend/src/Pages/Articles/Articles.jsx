import React, { useEffect, useState } from "react";
import ArticleBox from "../../Components/ArticleBox/ArticleBox";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import Topbar from "../../Components/Topbar/Topbar";
import Pagination from "../../Components/Pagination/Pagination";
import "./Articles.css";

export default function Articles() {
  const [articles, setArticles] = useState([]);
  const [showArticles, setShowArticles] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:4000/v1/articles`)
      .then((res) => res.json())
      .then((allArticles) => setArticles(allArticles));
  }, []);

  return (
    <>
      <Topbar />
      <Navbar />

      <BreadCrumb
        links={[
          { id: 1, title: "خانه", to: "" },
          {
            id: 2,
            title: "تمامی مقاله ها",
            to: "articles/1",
          },
        ]}
      />

      <section className="courses">
        <div className="container">
          <div className="courses-content">
            <div className="container">
              <div className="row">
                {showArticles.map((article) => (
                  <ArticleBox {...article} />
                ))}
              </div>
            </div>
          </div>

          <Pagination
            items={articles}
            itemCount={3}
            pathName="/articles"
            setShowItems={setShowArticles}
          />
        </div>
      </section>

      <Footer />
    </>
  );
}
