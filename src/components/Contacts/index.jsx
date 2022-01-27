import React from "react";
import styles from "./contacts.module.css";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import { useState } from "react";

const Contacts = () => {

  const [getMap, setGetMap] = useState(false)

  const handleGetMap = () => {
    setGetMap(true)
  }

  return (
    <div className={styles.contacts} id="address">
      <div className={styles.contacts__line}></div>
      <div className={styles.contacts__address}>
        <h2 className={styles.contacts__address__title}>Адрес</h2>
        <p className={styles.contacts__address__text}>
          г. Грозный, ул. С. Ш. Лорсанова 9, 2 этаж
        </p>
      </div>
      <div className={styles.contacts__map}>
        <div onClick={handleGetMap} className={!getMap ? styles.onMapDiv : styles.noneMapDiv}></div>
        <YMaps>
          
            <Map
              width={"100%"}
              height={"450px"}
              defaultState={{ center: [43.322583, 45.68986], zoom: 15 }}
            >
              <Placemark geometry={[43.322583, 45.68986]} />
            </Map>
          
        </YMaps>
      </div>
    </div>
  );
};

export default Contacts;
