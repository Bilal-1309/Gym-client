import React from "react";
import styles from "./gallery.module.css";
import photo1 from "./photo1.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'
import logo from "./logo.png";

const index = () => {
  return (
    <div id="gallery" className={styles.gallery__container}>
      <div className={styles.gallery__block}>
        <h1 className={styles.gallery__title}>Галерея</h1>
        <div className={styles.gallery__row}>
          <Carousel transitionTime={1500} dynamicHeight={600} autoPlay={true} interval={2500} showArrows={true} infiniteLoop={true} showThumbs={false} showIndicators={false} showStatus={false}>
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
                <div className={styles.gallery__photo}>
                  <img src={photo1} alt="" />
                </div>
              </div>
            </div>
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
              <div className={styles.gallery__photo}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4C9LhPBwgF3Td_iNuYcJTDigLF7nHc5bjeg&usqp=CAU" alt="" />
              </div>
            </div>
          </Carousel>
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
    </div >
  );
};

export default index;
