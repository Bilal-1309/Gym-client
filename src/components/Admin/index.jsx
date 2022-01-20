import React, { useEffect } from "react";
import styles from "./admin.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { loadAdmin } from '../../redux/features/admin'

const Admin = () => {

  const dispatch = useDispatch();
  const admin = useSelector((state) => state.adminReducer.users);
  const adminId = useSelector((state) => state.auth.id)
  console.log(adminId);
  
  const {id} = useParams();

  useEffect(() => {
    dispatch(loadAdmin())
  }, [dispatch])

  return (
    <div className={styles.admin__container}>
      <div className={styles.admin__block}>
        <div className={styles.admin__row}>
          <div><h1>Админ</h1></div>
        </div>
        <div className={styles.admin__row}>
          <div><h1>Абонементы</h1></div>
        </div>
        <div className={styles.admin__row}>
          <div><h1>Тренеры</h1></div>
        </div>
        <div className={styles.admin__row}>
          <div><h1>Покупатели</h1></div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
