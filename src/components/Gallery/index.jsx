import React from "react";
import styles from "./gallery.module.css";
import photo1 from "./photo1.png";
import logo from "./logo.png";

const index = () => {
  return (
    <div id="gallery" className={styles.gallery__container}>
      <div className={styles.gallery__block}>
        <h1 className={styles.gallery__title}>Галерея</h1>
        <div className={styles.gallery__row}>
          <div className={styles.gallery__text}>
            <div>
              <div className={styles.gallery__line}></div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                iaculis aliquam at porttitor placerat. Mattis venenatis ac
                bibendum viverra integer auctor pharetra ut vivamus. Sed a
                faucibus lobortis sed morbi scelerisque sed sed. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Sed iaculis aliquam
                at porttitor placerat. Mattis venenatis ac bibendum viverra
                integer auctor pharetra ut vivamus. Sed a faucibus lobortis sed
                morbi scelerisque sed sed.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Sed iaculis aliquam at porttitor
                placerat. Mattis venenatis ac bibendum viverra integer auctor
                pharetra ut vivamus. Sed a faucibus lobortis sed morbi
                scelerisque sed sed. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Sed iaculis aliquam at porttitor placerat.
                Mattis venenatis ac bibendum viverra integer auctor pharetra ut
                vivamus. Sed a faucibus lobortis sed morbi scelerisque sed sed.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                iaculis aliquam at porttitor placerat. Mattis venenatis ac
                bibendum viverra integer auctor pharetra ut vivamus. Sed a
                faucibus lobortis sed morbi scelerisque sed sed.Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Sed iaculis aliquam
                at porttitor placerat. Mattis venenatis ac bibendum viverra
                integer auctor pharetra ut vivamus. Sed a faucibus lobortis sed
                morbi scelerisque sed sed.
              </p>
            </div>
          </div>
          <div className={styles.gallery__photo}>
            <img src={photo1} alt="" />
          </div>
        </div>

        <div className={styles.gallery__row2}>
          <div className={styles.gallery__logo}>
            <img src={logo} alt="" />
          </div>
          <div className={styles.gallery__logoinfo}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              iaculis aliquam at porttitor placerat. Mattis venenatis ac
              bibendum viverra integer auctor pharetra ut vivamus. Sed a
              faucibus lobortis sed morbi scelerisque sed sed.Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Sed iaculis aliquam at
              porttitor placerat. Mattis venenatis ac bibendum viverra integer
              auctor pharetra ut vivamus. Sed a faucibus lobortis sed morbi
              scelerisque sed sed. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Sed iaculis aliquam at porttitor placerat. Mattis
              venenatis ac bibendum viverra integer auctor pharetra ut vivamus.
              Sed a faucibus lobortis sed morbi scelerisque sed sed. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Sed iaculis aliquam
              at porttitor placerat. Mattis venenatis ac bibendum viverra
              integer auctor pharetra ut vivamus. Sed a faucibus lobortis sed
              morbi scelerisque sed sed.Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Sed iaculis aliquam at porttitor placerat. Mattis
              venenatis ac bibendum viverra integer auctor pharetra ut vivamus.
              Sed a faucibus lobortis sed morbi scelerisque sed sed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
