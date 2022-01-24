import React from "react";
import {useDispatch, useSelector } from "react-redux";
import { increaseAmount, removeCartItem } from "../../../redux/features/cart";
import styles from "./product.module.css";

const CartItem = ({ productCart }) => {

  const dispatch = useDispatch()

  const token = useSelector((state) => state.auth.token);
  const products = useSelector((state) => state.productsReducer.products);
  const cartItems = useSelector((state) => state.cartReducer.cartItems);
  const loading = useSelector((state) => state.cartReducer.loading);

  const handleIncrement = (product) => {
    dispatch(increaseAmount(product, cartItems._id))
  }

  const handleRemove = (product) => {
    dispatch(removeCartItem(product, cartItems._id))
  }

  if(!token) {
    return null
  }

  return !loading ? products.map((product) => {
    if (productCart.product === product._id) {
      return (
        <tr className={styles.cart__tr} key={product._id}>
          <td>{product.name}</td>
          <td>
            <div className={styles.cart__item__amount}>
              <button
              onClick={() =>
                  handleIncrement(product._id)
                }
              >
                +
              </button>
              <span>{productCart.amount}</span>
              <button
              /* onClick={() =>
                  handleDecrement(cartItem)
                } */
              >
                -
              </button>
            </div>
          </td>
          <td>
            <button
              className={
                styles.cart__item__delete
              } onClick={() => handleRemove(product._id)}
            >
              ✖️
            </button>
          </td>
        </tr>
      );
    } 
  }) : 'идет загрузка'
};

export default CartItem;
