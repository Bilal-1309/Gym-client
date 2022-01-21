import React, { useEffect } from 'react';
import styles from './profile.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { loadUsers, uploadAvatar } from '../../redux/features/profile';
import { useParams } from 'react-router-dom';

const Profile = () => {

  const dispatch = useDispatch();

  const users = useSelector(state => state.profileReducer.users)

  const token = useSelector((state)=> state.auth.token);

  const userId = useSelector((state)=> state.auth.id);

  const {id} = useParams();

  useEffect(()=>{
    dispatch(loadUsers())
  },[dispatch]);

  const userProfile = users.find((user)=> user._id === id)

  const handleChangeImg = (e) => {
    dispatch(uploadAvatar(e.target.files[0], id))
  }
  if(!users.length) {
    return "загрузка"
  }
  const inputIcon = '*';
  return (
    <div className={styles.profile}>
      <div className={styles.header}>
        <div className={styles.header__name}>{userProfile.name}</div>
        <div className={styles.header__citata}>Цель быть лучше себя вчерашнего! </div>
      </div>
      <div className={styles.main}>
        <div className={styles.main__profile}>
          <div className={styles.main__profile_photo}>
            {userProfile.img ? (
                <img src={`http://localhost:5000/${userProfile.img}`} alt="avatar"/>
              ): (
              <img src="https://avatars.mds.yandex.net/get-pdb/1996600/d1725ec1-41d3-4b2c-ab24-91ec603557bf/s375" alt=""/>
              )}
            <div className={styles.input__wrapper}>
              <input
                onChange={(e) => handleChangeImg(e)}
                name="file"
                type="file"
                id="input__file"
                className={`${styles.input} ${styles.input__file}`}

              />
              <label htmlFor="input__file" className={styles.input__file_button}>
                  <span className={styles.input__file_button_text}>
                    <img
                      className={styles.input__file_icon_wrapper}
                      src={inputIcon}
                      alt=""
                    />
                  </span>
              </label>
            </div>
          </div>
          <div className={styles.main__profile_name}>
            Имя: {userProfile.name}
          </div>
          <div className={styles.main__profile_date}>
            Возраст: 23
          </div>
          <div className={styles.main__profile_nation}>
            Нация: Нохчо
          </div>
          <div className={styles.main__profile_socseti}>
            Соц.сети: {userProfile.email}
          </div>
        </div>
        <div className={styles.main__info}>
          <div className={styles.main__info_about}>
            <h2>About Me</h2>
            <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam at dolor dolores explicabo magnam molestiae nam provident quo repellendus? Nemo, quidem, sit. Eum excepturi tempora veniam. Consequatur consequuntur dolorem rem.
            </span>
          </div>
          <div className={styles.main__info_purpose}><h2>Цель тренировок:</h2>
            <span> Держать себя в форме, #антижир</span></div>
          <div className={styles.main__info_citata}><h2>Любимая цитата:</h2>
            <span> Ave Caesar, imperator, morituri te salutant.</span></div>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.footer__subscription}>
          <div className={styles.footer__subscription}></div>
        </div>
        <div className={styles.footer__trainer}></div>
      </div>
    </div>
  );
};

export default Profile;