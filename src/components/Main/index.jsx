import React from 'react';
import Subscriptions from './Subscriptions';
import styles from './main.module.css'

const Main = () => {
  return (
    <div className={styles.main}>
      <Subscriptions />
    </div>
  );
};

export default Main;