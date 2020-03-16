import React from 'react'
import { Route, Redirect} from 'react-router-dom';
import { connect } from 'react-redux'



const PrivateRoute = ({ component: Component, authReducer, ...rest }) => (
        <Route
        {...rest}
        render = {props =>
            // localStorage.getItem('auth-token')
            authReducer.isAuthenticated === true ?(
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
    authReducer:state.authReducer
})

export default connect(mapStateToProps)(PrivateRoute);