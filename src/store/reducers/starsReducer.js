import * as actionTypes from '../actions/actionTypes'

const initialState = {
  stars: [],
  loading: false,
  error: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STARS_PULL_STARTED:
      return {
        ...state,
        loading: true,
        stars: [],
        error: null
      }
    case actionTypes.STARS_PULL_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      }
    case actionTypes.STARS_PULL_FINISHED:
      return {
        ...state,
        loading: false
      }
    case actionTypes.APPEND_STARS:
      return {
        ...state,
        stars: state.stars.concat(...action.stars)
      }
    default: return state
  }
}

export default reducer
