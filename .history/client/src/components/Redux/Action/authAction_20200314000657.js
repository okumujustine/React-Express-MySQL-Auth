import {
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    AUTH_ERROR,
    USER_LOADING,
    USER_LOADED
  } from '../Action/types'
  import axios from 'axios'
  import { returnErrors } from '../Action/errorAction'

  export const loadUser = () => (dispatch, getState) => {
      dispatch({ type: USER_LOADING})


      axios.get('http://localhost:4000/api/v1/accounts/doc', tokenConfig(getState))
      .then(res => dispatch({
          type:USER_LOADED,
          payload:res.data
      })
      ).catch(err => {
          dispatch(returnErrors(err.response.data, err.response.status))
          dispatch({
              type:AUTH_ERROR
          })
      })
  }

//   login action
export const login = ({user_contact, user_password}) => dispatch => {
    //headers
    const config = {
        headers:{
            "Content-Type":"application/json"
        }
    }

    const body = JSON.stringify({user_contact, user_password})

    axios
    .post('http://localhost:4000/api/v1/accounts/login', body, config)
    .then(res => {
        dispatch({
            type:LOGIN_SUCCESS,
            payload:res.data
        })
        dispatch(loadUser())
    })
    .catch(err => {
        dispatch(returnErrors(err.response.data, err.response.status))
        dispatch({
            type:LOGIN_FAILED
        })
    })
}

  export const tokenConfig = getState => {
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

    return config
  }