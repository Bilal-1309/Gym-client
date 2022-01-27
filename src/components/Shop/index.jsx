import React, { useEffect, useState } from "react";
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from "react-redux";
import { addCartItem } from "../../redux/features/cart";
import { loadProducts } from "../../redux/features/shop";
import { NavLink } from "react-router-dom";
import Cart from "./Cart";
import styles from "./shop.module.css";
import logo from "../../assets/logog.png";

const Shop = () => {
  const dispatch = useDispatch();

  const [value, setValue] = useState("");

  const token = useSelector((state) => state.auth.token);
  const products = useSelector((state) => state.productsReducer.products);
  const cartItems = useSelector((state) => state.cartReducer.cartItems);
  const loading = useSelector((state) => state.cartReducer.loading);

  useEffect(() => {
    dispatch(loadProducts());
  }, [dispatch]);

  const handleBuyProduct = (product) => {
    dispatch(addCartItem(product, cartItems._id));
  };

  const filtered = products.filter((product) => {
    return product.name.toLowerCase().includes(value.toLowerCase());
  });

  const handleSearch = (text) => {
    setValue(text);
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
      <div className={styles.shop___search__form}>
      <TextField
          id="standard-search"
          label="Введите название продукта..."
          type="search"
          variant="standard"
          className={styles.search__form}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
      <div className={styles.shop__main}>
        {!loading
          ? filtered.map((product) => {
              const isCartItem = !token
                ? null
                : cartItems.productsCart.find(
                    (item) => item.product === product._id
                  );

              return (
                <div className={styles.product__cart} key={product._id}>
                  <div className={styles.product__cart__img}>
                    <img
                      src={`http://localhost:5000/${product.img}`}
                      alt="product"
                    />
                  </div>
                  <div className={styles.product__cart__text}>
                    <h5>{product.name}</h5>
                    <p>Упаковка: {product.weight} гр</p>
                    <p> Цена: {product.price} ₽</p>
                  </div>

                  {!token ? (
                    <NavLink to={"/signin"}>
                      <button>Купить</button>
                    </NavLink>
                  ) : (
                    <button
                      disabled={isCartItem}
                      onClick={() => handleBuyProduct(product._id)}
                    >
                      {isCartItem ? "В корзине" : "Купить"}
                    </button>
                  )}
                </div>
              );
            })
          : "идет загрузка"}
      </div>
    </div>
  );
};

export default Shop;
