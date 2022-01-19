import React from 'react';
import styles from './profile.module.css'

const Profile = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.header}>
        <div className={styles.header__name}>Билал Орзамиев</div>
        <div className={styles.header__purpose}>Быть лучше!</div>
      </div>
      <div className={styles.main}>
        <div className={styles.main__profile}></div>
        <div className={styles.main__info}></div>
      </div>
      <div className={styles.footer}></div>
      
    </div>
  );
};

export default Profile;