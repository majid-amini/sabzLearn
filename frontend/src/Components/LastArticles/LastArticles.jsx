import React, { useEffect, useState } from "react";
import "./LastArticles.css";
import SectionHeader from "../SectionHeader/SectionHeader";
import ArticleBox from "../ArticleBox/ArticleBox";

export default function LastArticles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/v1/articles`)
      .then((res) => res.json())
      .then((allArticles) => {
        console.log(allArticles);
        setArticles(allArticles);
      });
  }, []);
  return (
    <section className="articles">
      <div className="container">
        <SectionHeader
          title={"جدیدترین مقاله ها "}
          desc={"پیش به سوی ارتقای دانش"}
          btnTitle={"تمامی دوره ها"}
        />

        <div className="articles__content">
          <div className="row">
            {articles.slice(0, 3).map((article) => (
              <ArticleBox
                title={article.title}
                cover={"images/blog/3.jpg"}
                desc={article.desc}
                link={article.shortName}
              />
            ))}

            {/* <ArticleBox
              title={
                "نحوه نصب کتابخانه در پایتون | آموزش نصب کتابخانه در پایتون "
              }
              cover={"images/blog/3.jpg"}
              desc={
                "زبان پایتون هم مانند دیگر زبان های برنامه نویسی رایج ، دارای کتبخانه های مختلفی برای تسریع ..."
              }
            />
            <ArticleBox
              title={
                "نحوه نصب کتابخانه در پایتون | آموزش نصب کتابخانه در پایتون "
              }
              cover={"images/blog/3.jpg"}
              desc={
                "زبان پایتون هم مانند دیگر زبان های برنامه نویسی رایج ، دارای کتبخانه های مختلفی برای تسریع ..."
              }
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
}
