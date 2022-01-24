const initialState = {
  products: [],
  loading: false,
  error: null,
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "products/load/pending":
      return {
        ...state,
        loading: true,
      };

    case "products/load/fulfilled":
      return {
        ...state,
        loading: false,
        products: action.payload,
      };

    case "products/load/rejected":
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const loadProducts = () => {
  return async (dispatch) => {
    dispatch({type: "products/load/pending" })
    try {

      const res = await fetch(`http://localhost:5000/users/products`)
      const products = await res.json()

      dispatch({type: "products/load/fulfilled", payload: products})
      
    } catch (error) {
      dispatch({type: "products/load/rejected", payload: error })
    }
  }
}


