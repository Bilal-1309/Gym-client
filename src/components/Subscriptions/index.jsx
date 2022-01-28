import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadSubscriptions } from "../../redux/features/subscription";
import Carousel from 'react-elastic-carousel'
import styles from "./subscription.module.css";
import { loadUserSubscription, subscriptionAddInCart } from '../../redux/features/profile';
import { loadCartItems } from '../../redux/features/cart';
import { useNavigate } from 'react-router-dom';

const Subscriptions = () => {
  const dispatch = useDispatch();

  const subscriptions = useSelector((state) => state.subscriptionsReducer.subscriptions);
  const cartItems = useSelector((state) => state.cartReducer.cartItems._id);
  const load = useSelector(state => state.cartReducer.loading)
  const profileId = useSelector(state => state.auth.id)
  const cartSubscription = useSelector(state => state.cartReducer.cartItems.subscription)
  const profileSubscription = useSelector(state => state.profileReducer.subscription)
  console.log(cartSubscription)
  const token = useSelector((state) => state.auth.token)
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(loadSubscriptions());
  }, [dispatch]);

  useEffect(() => {
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
          <Carousel
          itemsToShow={3} 
          autoPlaySpeed={5000} 
          enableAutoPlay
          tiltEasing="cubic-bezier(0.110, 1, 1.000, 0.210)"
          transitionMs={700}
        >
          {!load ? subscriptions.map((subscription) => {
            return (
              <>
                  <figure className={styles.cart} key={subscription._id}>
                    <h2 className={styles.cart__img__title}>{subscription.name}</h2>
                    <img src={`http://localhost:5000/${subscription.img}`} alt="" />
                    <figcaption>
                      <h3 className={styles.cart__price}>{subscription.price} ₽</h3>
                      <p>Абонемент на: {subscription.time / 3600 / 24} дней</p>
                      <p>{subscription.text}</p>
                      {subscription._id !== cartSubscription ?
                      <button onClick={() => token ? handleAddSubscription(subscription._id) : navigate('/signin')}>Купить</button> : null}
                    </figcaption>
                  </figure>
                </>
                );
          }) : null}

              </Carousel>
        </div>
      </div>
    </div >
  );
};

export default Subscriptions;
