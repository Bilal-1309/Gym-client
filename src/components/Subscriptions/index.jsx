import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadSubscriptions } from "../../redux/features/subscription";
import styles from "./subscription.module.css";

const Subscriptions = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadSubscriptions());
  }, [dispatch]);

  const subscriptions = useSelector(
    (state) => state.subscriptionsReducer.subscriptions
  );

  return (
    <div className={styles.carts__block} id="subscription">
      <div className={styles.container}>
        <h1 className={styles.carts__title}>Абонементы</h1>
        <div className={styles.carts__items}>
          {subscriptions.map((subscription) => {
            return (
              <>
                <figure className={styles.cart} key={subscription._id}>
                  <h2 className={styles.cart__img__title}>{subscription.name}</h2>
                  <img
                    src={`http://localhost:5000/${subscription.img}`}
                    alt=""
                  />
                  <figcaption>
                  <h3 className={styles.cart__price}>{subscription.price} ₽</h3>
                    <p>
                      Абонемент на: {subscription.time} дней
                    </p>
                    <p>
                      {subscription.text}
                    </p>
                    <button>More Info</button>
                  </figcaption>
                </figure>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Subscriptions;
