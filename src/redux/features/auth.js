const initialState = {
  signingUp: false,
  error: null,
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case "application/signup/pending":
      return {
        ...state,
        signingUp: true,
        error: null,
      };

    case "application/signup/fulfilled":
      return {
        ...state,
        signingUp: false,
      };

    case "application/signup/rejected":
      return {
        ...state,
        signingUp: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export const createUser = (email, password) => {
  return async (dispatch) => {
    dispatch({ type: "application/signup/pending" });

    const response = await fetch("http://localhost:5000/users/register", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-type": "application/json",
      },
    });

    const json = await response.json();
    console.log(json);
    if (json.error) {
      dispatch({ type: "application/signup/rejected", error: json.error });
    } else {
      dispatch({ type: "application/signup/fulfilled", payload: json });
    }
  };
};
