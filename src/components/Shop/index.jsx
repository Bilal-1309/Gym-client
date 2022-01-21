import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadProducts } from "../../redux/features/shop";
import styles from "./shop.module.css";
import bagIcon from "bootstrap-icons/icons/cart2.svg";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProducts());
  }, [dispatch]);

  const products = useSelector((state) => state.productsReducer.products);

  return (
    <div className={styles.shop__body}>
      <div className={styles.shop__header__title}>
      <h1>Магазин</h1>
      <img src={bagIcon} alt='' />
      </div>
      <div className={styles.shop__main}>

        {products.map((product) => {
          return (
            <div className={styles.product__cart}>
              <div className={styles.product__cart__img}>
                <img src={product.img} alt="product" />
              </div>
              <div className={styles.product__cart__text}>
                <h5>{product.name}</h5>
                <p>Упаковка: {product.weight} гр</p>
                <p> Цена: {product.price} ₽</p>
              </div>
              <button>Купить</button>
            </div>
          );
        })}

      </div>
    </div>
  );
};

export default Shop;
