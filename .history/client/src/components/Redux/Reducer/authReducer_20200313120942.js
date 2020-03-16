import {
  // LOGIN_SUCCESS,
  // LOGIN_FAILED,
  // AUTH_ERROR,
  USER_LOADING
  // USER_LOADED
} from '../Action/types'

const initialState = {
    token:localStorage.getItem('auth-token'),
    isAuthenticated:null,
    isLoading:false,
    user:null
  };
  
  function authReducer(state = initialState, action) {
    switch(action.type){
      case USER_LOADING:
        return{
          ...state,
          isLoading: true
        }
    }
  };

  export default authReducer;