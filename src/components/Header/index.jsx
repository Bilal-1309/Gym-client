import React from "react";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import styles from "./header.module.css";
import bg from "../../assets/bg1.png";
import logo1 from "../../assets/logog.png";

const Header = () => {
  return (
    <>
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
              <NavLink 
              className={styles.header__links} 
              to={"/signin"}
              style={{ color: "white" }}
              >
                Вход
              </NavLink>
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
    </>
  );
};

export default Header;
