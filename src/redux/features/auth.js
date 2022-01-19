const initialState = {
  signingUp: false,
  signingIn: false,
  error: null,
  token: localStorage.getItem("token"),
  id: localStorage.getItem("id")
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




      case "application/signin/pending":
        return {
          ...state,
          signingIn: true,
          error: null,
        };
  
      case "application/signin/fulfilled":
        return {
          ...state,
          signingIn: false,
          id: action.payload.json.id,
          token:action.payload.json.token
        };
  
      case "application/signin/rejected":
        return {
          ...state,
          signingIn: false,
          error: action.error,
        };
      case "application/logOut/fulfilled":
        return {
          ...state,
          token: null
        }
      default:
        return state;
  }
};

export const createUser = (email, password, name, weight) => {
  return async (dispatch) => {
    dispatch({ type: "application/signup/pending" });

    const response = await fetch("http://localhost:5000/users/register", {
      method: "POST",
      body: JSON.stringify({ email, password, name, weight }),
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


export const login = (email,password) =>{
    return async dispatch =>{
        dispatch({ type: "application/signin/pending" });

        const response = await fetch("http://localhost:5000/users/login", {
          method: "POST",
          body: JSON.stringify({ email, password }),
          headers: {
            "Content-type": "application/json",
          },
        });
    
        const json = await response.json();
        console.log(json);
        if (json.error) {
          dispatch({ type: "application/signin/rejected", error: json.error });
        } else {
          dispatch({ type: "application/signin/fulfilled", payload: {json} });
          localStorage.setItem("token", json.token);
          localStorage.setItem("id", json.id);
        }
    }
}

export const logOut = () => {
  return async (dispatch) => {
    dispatch({type: "application/logOut/fulfilled"});
    localStorage.clear();
  }
}