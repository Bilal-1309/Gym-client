import React from 'react';
import Carts from './Carts';
import styles from './main.module.css'

const Main = () => {
  return (
    <div className={styles.main}>
      <Carts />
    </div>
  );
};

export default Main;