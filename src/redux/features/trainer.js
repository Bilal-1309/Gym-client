const initialState = {
  trainer: [],
  loading: false,
  error: null,
}

export const trainerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'trainer/fetch/pending':
      return {
        ...state,
        loading: true,
      };
    case 'trainer/fetch/fullfilled':
      return {
        ...state,
        trainer: action.payload,
        loading: false,
      };
    case 'trainer/fetch/rejected':
      return {
        ...state,
        error: action.payload
      }
      default:
        return state
  }
}

export const fetchTrainers = () => {
  return async(dispatch) => {
    dispatch({type: 'trainer/fetch/pending'});

    try {
      const res = await fetch('http://localhost:5000/admin/trainers')
      const json = await res.json()

      dispatch({type: 'trainer/fetch/fullfilled', payload: json})
    } catch(e) {
      dispatch({type: 'trainer/fetch/rejected', payload: e})
    }
  }
}