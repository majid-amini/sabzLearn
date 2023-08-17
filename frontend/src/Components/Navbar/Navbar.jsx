import React, { useContext, useState, useEffect } from "react";
import AuthContext from "../../contex/authcontex";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  const authContex = useContext(AuthContext);
  const [allMenus, setAllMenus] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/v1/menus`)
      .then((res) => res.json())
      .then((menus) => setAllMenus(menus));
  }, []);
  console.log(authContex);
  return (
    <div className="main-header">
      <div className="container-fluid">
        <div className="main-header__content">
          <div className="main-header__right">
            <img
              src="/images/logo/Logo.png"
              className="main-header__logo"
              alt="لوگوی سبزلرن"
            />

            <ul className="main-header__menu">
              <li className="main-header__item">
                <Link to={"/"} className="main-header__link">
                  صفحه اصلی
                </Link>
              </li>

              {allMenus.map((menu) => (
                <li className="main-header__item">
                  <Link to={menu.href} className="main-header__link">
                    {menu.title}
                    {menu.submenus.length !== 0 && (
                      <>
                        <i className="fas fa-angle-down main-header__link-icon"></i>
                        <ul className="main-header__dropdown">
                          {menu.submenus.map((submenuItem) => (
                            <li className="main-header__dropdown-item">
                              <Link to={submenuItem.href} className="main-header__dropdown-link">
                                {submenuItem.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="main-header__left">
            <Link className="main-header__search-btn">
              <i className="fas fa-search main-header__search-icon"></i>
            </Link>
            <Link className="main-header__cart-btn">
              <i className="fas fa-shopping-cart main-header__cart-icon"></i>
            </Link>
            {authContex.isLoggedIn ? (
              <Link to="#" className="main-header__profile">
                <span className="main-header__profile-text">
                  {authContex.userInfos.name}
                </span>
              </Link>
            ) : (
              <Link to="/login" className="main-header__profile">
                <span className="main-header__profile-text">
                  ورود / ثبت‌نام
                </span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
