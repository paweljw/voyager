import * as actionTypes from '../actions/actionTypes'

const initialState = {
  token: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_GITHUB_TOKEN:
      localStorage.setItem('githubToken', action.token)

      return {
        ...state,
        token: action.token
      }
    case actionTypes.CLEAR_GITHUB_TOKEN:
      return {
        ...state,
        token: null
      }
    case actionTypes.RESTORE_GITHUB_TOKEN:
      return {
        ...state,
        token: localStorage.getItem('githubToken')
      }
    default: return state
  }
}

export default reducer
