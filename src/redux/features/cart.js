const initialState = {
  cartItems: {},
  loading: false,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "cartItems/load/pending":
      return {
        ...state,
        loading: true,
      };

    case "cartItems/load/fulfilled":
      return {
        ...state,
        loading: false,
        cartItems: action.payload,
      };

    case "product/add/fulfilled":
      return {
        ...state,
        cartItems: action.payload,
      };

    case "product/delete/fulfilled":
      return {
        ...state,
        cartItems: action.payload,
      };

    case "product/increase/fulfilled":
      return {
        ...state,
        cartItems: action.payload.data.map((cartItem) => {
          if (action.payload.productId === cartItem.product) {
            cartItem.amount += 1;
            return cartItem;
          }
          return state;
        }),
      };

    default:
      return state;
  }
};

export const removeCartItem = (product, id) => {
  return async (dispatch) => {
    dispatch({ type: "product/delete/pending" });
    try {
      const res = await fetch(`http://localhost:5000/carts/delete/${id}`, {
        method: "PATCH",
        body: JSON.stringify({ product: product }),
        headers: {
          "Content-type": "application/json",
        },
      });

      const data = await res.json();

      dispatch({ type: "product/delete/fulfilled", payload: data });
    } catch (error) {
      dispatch({ type: "product/delete/rejected", payload: error });
    }
  };
};

export const addCartItem = (product, id) => {
  return async (dispatch) => {
    dispatch({ type: "product/add/pending" });
    try {
      const res = await fetch(`http://localhost:5000/carts/add/${id}`, {
        method: "PATCH",
        body: JSON.stringify({ product: product, amount: 1 }),
        headers: {
          "Content-type": "application/json",
        },
      });

      const data = await res.json();

      dispatch({ type: "product/add/fulfilled", payload: data });
    } catch (error) {
      dispatch({ type: "product/add/rejected", payload: error });
    }
  };
};

export const loadCartItems = (id) => {
  return async (dispatch) => {
    dispatch({ type: "cartItems/load/pending" });
    try {
      const res = await fetch(`http://localhost:5000/carts/${id}`);

      const data = await res.json();

      dispatch({ type: "cartItems/load/fulfilled", payload: data });
    } catch (error) {
      dispatch({ type: "cartItems/load/rejected", payload: error });
    }
  };
};

export const increaseAmount = (productId, id) => {
  return async (dispatch) => {
    dispatch({ type: "product/increase/pending" });
    try {
      const res = await fetch(
        `http://localhost:5000/carts/product/increment/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-type": "application/json",
          },
        }
      );

      const data = await res.json();
      console.log(productId, data.productsCart);

      dispatch({
        type: "product/increase/fulfilled",
        payload: { productId, data: data.productsCart },
      });
    } catch (error) {
      dispatch({ type: "product/increase/rejected", payload: error });
    }
  };
};

/* export const handleIncrement = (cartItem, productItem) => {
  if (productItem) {
    dispatch({ type: "cart/increment", payload: cartItem.productId });
  }
};

export const handleDecrement = (cartItem) => {
  if(cartItem.amount > 1) {
    dispatch({ type: "cart/decrement", payload: cartItem.productId });
  }
};

 */
