import {
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    AUTH_ERROR,
    USER_LOADING,
    USER_LOADED
  } from '../Action/types'

  export const loadUser = () => (dispatch, getState) => {
      dispatch({ type: USER_LOADING})

      const token = getState().authReducer.token
      //headers
      const config = {
          headers:{
              "Content-Type":"application/json"
          }
      }
      if(token){
        config.headers['x-auth-token'] = token
      }

      axios.get('', config)
      .then(res => dispatch({
          type:USER_LOADED,
          payload:res.data
      })
      ).catch(err => {
          dispatch({
              type:AUTH_ERROR
          })
      })
  }