import React from 'react'
import { Route, Redirect} from 'react-router-dom';
import { connect } from 'react-redux'



const PrivateRoute = ({ component: Component, ...rest }) => (
        <Route
        {...rest}
        render = {props =>
            localStorage.getItem('auth-token') ?(
                <Component {...props} />
            ):(
                <Redirect to={{path:"/login",
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