import React, { useState, useEffect } from "react";

import "./Pagination.css";
import { Link, useParams } from "react-router-dom";

export default function Pagination({
  items,
  itemCount,
  pathName,
  setShowCourses,
}) {
  const [pageCount, setPageCount] = useState(null);
  const { page } = useParams();

  useEffect(() => {
    let endIndex = itemCount * page;
    let startIndex = endIndex - itemCount;
    let paginatedItems = items.slice(startIndex, endIndex);
    setShowCourses(paginatedItems);

    let pagesNumber = Math.ceil(items.length / itemCount);
    setPageCount(pagesNumber);
  }, [page, items]);
  // console.log(itemCount);
  return (
    <div className="courses-pagination">
      <ul className="courses__pagination-list">
        <li className="courses__pagination-item">
          <Link to={""} className="courses__pagination-link">
            <i className="fas fa-long-arrow-alt-right courses__pagination-icon"></i>
          </Link>
        </li>
        <li className="courses__pagination-item">
          <Link to={""} className="courses__pagination-link">
            1
          </Link>
        </li>
        <li className="courses__pagination-item">
          <Link to={""} className="courses__pagination-link">
            2
          </Link>
        </li>
        <li className="courses__pagination-item">
          <Link
            to={""}
            className="courses__pagination-link courses__pagination-link--active"
          >
            3
          </Link>
        </li>
        <li className="courses__pagination-item">
          <Link to={""} className="courses__pagination-link">
            <i className="fas fa-long-arrow-alt-left courses__pagination-icon"></i>
          </Link>
        </li>
      </ul>
    </div>
  );
}
