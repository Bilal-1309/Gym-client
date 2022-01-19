import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadSubscriptions } from '../../../redux/features/subscription';
import styles from './carts.module.css'

const Carts = () => {

  const dispatch = useDispatch()

 


  const subscriptions = useSelector(state => state.subscriptionsReducer.subscriptions)
console.log(subscriptions);

  return (
    <div className={styles.carts__block}>
      <div className={styles.container}>
        <h1 className={styles.carts__title}>Абонементы</h1>
        <div className={styles.carts__items}>

          {/* {subscriptions.map((subscription) => {
            return(
              <div className={styles.cart}>

              </div>
            )
          })} */}

        </div>
      </div>
    </div>
  );
};

export default Carts;