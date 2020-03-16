import {
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    AUTH_ERROR,
    USER_LOADING,
    USER_LOADED
  } from '../Action/types'

  export const loadUser = () => (dispatch, getState) => {
      dispatch({ type: USER_LOADING})
  }