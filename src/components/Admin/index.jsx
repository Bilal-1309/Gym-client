import React, { useEffect } from "react";
import styles from "./admin.module.css";
import { useDispatch, useSelector } from "react-redux";
// import { useParams } from 'react-router-dom';
import { loadAdmin } from "../../redux/features/admin";
import { loadTrainers } from "../../redux/features/trainer";
import { loadSubscriptions } from '../../redux/features/subscription'
import { deleteTrainers } from "../../redux/features/trainer";
import AddTrainer from "./addTrainer";
import AddAbonement from "./addAbonement";

const Admin = () => {
  const dispatch = useDispatch();
  // const admin = useSelector((state) => state.adminReducer.users);
  const adminId = useSelector((state) => state.auth.id);
  const trainers = useSelector((state) => state.trainerReducer.trainers);
  const subscriptions = useSelector((state) => state.subscriptionsReducer.subscriptions)
  console.log(adminId);

  // const {id} = useParams();

  const handleDelete = (id) => {
    dispatch(deleteTrainers(id));
  };

  useEffect(() => {
    dispatch(loadAdmin());
    dispatch(loadTrainers());
    dispatch(loadSubscriptions())
  }, [dispatch]);

  return (
    <div className={styles.admin__container}>
      <div className={styles.admin__block}>
        <div className={styles.admin__row}>
          <div>
            <h1>Админ</h1>
          </div>
        </div>

        <div className={styles.admin__row}>
          <div>
            <h1>Абонементы</h1>
          </div>
          <div className={styles.admin__postInputs}>
            <AddAbonement />
          </div>
          <div className={styles.admin__abonements}>
            {subscriptions.map((item,index) => {
              return (
                <div key={index}>
                  <p>имя: {item.name}</p>
                  <img className={styles.admin__img} src={`http://localhost:5000/${item.img}`} alt="" />
                  <p>цена: {item.price}</p>
                  <p>продолжительность: {item.time}</p>
                  <p>описание: {item.text}</p>
                </div>
              )
            })}
          </div>
        </div>

        <div className={styles.admin__row}>
          <div>
            <h1>Тренеры</h1>
          </div>
          <div className={styles.admin__postInputs}>
            <AddTrainer />
          </div>
          <div className={styles.admin__trainers}>
            {trainers.map((item, index) => {
              return (
                <div key={index}>
                  <p>название: {item.name}</p>
                  <p>рейтинг: {item.rating}</p>
                  <img
                    className={styles.admin__img}
                    src={`http://localhost:5000/${item.img}`}
                    alt=""
                  />
                  <p>описание: {item.description}</p>
                  <button onClick={() => handleDelete(item._id)}>
                    Удалить
                  </button>
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.admin__row}>
          <div>
            <h1>Покупатели</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
