import React, { useEffect, useState } from 'react';
import styles from './profile.module.css'
import styless from '../Subscriptions/subscription.module.css'
import stylesss from '../Trainer/trainer.module.css'
import { useDispatch, useSelector } from 'react-redux';
import {
  loadUsers,
  loadUserSubscription,
  loadUserTrainer,
  uploadAvatar
} from '../../redux/features/profile';
import { useParams } from 'react-router-dom';
import { loadSubscriptions } from '../../redux/features/subscription';
import { loadTrainers } from '../../redux/features/trainer';

const Profile = () => {

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(loadUsers())
  },[dispatch]);

  useEffect(()=>{
    dispatch(loadUserSubscription(id))
  }, [dispatch])

  useEffect(()=> {
    dispatch(loadUserTrainer(id))
  },[dispatch])

  useEffect(()=> {
    dispatch(loadSubscriptions())
  },[dispatch])

  useEffect(()=>{
    dispatch(loadTrainers())
  },[dispatch])

  const users = useSelector(state => state.profileReducer.users)

  const {id} = useParams();

  const userProfile = users.find((user)=> user._id === id);

  const subscriptions = useSelector(state => state.subscriptionsReducer.subscriptions);

  const subscription = useSelector(state => state.profileReducer.subscription);

  const subsId = subscriptions.find((item)=> item._id === subscription.subscription)

  const trainers = useSelector(state => state.trainerReducer.trainers);

  const trainer = useSelector(state => state.profileReducer.subscription.trainer);

  const trainerId= trainers.find((item)=> item._id === trainer);

  console.log(trainerId)
  console.log(subsId)

  const [userName, setUserName] = useState('');
  const [userAge, setUserAge] = useState('');
  const [userWeight, setUserWeight] = useState('');
  const [userAboutMe, setUserAboutMe] = useState('');
  const [userPurpose, setUserPurpose] = useState('');
  const [FavoriteQuote, setFavoriteQuote] = useState('');

  const handleChangeImg = (e) => {
    dispatch(uploadAvatar(e.target.files[0], id))
  }

  const handleChangeName = (e) => {
    setUserName(e.target.value);
  };

  const handleChangeAge = (e) => {
    setUserAge(e.target.value)
  }

  const handleChangeWeight = (e) => {
    setUserWeight(e.target.value)
  }

  const handleChangeAboutMe = (e) => {
    setUserAboutMe(e.target.value)
  }

  const handleChangePurpose = (e) => {
    setUserPurpose(e.target.value)
  }

  const handleChangeFavoriteQuote = (e) => {
    setFavoriteQuote(e.target.value)
  }

  const inputIcon = '*';

  if(!users.length ) {
    return "загрузка"
  }
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
            Имя:
            <input type="text"
                   value={!userName ? userProfile.name : userName}
                   onChange={handleChangeName}
                   className={styles.editInput}
            />
          </div>
          <div className={styles.main__profile_date}>
            Возраст:
            <input type="text"
                   value={!userAge ? userProfile.age : userAge}
                   onChange={handleChangeAge}
                   className={styles.editInput}
            />
          </div>
          <div className={styles.main__profile_nation}>
            Вес:
            <input type="text"
                   value={!userWeight ? userProfile.weight : userWeight}
                   onChange={handleChangeWeight}
            />
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
            <input type="text"
                   value={!userAboutMe ? userProfile.aboutMe : userAboutMe}
                   onChange={handleChangeAboutMe}
            />
          </div>
          <div className={styles.main__info_purpose}><h2>Цель тренировок:</h2>
            <span> Держать себя в форме, #антижир</span>
            <input type="text"
                   value={!userPurpose ? userProfile.purposeTrain : userPurpose}
                   onChange={handleChangePurpose}
            />
          </div>
          <div className={styles.main__info_citata}>
            <h2>Любимая цитата:</h2>
            <span> Ave Caesar, imperator, morituri te salutant.</span>
            <input type="text"
                   value={!FavoriteQuote ? userProfile.favoriteQuote : FavoriteQuote}
                   onChange={handleChangeFavoriteQuote}
            />
          </div>
        </div>
      </div>
      {trainerId || subsId ?
        <div className={styles.footer}>
          {subsId ?
            <div className={styless.footer__subscription}>
              <figure className={styless.cart} key={subsId._id}>
                <h2 className={styless.cart__img__title}>{subsId.name}</h2>
                <img src={`http://localhost:5000/${subsId.img}`} alt="" />
                <figcaption>
                  <h3 className={styless.cart__price}>{subsId.price} ₽</h3>
                  <p>Абонемент на: {subsId.time} дней</p>
                  <p>{subsId.text}</p>
                </figcaption>
              </figure>
            </div> : null}
          {trainerId ?
            <div className={styles.footer__trainer}>
              <div className={stylesss.cart}>
                <div className={stylesss.block_cart}>
                  <div className={stylesss.image}>
                    <img
                      src={`http://localhost:5000/${trainerId.img}`}
                      alt="" />
                  </div>
                  <div className={stylesss.info}>
                    <h3>Имя: {trainerId.name}</h3>
                    <p>
                      {trainerId.description}
                    </p>
                    <p className={stylesss.star}>
                      ★ {trainerId.rating}
                    </p>
                  </div>
                </div>
              </div>
            </div> : null}
        </div> : null }
    </div>
  );
};

export default Profile;