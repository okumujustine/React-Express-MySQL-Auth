import React from 'react'
import { Route, Redirect} from 'react-router-dom';
import { connect } from 'react-redux'



const PrivateRoute = ({ component: Component, auth, ...rest }) => (
        <Route
        {...rest}
        render = {props =>
            // localStorage.getItem('auth-token')
             !auth.isAuthenticated ?(
                <Component {...props} />
            ):(
                <Redirect to={{pathname:"/login",
                state:{from:props.location}
            }} />
            )
        }
        />
    )

const mapStateToProps = (state) =>({
    auth:state.authReducer
})

export default connect(mapStateToProps)(PrivateRoute);