import React from "react";
import styles from "./header.module.css";
import bg from "./bg1.png";
import logo1 from "./logog.png";

const index = () => {
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
              <p>Купить абонимент</p>
              <p>Галерея</p>
              <p style={{color: "white"}}>Адрес</p>
              <p style={{color: "white"}}>Вход</p>
            </div>
          </div>
          <div className={styles.header__info}>
            <h1>Take the lesson from <br /> only $10.99 a month.</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum nunc congue aliquam lectus non pellentesque. Convallis facilisi iaculis id nunc, cursus.
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

export default index;
