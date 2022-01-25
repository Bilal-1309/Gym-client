const initialState = {
  subscriptions: [],
  loading: false,
  error: null,
}

export const subscriptionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'subscriptions/load/pending':
      return {
        ...state,
        loading: true,
      };
    case 'subscriptions/load/fullfilled':
      return {
        ...state,
        subscriptions: action.payload,
        loading: false,
      };
    case 'subscriptions/load/rejected':
      return {
        ...state,
        error: action.payload
      }
    case "subscriptions/post/pending":
      return {
        ...state,
        loading: true
      }
    /* case "subscriptions/post/filfilled":
      return {
        ...state,
        trainers: [...state.subscriptions, action.payload],
        loading: false
      } */
    case "subscriptions/post/rejected":
      return {
        ...state,
        e: action.payload
      }
      case "image/post/fulfilled": 
      return {
        ...state,
        trainers: [...state.subscriptions, action.payload],
      }
    default:
      return state
  }
}

export const loadSubscriptions = () => {
  return async (dispatch) => {
    dispatch({ type: 'subscriptions/load/pending' });
    try {
      const res = await fetch("http://localhost:5000/users/subscriptions");
      const data = await res.json();


      dispatch({ type: 'subscriptions/load/fullfilled', payload: data });
    } catch (e) {
      dispatch({ type: 'subscriptions/load/rejected', payload: e });
    }
  };
};

export const addAbonements = (name, img, price, time, text) => {
  return async (dispatch) => {
    dispatch({ type: "subscriptions/post/pending" })
    try {
      let options = {
        method: "POST",
        body: JSON.stringify({
          name: name,
          price: price,
          time: time,
          text: text
        }),
        headers: { "Content-type": "application/json" },
      };

      const res = await fetch("http://localhost:5000/admin/subscriptions", options)
      const subscriptions = await res.json()
      console.log(subscriptions);


      const formData = new FormData();
      formData.append("img", img)
      const resImage = await fetch(`http://localhost:5000/admin/subscriptions/image/${subscriptions._id}`, {
        method: "PATCH",
        body: formData,
      })

      const data = await resImage.json()

      dispatch({ type: "subscriptions/post/filfilled", payload: subscriptions })
      dispatch({ type: "image/post/filfilled", payload: data })
    } catch (e) {
      dispatch({ type: "subscriptions/post/rejected", payload: e })
    }
  }
}