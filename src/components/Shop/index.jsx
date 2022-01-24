import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCartItem } from "../../redux/features/cart";
import { loadProducts } from "../../redux/features/shop";
import { NavLink } from "react-router-dom";
import Cart from "./Cart";
import styles from "./shop.module.css";
import logo from "../../assets/logog.png";

const Shop = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.productsReducer.products);
  const cartItems = useSelector((state) => state.cartReducer.cartItems);
  console.log(cartItems.productsCart);

  useEffect(() => {
    dispatch(loadProducts());
  }, [dispatch]);

  const handleBuyProduct = (product) => {
    dispatch(addCartItem(product, cartItems._id));
  };

  return (
    <div className={styles.shop__body}>
      <div className={styles.shop__header}>
        <div className={styles.shop__header__log}>
          <NavLink to={"/"}>
            <img src={logo} alt="logo" />
          </NavLink>
        </div>

        <h1>Магазин</h1>
        <Cart />
      </div>
      <div className={styles.shop__main}>
        {products.map((product) => {

          const isCartItem = cartItems ? cartItems.productsCart.find(item => item.product === product._id) : null

          return (
            <div className={styles.product__cart} key={product._id}>
              <div className={styles.product__cart__img}>
                <img src={product.img} alt="product" />
              </div>
              <div className={styles.product__cart__text}>
                <h5>{product.name}</h5>
                <p>Упаковка: {product.weight} гр</p>
                <p> Цена: {product.price} ₽</p>
              </div>

              <button 
              disabled={isCartItem}
              onClick={() => handleBuyProduct(product._id)}
              >
                {isCartItem ? 'В корзине' : 'Купить'}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Shop;
