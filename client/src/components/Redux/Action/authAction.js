import {
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    AUTH_ERROR,
    USER_LOADING,
    USER_LOADED
  } from '../Action/types'
  import axios from 'axios'
  import { returnErrors } from '../Action/errorAction'
  import history from '../../config/PrivateRoute/history'


  const ulrPath = 'http://localhost:4000/api/v1/'
  const loadUsers = `${ulrPath}accounts/all`
  const loginUsers = `${ulrPath}accounts/login`
  const signUpUsers = `${ulrPath}accounts/register`


  export const loadUser = () => (dispatch, getState) => {
    
      dispatch({ type: USER_LOADING})

      axios.get(loadUsers, tokenConfig(getState))
      .then(res => {dispatch({
          type:USER_LOADED,
          payload:res.data
      })
    }
      ).catch(err => {
        //   dispatch(returnErrors(err.response.data, err.response.status))
          dispatch({
              type:AUTH_ERROR
          })
      })
  }


//   login action
export const login = ({user_email, user_password}) => dispatch => {
    //headers
    const config = {
        headers:{
            "Content-Type":"application/json"
        }
    }

    const body = JSON.stringify({user_email, user_password})

    axios
    .post(loginUsers, body, config)
    .then(res => {
        dispatch({
            type:LOGIN_SUCCESS,
            payload:res.data
        })
        console.log(res.data)
        history.push("/")
    })
    .catch(err => {
        dispatch(returnErrors(err.response.data, err.response.status))
        dispatch({
            type:LOGIN_FAILED
        })
    })
}


// sign up
export const signup = ({user_name, user_contact, user_email, user_password, user_role}) => dispatch => {
    //headers
    const config = {
        headers:{
            "Content-Type":"application/json"
        }
    }

    const body = JSON.stringify({user_name, user_contact, user_email, user_password, user_role})

    axios
    .post(signUpUsers, body, config)
    .then(res => {
        history.push("/login")
    })
    .catch(err => {
        dispatch(returnErrors(err.response.data, err.response.status))
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