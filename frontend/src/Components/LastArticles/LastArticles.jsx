import React from "react";
import "./LastArticles.css";
import SectionHeader from "../SectionHeader/SectionHeader";
import ArticleBox from "../ArticleBox/ArticleBox";

export default function LastArticles() {
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
            <ArticleBox
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
            />
            <ArticleBox
              title={
                "نحوه نصب کتابخانه در پایتون | آموزش نصب کتابخانه در پایتون "
              }
              cover={"images/blog/3.jpg"}
              desc={
                "زبان پایتون هم مانند دیگر زبان های برنامه نویسی رایج ، دارای کتبخانه های مختلفی برای تسریع ..."
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}
