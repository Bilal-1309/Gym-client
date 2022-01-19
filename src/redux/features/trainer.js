const initialState = {
  trainers: [],
  loading: false,
  error: null,
}

export const trainerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'trainers/load/pending':
      return {
        ...state,
        loading: true,
      };
    case 'trainers/load/fullfilled':
      return {
        ...state,
        trainers: action.payload,
        loading: false,
      };
    case 'trainers/load/rejected':
      return {
        ...state,
        error: action.payload
      }
      default:
        return state
  }
}

export const loadTrainers = () => {
  return async(dispatch) => {
    dispatch({type: 'trainers/load/pending'});

    try {
      const res = await fetch('http://localhost:5000/users/trainers')
      const json = await res.json()

      dispatch({type: 'trainers/load/fullfilled', payload: json})
    } catch(error) {
      dispatch({type: 'trainers/load/rejected', payload: error})
    }
  }
}