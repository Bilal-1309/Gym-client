import React from "react";
import {useDispatch, useSelector } from "react-redux";
import { increaseAmount, removeCartItem } from "../../../redux/features/cart";
import styles from "./product.module.css";

const CartItem = ({ productCart }) => {

  const dispatch = useDispatch()

  const products = useSelector((state) => state.productsReducer.products);
  const cartItems = useSelector((state) => state.cartReducer.cartItems);

  const handleIncrement = (product) => {
    dispatch(increaseAmount(product, cartItems._id))
  }

  const handleRemove = (product) => {
    dispatch(removeCartItem(product, cartItems._id))
  }

  return products.map((product) => {
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
  });
};

export default CartItem;
