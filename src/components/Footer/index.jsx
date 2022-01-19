import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.footer}>
        <div className={styles.footer__block}>
          <h4 className={styles.footer__title}>Телефон</h4>
          <p className={styles.footer__text}>7 (812) 223 46 05 </p>
        </div>
        <div className={styles.footer__block}>
          <h4 className={styles.footer__title}>Мы в соц сетях</h4>
          <div className={styles.footer__social__item}>
            <a href="https://www.instagram.com/">Instagram</a>
            <a href="https://ru-ru.facebook.com/">Facebook</a>
            <a href="https://www.youtube.com/">YouTube</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
