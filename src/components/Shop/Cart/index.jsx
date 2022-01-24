import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import cartIcon from "bootstrap-icons/icons/cart2.svg";
import styles from "./cart.module.css";
import CartItem from "../CartItem";
import { useEffect } from "react";
import { loadCartItems } from "../../../redux/features/cart";

const Cart = () => {
  const dispatch = useDispatch();

  const [opened, setOpened] = useState(false);

  const userId = useSelector((state) => state.auth.id);
  const loading = useSelector((state) => state.cartReducer.loading);
  const loadingProducts = useSelector((state) => state.productsReducer.loading);

  useEffect(() => {
    dispatch(loadCartItems(userId));
  }, [dispatch, userId]);

  const cartItems = useSelector((state) => state.cartReducer.cartItems);
  
  console.log(loading && loadingProducts ? "идет загрузка" : cartItems.productsCart);
  
  const handleClose = () => {
    setOpened(false);
  };

  return (
    <>
      <div className={styles.cartButton} onClick={() => setOpened(true)}>
        <img src={cartIcon} alt="cart" />
        <span>{cartItems.length}</span>
      </div>

      {!opened ? null : (
        <div className={styles.cart__window}>
          <button className={styles.cart__window__btn} onClick={handleClose}>
            Закрыть
          </button>
          {/* {!cartItems.length ? (
            "В корзине нет товаров"
          ) : ( */}
            <table className={styles.cart__items}>
              <thead>
                <tr>
                  <th>Товар</th>
                  <th>Кол-во</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {cartItems.productsCart.map((productCart) => {
                  return <CartItem key={productCart._id} productCart={productCart} />;
                })}
              </tbody>
            </table>
          {/* )} */}
        </div>
      )}
    </>
  );
};

export default Cart;
