import React from "react";
import { Link } from "react-router-dom";
import "./ArticleBox.css";

export default function ArticleBox({ title, desc, cover, link }) {
  return (
    <div className="col-4">
      <div className="article-card">
        <div className="article-card__header">
          <Link to={`/article-info/${link}`} className="article-card__link-img">
            <img
              src={cover}
              className="article-card__img"
              alt="Article Cover"
            />
          </Link>
        </div>
        <div className="article-card__content">
          <Link to={`/article-info/${link}`} className="article-card__link">
            {title}
          </Link>
          <p className="article-card__text">{desc}</p>
          <Link to={`/article-info/${link}`} className="article-card__btn">
            بیشتر بخوانید
          </Link>
        </div>
      </div>
    </div>
  );
}
