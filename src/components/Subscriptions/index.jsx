import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadSubscriptions } from "../../redux/features/subscription";
import styles from "./subscription.module.css";
import { loadUserSubscription, subscriptionAddInCart } from '../../redux/features/profile';
import { loadCartItems } from '../../redux/features/cart';

const Subscriptions = () => {
  const dispatch = useDispatch();

  const subscriptions = useSelector(
    (state) => state.subscriptionsReducer.subscriptions
  );

  const cartItems = useSelector((state) => state.cartReducer.cartItems._id);
  const load = useSelector(state => state.cartReducer.loading)
  const profileId = useSelector(state => state.auth.id)
  console.log(cartItems)

  useEffect(() => {
    dispatch(loadSubscriptions());
  }, [dispatch]);

  useEffect(()=> {
    dispatch(loadCartItems(profileId))
  }, [dispatch])

  const handleAddSubscription = (subscription) => {
    dispatch(subscriptionAddInCart(subscription, cartItems))
  }
  return (
    <div className={styles.carts__block} id="subscription">
      <div className={styles.container}>
        <h1 className={styles.carts__title}>Абонементы</h1>
        <div className={styles.carts__items}>

          {!load ? subscriptions.map((subscription) => {
            return (
              <figure className={styles.cart} key={subscription._id}>
                <h2 className={styles.cart__img__title}>{subscription.name}</h2>
                <img src={`http://localhost:5000/${subscription.img}`} alt="" />
                <figcaption>
                  <h3 className={styles.cart__price}>{subscription.price} ₽</h3>
                  <p>Абонемент на: {subscription.time} дней</p>
                  <p>{subscription.text}</p>
                  <button onClick={()=> handleAddSubscription( subscription._id)}>Купить</button>
                </figcaption>
              </figure>
            );
          }) : null}
          
        </div>
      </div>
    </div>
  );
};

export default Subscriptions;
