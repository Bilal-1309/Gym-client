import React, { useEffect } from "react";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import styles from "./header.module.css";
import bg from "../../assets/bg1.png";
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

  console.log(admin);

  const handleClickLogut = () => {
    dispatch(logOut());
  };

  return (
    <>
      {admin ? (
        <div className={styles.header__bgImage}>
          <img src={bg} alt="" />
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
                <Link
                  className={styles.header__links}
                  to="subscription"
                  smooth={true}
                  duration={1000}
                >
                  Купить абонимент
                </Link>
                <Link
                  className={styles.header__links}
                  to="gallery"
                  smooth={true}
                  duration={1000}
                >
                  Галерея
                </Link>
                <Link
                  className={styles.header__links}
                  style={{ color: "white" }}
                  to="address"
                  smooth={true}
                  duration={1000}
                >
                  Адрес
                </Link>
                {!token ? (
                  <NavLink
                    className={styles.header__links}
                    to={"/signin"}
                    style={{ color: "white" }}
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
            <div className={styles.header__info}>
              <h1>
                Take the lesson from <br /> only $10.99 a month.
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum
                nunc congue aliquam lectus non pellentesque. Convallis facilisi
                iaculis id nunc, cursus.
              </p>
              <button>Купить</button>
            </div>
            <div className={styles.header__moreinfo}>
              <div className={styles.header__moreinfo__text}>
                <p>50 - Тренировочных тренажеров</p>
                <p>|</p>
                <p>Раздел об информации о нашем фитнес зале </p>
                <p>|</p>
                <button>Перейти</button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};
export default Header;