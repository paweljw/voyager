import * as actionTypes from './actionTypes'

export const setToken = token => {
  return {
    type: actionTypes.SET_GITHUB_TOKEN,
    token
  }
}

export const clearToken = () => {
  return {
    type: actionTypes.CLEAR_GITHUB_TOKEN
  }
}

export const restoreToken = () => {
  return {
    type: actionTypes.RESTORE_GITHUB_TOKEN
  }
}
