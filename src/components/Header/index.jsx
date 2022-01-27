import React, { useEffect } from "react";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import styles from "./header.module.css";
import logo1 from "../../assets/logog.png";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/features/auth";
import { loadUsers } from "../../redux/features/profile";

const Header = () => {
  const dispatch = useDispatch();

  const token = useSelector((state) => state.auth.token);
  const id = useSelector((state) => state.auth.id);
  const users = useSelector((state) => state.profileReducer.users);
  /* const loading = useSelector((state) => state.profileReducer.loading); */

  useEffect(() => {
    dispatch(loadUsers());
  }, [dispatch]);

  const admin = users.find((item) => (item ? item.role === "admin" : null));

  const handleClickLogut = () => {
    dispatch(logOut());
  };

  return (
    <>
      {admin ? (
        <div className={styles.header__bgImage}>
          <div className={styles.header__container}>
            <div className={styles.header__navbar}>
              <div>
                <img
                  className={styles.header__logo}
                  src={logo1}
                  alt=""
                  width={50}
                />
              </div>
              <div className={styles.header__navbar__text}>
                {!token ? null : id !== admin._id ? (
                  <NavLink className={styles.header__links} to={`user/${id}`}>
                    Мой профиль
                  </NavLink>
                ) : (
                  <NavLink className={styles.header__links} to={`admin/${id}`}>
                    Админ
                  </NavLink>
                )}
                <NavLink className={styles.header__links} to={"/shop"}>
                  Магазин
                </NavLink>
                <NavLink className={styles.header__links} to={"/trainers"}>
                  Тренеры
                </NavLink>
                <Link
                  className={styles.header__links}
                  to="subscription"
                  smooth={true}
                  duration={1000}
                >
                  Купить абонимент
                </Link>
                {!token ? (
                  <NavLink
                    className={styles.header__links}
                    to={"/signin"}
                  >
                    Вход
                  </NavLink>
                ) : (
                  <NavLink
                    className={styles.header__links}
                    to={"/"}
                    style={{ color: "darkred" }}
                    onClick={handleClickLogut}
                  >
                    Выход
                  </NavLink>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};
export default Header;